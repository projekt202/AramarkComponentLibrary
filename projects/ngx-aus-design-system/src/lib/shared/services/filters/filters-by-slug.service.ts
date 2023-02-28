import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { lastValueFrom } from 'rxjs';

import { ProductCardInputs } from '../../components/product-card/product-card.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersBySlugService {
  constructor(private apollo: Apollo) {}

  getData(ids: {
    industries?: string[];
    services?: string[];
    brands?: string[];
    products?: string[];
  }) {
    return this.apollo.query({
      query: gql`
        query getData(
          $industries: [String]
          $services: [String]
          $brands: [String]
          $products: [ID]
        ) {
          industries(first: 1000, where: { slug: $industries }) {
            edges {
              node {
                slug
                id
                name
                industryId
              }
            }
          }
          services(first: 1000, where: { slug: $services }) {
            edges {
              node {
                slug
                id
                name
                serviceId
              }
            }
          }
          parentServices: services(first: 10000) {
            nodes {
              slug
              id
              name
              serviceId
              parent {
                node {
                  slug
                  name
                }
              }
            }
          }
          brands(first: 1000, where: { slug: $brands }) {
            edges {
              node {
                slug
                id
                name
                brandId
              }
            }
          }
          products(first: 1000, where: { in: $products }) {
            edges {
              node {
                id
                title
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
                industries {
                  edges {
                    node {
                      slug
                      id
                      name
                      industryId
                    }
                  }
                }
                services {
                  edges {
                    node {
                      slug
                      id
                      name
                      serviceId
                    }
                  }
                }
                brands {
                  edges {
                    node {
                      slug
                      id
                      name
                      brandId
                    }
                  }
                }
                genders {
                  edges {
                    node {
                      slug
                      id
                      name
                      genderId
                    }
                  }
                }
                attributes {
                  edges {
                    node {
                      slug
                      id
                      name
                      attributeId
                    }
                  }
                }
                materials {
                  edges {
                    node {
                      slug
                      id
                      name
                      materialId
                    }
                  }
                }
              }
            }
          }
          acfOptions {
            optionsTabs {
              industryThumbnails {
                associatedIndustry {
                  slug
                  id
                  name
                  industryId
                }
                brandfolderEmbed {
                  url
                }
              }
              serviceIcons {
                associatedService {
                  id
                  name
                  serviceId
                }
                icon
              }
            }
          }
        }
      `,
      variables: {
        industries: ids.industries || [''],
        services: ids.services || [''],
        brands: ids.brands || [''],
        products: ids.products || [''],
      },
    });
  }

  async id2name(slug: string, type: 'industry' | 'service'): Promise<string> {
    const query = this.getData({
      ...(type === 'industry' ? { industries: [slug] } : undefined),
      ...(type === 'service' ? { services: [slug] } : undefined),
    });
    const res = await lastValueFrom(query);
    const { industries, services } = res.data as any;
    if (type === 'industry') {
      const found = industries.edges.find((i: any) => i.node.slug === slug);
      return found?.node.name || '';
    }
    if (type === 'service') {
      const found = services.edges.find((s: any) => s.node.slug === slug);
      return found.node.name || '';
    }
    return '';
  }

  parseProduct(prod: ProductCardInputs & { fks: string[] }, data: any) {
    const {
      postProduct: { styleId, attributes: attrs },
      services,
      genders,
      attributes,
      materials,
    } = data;
    //prod.id = styleId;
    prod.tag = attrs.productDetails?.[0]?.tag === 'yes' ? 'NEW' : '';
    prod.name = attrs.productTitle;
    prod.legal = attrs.legalDisclaimer || '';
    prod.details = {
      sizes: attrs.sizes || '',
      description: `${attrs.productDescription || ''}\n${
        attrs.productFeatures || ''
      }`,
    };
    prod.options = attrs.productDetails
      ? attrs.productDetails.map((pd: any) => ({
          imgUrl:
            pd.image.brandfolderEmbed.url ||
            'https://via.placeholder.com/400x400.jpg?text=Product+Image',
          colorName: pd.colorname || 'Default Color',
          color: pd.color || '#FFFFFF',
        }))
      : [
          {
            imgUrl:
              'https://via.placeholder.com/400x400.jpg?text=Product+Image',
            colorName: 'Default Color',
            color: '#FFFFFF',
          },
        ];
    if (!prod.fks) {
      prod.fks = [];
    }
    services.edges.forEach((s: any) => {
      prod.fks.push(s.node.slug);
      //addParents(s.node.slug);
    });
    genders.edges.forEach((g: any) => {
      prod.fks.push(g.node.slug);
    });
    attributes.edges.forEach((a: any) => {
      prod.fks.push(a.node.slug);
    });
    materials.edges.forEach((m: any) => {
      prod.fks.push(m.node.slug);
    });
    return prod;
  }
}
