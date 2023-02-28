import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { lastValueFrom } from 'rxjs';

import { ProductCardInputs } from '../../components/product-card/product-card.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
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
          $industries: [ID]
          $services: [ID]
          $brands: [ID]
          $products: [ID]
        ) {
          industries(first: 1000, where: { termTaxonomId: $industries }) {
            edges {
              node {
                id
                name
                industryId
              }
            }
          }
          services(first: 1000, where: { termTaxonomId: $services }) {
            edges {
              node {
                id
                name
                serviceId
              }
            }
          }
          brands(first: 1000, where: { termTaxonomId: $brands }) {
            edges {
              node {
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
                      id
                      name
                      industryId
                    }
                  }
                }
                services {
                  edges {
                    node {
                      id
                      name
                      serviceId
                    }
                  }
                }
                brands {
                  edges {
                    node {
                      id
                      name
                      brandId
                    }
                  }
                }
                genders {
                  edges {
                    node {
                      id
                      name
                      genderId
                    }
                  }
                }
                attributes {
                  edges {
                    node {
                      id
                      name
                      attributeId
                    }
                  }
                }
                materials {
                  edges {
                    node {
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

  async id2name(id: number, type: 'industry' | 'service'): Promise<string> {
    const query = this.getData({
      ...(type === 'industry' ? { industries: [id.toString()] } : undefined),
      ...(type === 'service' ? { services: [id.toString()] } : undefined),
    });
    const res = await lastValueFrom(query);
    const { industries, services } = res.data as any;
    if (type === 'industry') {
      const found = industries.edges.find((i: any) => i.node.industryId === id);
      return found?.node.name || '';
    }
    if (type === 'service') {
      const found = services.edges.find((s: any) => s.node.serviceId === id);
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
    prod.id = styleId;
    prod.name = attrs.productTitle;
    prod.legal = attrs.legalDisclaimer || '';
    prod.details = {
      sizes: attrs.sizes || '',
      description: `${attrs.productDescription || ''}${
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
          tag: pd.tag === 'yes' ? 'NEW' : '',
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
      prod.fks.push(s.node.name);
    });
    genders.edges.forEach((g: any) => {
      prod.fks.push(g.node.name);
    });
    attributes.edges.forEach((a: any) => {
      prod.fks.push(a.node.name);
    });
    materials.edges.forEach((m: any) => {
      prod.fks.push(m.node.name);
    });
    return prod;
  }
}
