import { AfterViewInit, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Apollo } from "apollo-angular";
import { InputComponent } from "../../../shared/components/input/input.component";
import { LocationCoords } from "../../../shared/components/location-card/location-card.model";
import { TabsComponent } from "../../../shared/components/tabs/tabs.component";
import { FiltersService } from "../../../shared/services/filters/filters.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { TypographyService } from "../../../shared/services/typography/typography.service";
import { ProductCardRowComponent } from "../product-card-row/product-card-row.component";
import { ProductCardRowProducts } from "../product-card-row/product-card-row.model";
import * as i0 from "@angular/core";
declare type Categories = "Products" | "Site Results" | "Newsroom" | "Locations";
export declare class SearchComponent implements AfterViewInit {
    private route;
    private router;
    private apollo;
    private fs;
    private hostElement;
    private ts;
    private ps;
    private ds;
    keyword?: string;
    input?: InputComponent;
    tabs?: TabsComponent;
    productsrow?: ProductCardRowComponent;
    resultsCategories: string[];
    selectedCategory: Categories;
    isLoading: boolean;
    searchTerm: string;
    numResults: number;
    currProdsPage: number;
    gotInitialKeyword: boolean;
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
    };
    noResults: {
        wysiwyg: string;
        terms: {
            title: string;
            items: never[];
        }[];
    };
    constructor(route: ActivatedRoute, router: Router, apollo: Apollo, fs: FiltersService, hostElement: ElementRef, ts: TypographyService, ps: PlatformService, ds: DomSanitizer);
    ngAfterViewInit(): void;
    searchByTerm(term: string): void;
    getResults(): Promise<void>;
    parseResult(res: any): void;
    onKeywordChangeHandler(val: string): void;
    onCategoryChanged(idx: number): void;
    getExcerpt(text: string): string;
    getNumResults(): string;
    getPaginationConfig(): {
        total: number;
        size: number;
    };
    onPageHandler(page: number): void;
    getPageProducts(): {
        id: string;
        tag?: string | undefined;
        name: string;
        legal: string;
        details: import("../../../shared/components/product-card/product-card.model").ProductCardDetails;
        options: import("../../../shared/components/product-card/product-card.model").ProductCardOption[];
    }[];
    getResultsCategories(): Categories[];
    getKeyword(): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchComponent, "aus-search", never, { "keyword": "keyword"; }, {}, never, never, false>;
}
export {};
