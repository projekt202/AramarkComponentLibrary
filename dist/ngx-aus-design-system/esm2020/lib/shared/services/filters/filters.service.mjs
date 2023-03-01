import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { lastValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
export class FiltersService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    getData(ids) {
        return this.apollo.query({
            query: gql `
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
    async id2name(id, type) {
        const query = this.getData({
            ...(type === 'industry' ? { industries: [id.toString()] } : undefined),
            ...(type === 'service' ? { services: [id.toString()] } : undefined),
        });
        const res = await lastValueFrom(query);
        const { industries, services } = res.data;
        if (type === 'industry') {
            const found = industries.edges.find((i) => i.node.industryId === id);
            return found?.node.name || '';
        }
        if (type === 'service') {
            const found = services.edges.find((s) => s.node.serviceId === id);
            return found.node.name || '';
        }
        return '';
    }
    parseProduct(prod, data) {
        const { postProduct: { styleId, attributes: attrs }, services, genders, attributes, materials, } = data;
        prod.id = styleId;
        prod.name = attrs.productTitle;
        prod.legal = attrs.legalDisclaimer || '';
        prod.details = {
            sizes: attrs.sizes || '',
            description: `${attrs.productDescription || ''}${attrs.productFeatures || ''}`,
        };
        prod.options = attrs.productDetails
            ? attrs.productDetails.map((pd) => ({
                imgUrl: pd.image.brandfolderEmbed.url ||
                    'https://via.placeholder.com/400x400.jpg?text=Product+Image',
                colorName: pd.colorname || 'Default Color',
                color: pd.color || '#FFFFFF',
                tag: pd.tag === 'yes' ? 'NEW' : '',
            }))
            : [
                {
                    imgUrl: 'https://via.placeholder.com/400x400.jpg?text=Product+Image',
                    colorName: 'Default Color',
                    color: '#FFFFFF',
                },
            ];
        if (!prod.fks) {
            prod.fks = [];
        }
        services.edges.forEach((s) => {
            prod.fks.push(s.node.name);
        });
        genders.edges.forEach((g) => {
            prod.fks.push(g.node.name);
        });
        attributes.edges.forEach((a) => {
            prod.fks.push(a.node.name);
        });
        materials.edges.forEach((m) => {
            prod.fks.push(m.node.name);
        });
        return prod;
    }
}
FiltersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FiltersService, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable });
FiltersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FiltersService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FiltersService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Apollo }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvc2hhcmVkL3NlcnZpY2VzL2ZpbHRlcnMvZmlsdGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFVLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU9yQyxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsT0FBTyxDQUFDLEdBS1A7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTZJVDtZQUNELFNBQVMsRUFBRTtnQkFDVCxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUMxQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUMvQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsT0FB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QztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7NEdBck9VLGNBQWM7Z0hBQWQsY0FBYyxjQUZiLE1BQU07NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcG9sbG8sIGdxbCB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUHJvZHVjdENhcmRJbnB1dHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwb2xsbzogQXBvbGxvKSB7fVxuXG4gIGdldERhdGEoaWRzOiB7XG4gICAgaW5kdXN0cmllcz86IHN0cmluZ1tdO1xuICAgIHNlcnZpY2VzPzogc3RyaW5nW107XG4gICAgYnJhbmRzPzogc3RyaW5nW107XG4gICAgcHJvZHVjdHM/OiBzdHJpbmdbXTtcbiAgfSkge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeSh7XG4gICAgICBxdWVyeTogZ3FsYFxuICAgICAgICBxdWVyeSBnZXREYXRhKFxuICAgICAgICAgICRpbmR1c3RyaWVzOiBbSURdXG4gICAgICAgICAgJHNlcnZpY2VzOiBbSURdXG4gICAgICAgICAgJGJyYW5kczogW0lEXVxuICAgICAgICAgICRwcm9kdWN0czogW0lEXVxuICAgICAgICApIHtcbiAgICAgICAgICBpbmR1c3RyaWVzKGZpcnN0OiAxMDAwLCB3aGVyZTogeyB0ZXJtVGF4b25vbUlkOiAkaW5kdXN0cmllcyB9KSB7XG4gICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIGluZHVzdHJ5SWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXJ2aWNlcyhmaXJzdDogMTAwMCwgd2hlcmU6IHsgdGVybVRheG9ub21JZDogJHNlcnZpY2VzIH0pIHtcbiAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgc2VydmljZUlkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJhbmRzKGZpcnN0OiAxMDAwLCB3aGVyZTogeyB0ZXJtVGF4b25vbUlkOiAkYnJhbmRzIH0pIHtcbiAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgYnJhbmRJZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb2R1Y3RzKGZpcnN0OiAxMDAwLCB3aGVyZTogeyBpbjogJHByb2R1Y3RzIH0pIHtcbiAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZFxuICAgICAgICAgICAgICAgIHBvc3RQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlSWRcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZlYXR1cmVzXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZVxuICAgICAgICAgICAgICAgICAgICBzaXplc1xuICAgICAgICAgICAgICAgICAgICBsZWdhbERpc2NsYWltZXJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgdGFnXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmRmb2xkZXJFbWJlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmR1c3RyaWVzIHtcbiAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnlJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlcnZpY2VzIHtcbiAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgc2VydmljZUlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJhbmRzIHtcbiAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgYnJhbmRJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdlbmRlcnMge1xuICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICBnZW5kZXJJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGVyaWFscyB7XG4gICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhY2ZPcHRpb25zIHtcbiAgICAgICAgICAgIG9wdGlvbnNUYWJzIHtcbiAgICAgICAgICAgICAgaW5kdXN0cnlUaHVtYm5haWxzIHtcbiAgICAgICAgICAgICAgICBhc3NvY2lhdGVkSW5kdXN0cnkge1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgIGluZHVzdHJ5SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJhbmRmb2xkZXJFbWJlZCB7XG4gICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VydmljZUljb25zIHtcbiAgICAgICAgICAgICAgICBhc3NvY2lhdGVkU2VydmljZSB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgc2VydmljZUlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpbmR1c3RyaWVzOiBpZHMuaW5kdXN0cmllcyB8fCBbJyddLFxuICAgICAgICBzZXJ2aWNlczogaWRzLnNlcnZpY2VzIHx8IFsnJ10sXG4gICAgICAgIGJyYW5kczogaWRzLmJyYW5kcyB8fCBbJyddLFxuICAgICAgICBwcm9kdWN0czogaWRzLnByb2R1Y3RzIHx8IFsnJ10sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgaWQybmFtZShpZDogbnVtYmVyLCB0eXBlOiAnaW5kdXN0cnknIHwgJ3NlcnZpY2UnKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuZ2V0RGF0YSh7XG4gICAgICAuLi4odHlwZSA9PT0gJ2luZHVzdHJ5JyA/IHsgaW5kdXN0cmllczogW2lkLnRvU3RyaW5nKCldIH0gOiB1bmRlZmluZWQpLFxuICAgICAgLi4uKHR5cGUgPT09ICdzZXJ2aWNlJyA/IHsgc2VydmljZXM6IFtpZC50b1N0cmluZygpXSB9IDogdW5kZWZpbmVkKSxcbiAgICB9KTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKHF1ZXJ5KTtcbiAgICBjb25zdCB7IGluZHVzdHJpZXMsIHNlcnZpY2VzIH0gPSByZXMuZGF0YSBhcyBhbnk7XG4gICAgaWYgKHR5cGUgPT09ICdpbmR1c3RyeScpIHtcbiAgICAgIGNvbnN0IGZvdW5kID0gaW5kdXN0cmllcy5lZGdlcy5maW5kKChpOiBhbnkpID0+IGkubm9kZS5pbmR1c3RyeUlkID09PSBpZCk7XG4gICAgICByZXR1cm4gZm91bmQ/Lm5vZGUubmFtZSB8fCAnJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdzZXJ2aWNlJykge1xuICAgICAgY29uc3QgZm91bmQgPSBzZXJ2aWNlcy5lZGdlcy5maW5kKChzOiBhbnkpID0+IHMubm9kZS5zZXJ2aWNlSWQgPT09IGlkKTtcbiAgICAgIHJldHVybiBmb3VuZC5ub2RlLm5hbWUgfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHBhcnNlUHJvZHVjdChwcm9kOiBQcm9kdWN0Q2FyZElucHV0cyAmIHsgZmtzOiBzdHJpbmdbXSB9LCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCB7XG4gICAgICBwb3N0UHJvZHVjdDogeyBzdHlsZUlkLCBhdHRyaWJ1dGVzOiBhdHRycyB9LFxuICAgICAgc2VydmljZXMsXG4gICAgICBnZW5kZXJzLFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIG1hdGVyaWFscyxcbiAgICB9ID0gZGF0YTtcbiAgICBwcm9kLmlkID0gc3R5bGVJZDtcbiAgICBwcm9kLm5hbWUgPSBhdHRycy5wcm9kdWN0VGl0bGU7XG4gICAgcHJvZC5sZWdhbCA9IGF0dHJzLmxlZ2FsRGlzY2xhaW1lciB8fCAnJztcbiAgICBwcm9kLmRldGFpbHMgPSB7XG4gICAgICBzaXplczogYXR0cnMuc2l6ZXMgfHwgJycsXG4gICAgICBkZXNjcmlwdGlvbjogYCR7YXR0cnMucHJvZHVjdERlc2NyaXB0aW9uIHx8ICcnfSR7XG4gICAgICAgIGF0dHJzLnByb2R1Y3RGZWF0dXJlcyB8fCAnJ1xuICAgICAgfWAsXG4gICAgfTtcbiAgICBwcm9kLm9wdGlvbnMgPSBhdHRycy5wcm9kdWN0RGV0YWlsc1xuICAgICAgPyBhdHRycy5wcm9kdWN0RGV0YWlscy5tYXAoKHBkOiBhbnkpID0+ICh7XG4gICAgICAgICAgaW1nVXJsOlxuICAgICAgICAgICAgcGQuaW1hZ2UuYnJhbmRmb2xkZXJFbWJlZC51cmwgfHxcbiAgICAgICAgICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAweDQwMC5qcGc/dGV4dD1Qcm9kdWN0K0ltYWdlJyxcbiAgICAgICAgICBjb2xvck5hbWU6IHBkLmNvbG9ybmFtZSB8fCAnRGVmYXVsdCBDb2xvcicsXG4gICAgICAgICAgY29sb3I6IHBkLmNvbG9yIHx8ICcjRkZGRkZGJyxcbiAgICAgICAgICB0YWc6IHBkLnRhZyA9PT0gJ3llcycgPyAnTkVXJyA6ICcnLFxuICAgICAgICB9KSlcbiAgICAgIDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDpcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDB4NDAwLmpwZz90ZXh0PVByb2R1Y3QrSW1hZ2UnLFxuICAgICAgICAgICAgY29sb3JOYW1lOiAnRGVmYXVsdCBDb2xvcicsXG4gICAgICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgaWYgKCFwcm9kLmZrcykge1xuICAgICAgcHJvZC5ma3MgPSBbXTtcbiAgICB9XG4gICAgc2VydmljZXMuZWRnZXMuZm9yRWFjaCgoczogYW55KSA9PiB7XG4gICAgICBwcm9kLmZrcy5wdXNoKHMubm9kZS5uYW1lKTtcbiAgICB9KTtcbiAgICBnZW5kZXJzLmVkZ2VzLmZvckVhY2goKGc6IGFueSkgPT4ge1xuICAgICAgcHJvZC5ma3MucHVzaChnLm5vZGUubmFtZSk7XG4gICAgfSk7XG4gICAgYXR0cmlidXRlcy5lZGdlcy5mb3JFYWNoKChhOiBhbnkpID0+IHtcbiAgICAgIHByb2QuZmtzLnB1c2goYS5ub2RlLm5hbWUpO1xuICAgIH0pO1xuICAgIG1hdGVyaWFscy5lZGdlcy5mb3JFYWNoKChtOiBhbnkpID0+IHtcbiAgICAgIHByb2QuZmtzLnB1c2gobS5ub2RlLm5hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9kO1xuICB9XG59XG4iXX0=