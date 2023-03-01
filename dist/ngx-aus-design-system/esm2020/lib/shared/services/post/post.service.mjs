import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
export class PostService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    getPost(slug) {
        const seoQuery = `
      seo {
        title
        metaDesc
        metaKeywords
        opengraphAuthor
        opengraphDescription
        twitterTitle
        twitterDescription
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphImage {
          altText
          sourceUrl
        }
      }
    `;
        const basicNodeQuery = `
      title
      blocks {
        aramarkBlock {
          data
          name
          advanced
        }
        innerBlocks {
          aramarkBlock {
            name
            data
            advanced
          }
        }
      }
      ${seoQuery}
    `;
        return this.apollo.query({
            query: gql `
        query getPost($slug: String!) {
          nodeByUri(uri: $slug) {
            id
            __typename
            ... on Page {
              ${basicNodeQuery}
              CampaignPageSwitch {
                campaignPage
              }
            }
            ... on Post {
              ${basicNodeQuery}
              date
            }
            ... on Article {
              ${basicNodeQuery}
              date
            }
            ... on Location {
              ${basicNodeQuery}
            }
            ... on Product {
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
              ${seoQuery}
            }
          }
          seo {
            redirects {
              format
              origin
              target
              type
            }
          }
        }
      `,
            variables: {
                slug,
            },
        });
    }
    getPostByIds(slug) {
        const postQuery = `
      nodes {
        title
        date
        feUrl
        excerptArticlesAndPosts {
          brandfolderEmbed {
            url
            altText
            title
          }
          writeAnExcerptOptional
        }
      }
    `;
        return this.apollo.query({
            query: gql `
        query getPost($slug: [ID]) {
          articles(where: {in: $slug}) {
            ${postQuery}
          }
          posts(where: {in: $slug}) {
            ${postQuery}
          }
        }
      `,
            variables: {
                slug,
            },
        });
    }
    getPostByPages(numPerPage, typePostToLoad = 'articles', after, loadAllTabs = false) {
        const postQuery = `
          edges {
            cursor
            node {
              title
              date
              feUrl
              excerptArticlesAndPosts {
                brandfolderEmbed {
                  url
                  altText
                  title
                }
                writeAnExcerptOptional
              }
            }
          } 
    `;
        let queryBase = `
        [postTye](first: $first, after: $after) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          ${postQuery}
        }
    `;
        let query = queryBase.replace('[postTye]', typePostToLoad);
        if (loadAllTabs) {
            query += queryBase.replace('[postTye]', typePostToLoad === 'articles' ? 'posts' : 'articles');
        }
        let variables = {
            first: numPerPage,
            after: after ?? null,
        };
        return this.apollo.query({
            query: gql(`
        query getPost($first: Int, $after: String) {
          ${query}
        }`),
            variables,
        });
    }
    getMediaLink(id) {
        return this.apollo.query({
            query: gql `
        query getMedia($id: ID!) {
          mediaItem(id: $id, idType: DATABASE_ID) {
            link
          }
        }
      `,
            variables: {
                id,
            },
        });
    }
}
PostService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: PostService, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable });
PostService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: PostService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: PostService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Apollo }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvc2hhcmVkL3NlcnZpY2VzL3Bvc3QvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFVLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFhN0MsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE1BQU0sUUFBUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQmhCLENBQUM7UUFDRixNQUFNLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztRQWdCbkIsUUFBUTtLQUNYLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxHQUFHLENBQUE7Ozs7OztnQkFNQSxjQUFjOzs7Ozs7Z0JBTWQsY0FBYzs7OztnQkFJZCxjQUFjOzs7O2dCQUlkLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkF3QmQsUUFBUTs7Ozs7Ozs7Ozs7O09BWWpCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUk7YUFDTDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBYztRQUN6QixNQUFNLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7S0FjakIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkIsS0FBSyxFQUFFLEdBQUcsQ0FBQTs7O2NBR0YsU0FBUzs7O2NBR1QsU0FBUzs7O09BR2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUk7YUFDTDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQ1osVUFBa0IsRUFDbEIsaUJBQXlCLFVBQVUsRUFDbkMsS0FBcUIsRUFDckIsY0FBdUIsS0FBSztRQUU1QixNQUFNLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQmpCLENBQUM7UUFFRixJQUFJLFNBQVMsR0FBRzs7Ozs7Ozs7WUFRUixTQUFTOztLQUVoQixDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FDeEIsV0FBVyxFQUNYLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUNyRCxDQUFDO1NBQ0g7UUFFRCxJQUFJLFNBQVMsR0FBRztZQUNkLEtBQUssRUFBRSxVQUFVO1lBQ2pCLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSTtTQUNyQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN2QixLQUFLLEVBQUUsR0FBRyxDQUFDOztZQUVMLEtBQUs7VUFDUCxDQUFDO1lBQ0wsU0FBUztTQUNWLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxHQUFHLENBQUE7Ozs7OztPQU1UO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEVBQUU7YUFDSDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O3lHQXBOVSxXQUFXOzZHQUFYLFdBQVcsY0FGVixNQUFNOzRGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvLCBncWwgfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQgeyBBcG9sbG9RdWVyeVJlc3VsdCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBnZXRJc0NhbXBhaWduUGFnZVJlcyxcbiAgZ2V0TWVkaWFMaW5rUmVzLFxuICBnZXRQb3N0UmVzLFxufSBmcm9tICcuL3Bvc3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwb2xsbzogQXBvbGxvKSB7fVxuXG4gIGdldFBvc3Qoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxBcG9sbG9RdWVyeVJlc3VsdDxnZXRQb3N0UmVzPj4ge1xuICAgIGNvbnN0IHNlb1F1ZXJ5ID0gYFxuICAgICAgc2VvIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgbWV0YURlc2NcbiAgICAgICAgbWV0YUtleXdvcmRzXG4gICAgICAgIG9wZW5ncmFwaEF1dGhvclxuICAgICAgICBvcGVuZ3JhcGhEZXNjcmlwdGlvblxuICAgICAgICB0d2l0dGVyVGl0bGVcbiAgICAgICAgdHdpdHRlckRlc2NyaXB0aW9uXG4gICAgICAgIG9wZW5ncmFwaFVybFxuICAgICAgICBvcGVuZ3JhcGhUeXBlXG4gICAgICAgIG9wZW5ncmFwaFRpdGxlXG4gICAgICAgIG9wZW5ncmFwaFNpdGVOYW1lXG4gICAgICAgIG9wZW5ncmFwaFB1Ymxpc2hlclxuICAgICAgICBvcGVuZ3JhcGhQdWJsaXNoZWRUaW1lXG4gICAgICAgIG9wZW5ncmFwaE1vZGlmaWVkVGltZVxuICAgICAgICBvcGVuZ3JhcGhJbWFnZSB7XG4gICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgICBjb25zdCBiYXNpY05vZGVRdWVyeSA9IGBcbiAgICAgIHRpdGxlXG4gICAgICBibG9ja3Mge1xuICAgICAgICBhcmFtYXJrQmxvY2sge1xuICAgICAgICAgIGRhdGFcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgYWR2YW5jZWRcbiAgICAgICAgfVxuICAgICAgICBpbm5lckJsb2NrcyB7XG4gICAgICAgICAgYXJhbWFya0Jsb2NrIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIGFkdmFuY2VkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAke3Nlb1F1ZXJ5fVxuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgIHF1ZXJ5IGdldFBvc3QoJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgICBub2RlQnlVcmkodXJpOiAkc2x1Zykge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAgIC4uLiBvbiBQYWdlIHtcbiAgICAgICAgICAgICAgJHtiYXNpY05vZGVRdWVyeX1cbiAgICAgICAgICAgICAgQ2FtcGFpZ25QYWdlU3dpdGNoIHtcbiAgICAgICAgICAgICAgICBjYW1wYWlnblBhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uIG9uIFBvc3Qge1xuICAgICAgICAgICAgICAke2Jhc2ljTm9kZVF1ZXJ5fVxuICAgICAgICAgICAgICBkYXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gQXJ0aWNsZSB7XG4gICAgICAgICAgICAgICR7YmFzaWNOb2RlUXVlcnl9XG4gICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLiBvbiBMb2NhdGlvbiB7XG4gICAgICAgICAgICAgICR7YmFzaWNOb2RlUXVlcnl9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICAgICAgICAgIHBvc3RQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICBzdHlsZUlkXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RGZWF0dXJlc1xuICAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlXG4gICAgICAgICAgICAgICAgICBzaXplc1xuICAgICAgICAgICAgICAgICAgbGVnYWxEaXNjbGFpbWVyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yQ29kZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgdGFnXG4gICAgICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICBicmFuZGZvbGRlckVtYmVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAke3Nlb1F1ZXJ5fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZW8ge1xuICAgICAgICAgICAgcmVkaXJlY3RzIHtcbiAgICAgICAgICAgICAgZm9ybWF0XG4gICAgICAgICAgICAgIG9yaWdpblxuICAgICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBzbHVnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBvc3RCeUlkcyhzbHVnOiBudW1iZXJbXSk6IE9ic2VydmFibGU8QXBvbGxvUXVlcnlSZXN1bHQ8Z2V0UG9zdFJlcz4+IHtcbiAgICBjb25zdCBwb3N0UXVlcnkgPSBgXG4gICAgICBub2RlcyB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGRhdGVcbiAgICAgICAgZmVVcmxcbiAgICAgICAgZXhjZXJwdEFydGljbGVzQW5kUG9zdHMge1xuICAgICAgICAgIGJyYW5kZm9sZGVyRW1iZWQge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgICB3cml0ZUFuRXhjZXJwdE9wdGlvbmFsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgIHF1ZXJ5IGdldFBvc3QoJHNsdWc6IFtJRF0pIHtcbiAgICAgICAgICBhcnRpY2xlcyh3aGVyZToge2luOiAkc2x1Z30pIHtcbiAgICAgICAgICAgICR7cG9zdFF1ZXJ5fVxuICAgICAgICAgIH1cbiAgICAgICAgICBwb3N0cyh3aGVyZToge2luOiAkc2x1Z30pIHtcbiAgICAgICAgICAgICR7cG9zdFF1ZXJ5fVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBzbHVnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBvc3RCeVBhZ2VzKFxuICAgIG51bVBlclBhZ2U6IG51bWJlcixcbiAgICB0eXBlUG9zdFRvTG9hZDogc3RyaW5nID0gJ2FydGljbGVzJyxcbiAgICBhZnRlcj86IHN0cmluZyB8IG51bGwsXG4gICAgbG9hZEFsbFRhYnM6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGdldFBvc3RSZXM+PiB7XG4gICAgY29uc3QgcG9zdFF1ZXJ5ID0gYFxuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIGN1cnNvclxuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgZmVVcmxcbiAgICAgICAgICAgICAgZXhjZXJwdEFydGljbGVzQW5kUG9zdHMge1xuICAgICAgICAgICAgICAgIGJyYW5kZm9sZGVyRW1iZWQge1xuICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3cml0ZUFuRXhjZXJwdE9wdGlvbmFsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuICAgIGA7XG5cbiAgICBsZXQgcXVlcnlCYXNlID0gYFxuICAgICAgICBbcG9zdFR5ZV0oZmlyc3Q6ICRmaXJzdCwgYWZ0ZXI6ICRhZnRlcikge1xuICAgICAgICAgIHBhZ2VJbmZvIHtcbiAgICAgICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgICAgICBoYXNQcmV2aW91c1BhZ2VcbiAgICAgICAgICAgIHN0YXJ0Q3Vyc29yXG4gICAgICAgICAgICBlbmRDdXJzb3JcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtwb3N0UXVlcnl9XG4gICAgICAgIH1cbiAgICBgO1xuICAgIGxldCBxdWVyeSA9IHF1ZXJ5QmFzZS5yZXBsYWNlKCdbcG9zdFR5ZV0nLCB0eXBlUG9zdFRvTG9hZCk7XG4gICAgaWYgKGxvYWRBbGxUYWJzKSB7XG4gICAgICBxdWVyeSArPSBxdWVyeUJhc2UucmVwbGFjZShcbiAgICAgICAgJ1twb3N0VHllXScsXG4gICAgICAgIHR5cGVQb3N0VG9Mb2FkID09PSAnYXJ0aWNsZXMnID8gJ3Bvc3RzJyA6ICdhcnRpY2xlcydcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IHZhcmlhYmxlcyA9IHtcbiAgICAgIGZpcnN0OiBudW1QZXJQYWdlLFxuICAgICAgYWZ0ZXI6IGFmdGVyID8/IG51bGwsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnkoe1xuICAgICAgcXVlcnk6IGdxbChgXG4gICAgICAgIHF1ZXJ5IGdldFBvc3QoJGZpcnN0OiBJbnQsICRhZnRlcjogU3RyaW5nKSB7XG4gICAgICAgICAgJHtxdWVyeX1cbiAgICAgICAgfWApLFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TWVkaWFMaW5rKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGdldE1lZGlhTGlua1Jlcz4+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnkoe1xuICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgcXVlcnkgZ2V0TWVkaWEoJGlkOiBJRCEpIHtcbiAgICAgICAgICBtZWRpYUl0ZW0oaWQ6ICRpZCwgaWRUeXBlOiBEQVRBQkFTRV9JRCkge1xuICAgICAgICAgICAgbGlua1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==