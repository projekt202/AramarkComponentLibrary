import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  SecurityContext,
  ViewChild,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { lastValueFrom } from "rxjs";

import { InputComponent } from "../../../shared/components/input/input.component";
import { LocationCoords } from "../../../shared/components/location-card/location-card.model";
import { TabsComponent } from "../../../shared/components/tabs/tabs.component";
import { FiltersService } from "../../../shared/services/filters/filters.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { TypographyService } from "../../../shared/services/typography/typography.service";
import { ProductCardRowComponent } from "../product-card-row/product-card-row.component";
import { ProductCardRowProducts } from "../product-card-row/product-card-row.model";

type Categories = "Products" | "Site Results" | "Newsroom" | "Locations";

@Component({
  selector: "aus-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements AfterViewInit {
  @Input() keyword?: string = "";

  @ViewChild("input") input?: InputComponent;
  @ViewChild("tabs") tabs?: TabsComponent;
  @ViewChild("productsrow") productsrow?: ProductCardRowComponent;

  resultsCategories = ["Products", "Site Results", "Newsroom", "Locations"];
  selectedCategory: Categories = "Products";
  isLoading: boolean = true;
  searchTerm: string = "";
  numResults: number = 0;
  currProdsPage: number = 0;
  gotInitialKeyword: boolean = false;

  results: {
    products: ProductCardRowProducts;
    siteResults: {
      title: string;
      description: string;
      link: string;
    }[];
    articles: {
      title: string;
      description: string;
      link: string;
    }[];
    locations: {
      city: string;
      name: string;
      address: string;
      zip: string;
      phone: string;
      url: string;
      coords: LocationCoords;
    }[];
  } = {
    products: [],
    siteResults: [],
    articles: [],
    locations: [],
  };

  noResults = {
    wysiwyg: "",
    terms: [
      {
        title: "",
        items: [],
      },
    ],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
    private fs: FiltersService,
    private hostElement: ElementRef,
    private ts: TypographyService,
    private ps: PlatformService,
    private ds: DomSanitizer
  ) {
    this.parseResult = this.parseResult.bind(this);
    this.searchTerm = this.keyword || "";

    /* Empty state/No results data */
    this.apollo
      .query({
        query: gql`
          query getData {
            acfOptions {
              optionsTabs {
                noResultsText
                listOfTerms {
                  headline
                  terms {
                    term
                  }
                }
              }
            }
          }
        `,
      })
      .subscribe((res: any) => {
        const {
          acfOptions: {
            optionsTabs: { noResultsText, listOfTerms },
          },
        } = res.data;
        this.noResults.wysiwyg = noResultsText;
        listOfTerms.forEach((t: any) => {
          this.noResults.terms.push({
            title: t.headline,
            items: t.terms.map((_t: any) => _t.term),
          });
        });
      });
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      const kwd = params["kwd"];
      if (kwd && !this.gotInitialKeyword) {
        this.gotInitialKeyword = true;
        this.searchTerm = kwd;
        this.input?.setValue(kwd);
        this.getResults();
      }
    });
  }

  searchByTerm(term: string) {
    this.searchTerm = term;
    this.input?.setValue(term);
    this.getResults();
  }

  async getResults() {
    if (!this.searchTerm) return;
    this.keyword = this.searchTerm;
    this.ts.setText(
      this.hostElement.nativeElement,
      ".search__header-title h1.typography",
      "Results for “" + this.keyword + "”"
    );
    this.numResults = 0;
    this.isLoading = true;
    this.selectedCategory = "Products";
    this.tabs?.setActiveIdx(0);
    this.router.navigate([], {
      queryParamsHandling: "merge",
      relativeTo: this.route,
      queryParams: {
        kwd: this.searchTerm,
      },
    });
    this.currProdsPage = 0;
    if (this.ps.isServer()) return;
    const query = this.apollo.query({
      query: gql`
        query getData($keyword: String!) {
          searchWP(first: 1000, where: { input: $keyword }) {
            nodes {
              ... on Post {
                id
                title
                contentTypeName
                link
                excerpt
              }
              ... on Product {
                id
                title
                contentTypeName
                link
                productId
                postProduct {
                  styleId
                  attributes {
                    productDescription
                    productFeatures
                    productTitle
                    sizes
                    legalDisclaimer
                    productDetails {
                      color
                      colorCode
                      colorname
                      tag
                      image {
                        brandfolderEmbed {
                          url
                        }
                      }
                    }
                  }
                }
              }
              ... on Location {
                id
                title
                contentTypeName
                link
                postLocation {
                  locationCity
                  locationName
                  locationStreetAddress
                  locationUnitNumber
                  locationState
                  locationPhone
                  locationNumber
                  locationZipCode
                  locationGoogleMap {
                    latitude
                    longitude
                  }
                }
              }
              ... on Article {
                id
                title
                contentTypeName
                link
              }
              ... on Page {
                id
                title
                contentTypeName
                link
              }
            }
          }
        }
      `,
      variables: {
        keyword: this.searchTerm,
      },
    });
    const res: any = await lastValueFrom(query);
    const { nodes: data } = res.data.searchWP;
    this.results = {
      products: [],
      siteResults: [],
      articles: [],
      locations: [],
    };
    this.productsrow?.setProducts([]);
    data.forEach(this.parseResult);
    this.numResults = data.length;
    this.ts.setText(
      this.hostElement.nativeElement,
      ".search__header-intro h3.typography",
      this.getNumResults()
    );
    this.productsrow?.setProducts(this.getPageProducts());
    this.selectedCategory = this.getResultsCategories()[0];
    this.isLoading = false;
  }

  parseResult(res: any) {
    switch (res.contentTypeName) {
      case "products":
        this.results.products.push(
          this.fs.parseProduct(
            {
              id: "",
              name: "",
              details: {
                sizes: "",
                description: "",
              },
              fks: [],
              legal: "",
              tag: "",
              options: [
                {
                  color: "",
                  colorName: "",
                  imgUrl: "",
                },
              ],
            },
            {
              ...res,
              services: { edges: [] },
              genders: { edges: [] },
              attributes: { edges: [] },
              materials: { edges: [] },
            }
          )
        );
        break;
      case "post":
      case "page":
        this.results.siteResults.push({
          title: res.title,
          description: res.excerpt || "",
          link: res.link.replace(
            "api.aramarkuniform.com",
            "www.aramarkuniform.com"
          ),
        });
        break;
      case "articles":
        this.results.articles.push({
          title: res.title,
          description: res.excerpt,
          link: res.link.replace(
            "api.aramarkuniform.com",
            "www.aramarkuniform.com"
          ),
        });
        break;
      case "locations":
        this.results.locations.push({
          url: res.link.replace(
            "api.aramarkuniform.com",
            "www.aramarkuniform.com"
          ),
          name: res.postLocation.locationName,
          city: res.postLocation.locationCity,
          phone: res.postLocation.locationPhone,
          zip: res.postLocation.locationZipCode,
          coords: {
            lat: res.postLocation.locationGoogleMap.latitude,
            lng: res.postLocation.locationGoogleMap.longitude,
          },
          address: res.postLocation.locationStreetAddress,
        });
        break;
      default:
        break;
    }
  }

  onKeywordChangeHandler(val: string) {
    this.searchTerm = val;
  }

  onCategoryChanged(idx: number) {
    this.selectedCategory = this.getResultsCategories()[idx];
    this.currProdsPage = 0;
  }

  getExcerpt(text: string) {
    if (text.length <= 250) return text;
    return `${text.substring(0, 259)}...`;
  }

  getNumResults() {
    const label = this.numResults === 1 ? "result" : "results";
    return this.numResults + ` ${label}`;
  }

  getPaginationConfig() {
    const total = Math.ceil(this.results.products.length / 12);
    return {
      total,
      size: total >= 4 ? 4 : total,
    };
  }

  onPageHandler(page: number) {
    this.currProdsPage = page - 1;
    this.productsrow?.setProducts(this.getPageProducts());
  }

  getPageProducts() {
    const pageProds = this.results.products.slice(
      this.currProdsPage * 12,
      this.currProdsPage * 12 + 12
    );
    return pageProds;
  }

  getResultsCategories(): Categories[] {
    const cats = [];
    if (this.results.products.length) {
      cats.push("Products");
    }
    if (this.results.articles.length) {
      cats.push("Newsroom");
    }
    if (this.results.locations.length) {
      cats.push("Locations");
    }
    if (this.results.siteResults.length) {
      cats.push("Site Results");
    }
    return cats as Categories[];
  }

  getKeyword() {
    return this.ds.sanitize(SecurityContext.HTML, this.keyword || "");
  }
}
