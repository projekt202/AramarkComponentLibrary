import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';

import {
  getIsCampaignPageRes,
  getMediaLinkRes,
  getPostRes,
} from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private apollo: Apollo) {}

  getPost(slug: string): Observable<ApolloQueryResult<getPostRes>> {
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
      query: gql`
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

  getPostByIds(slug: number[]): Observable<ApolloQueryResult<getPostRes>> {
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
      query: gql`
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

  getPostByPages(
    numPerPage: number,
    typePostToLoad: string = 'articles',
    after?: string | null,
    loadAllTabs: boolean = false
  ): Observable<ApolloQueryResult<getPostRes>> {
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
      query += queryBase.replace(
        '[postTye]',
        typePostToLoad === 'articles' ? 'posts' : 'articles'
      );
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

  getMediaLink(id: string): Observable<ApolloQueryResult<getMediaLinkRes>> {
    return this.apollo.query({
      query: gql`
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
