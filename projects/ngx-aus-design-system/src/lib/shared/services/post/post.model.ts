export type BlockContainer = {
  name: string;
  data: string;
  advanced: string;
};

export type Block = {
  aramarkBlock: BlockContainer;
  innerBlocks: [];
};

export type Seo = {
  title: string;
  metaDesc: string;
  metaKeywords: string;
  opengraphAuthor: string;
  opengraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  opengraphUrl: string;
  opengraphType: string;
  opengraphTitle: string;
  opengraphSiteName: string;
  opengraphPublisher: string;
  opengraphPublishedTime: string;
  opengraphModifiedTime: string;
};

export type Node = {
  id: string;
  __typename: string;
  title: string;
  date?: string;
  blocks: Block[];
  contentTypeName: string;
  seo: Seo;
  CampaignPageSwitch?: {
    campaignPage?: string;
  };
  postProduct?: {
    styleId: string;
    attributes: {
      productDescription?: string;
      productFeatures?: string;
      productTitle: string;
      sizes?: string;
      legalDisclaimer?: string;
      productDetails?:
        | {
            color: string;
            colorCode: string;
            colorName: string;
            tag?: string;
            image: {
              brandfolderEmbed: {
                url: string;
              };
            };
          }[]
        | boolean;
    };
  };
};

export type getPostRes = {
  nodeByUri?: Node;
  seo: {
    redirects: {
      format: string;
      origin: string;
      target: string;
      type: number;
    }[];
  };
};

export type getMediaLinkRes = {
  mediaItem: {
    link: string;
  };
};

export type getIsCampaignPageRes = {
  nodeByUri?: {
    id: string;
    __typename: string;
    CampaignPageSwitch: {
      campaignPage: 'true' | 'false';
    };
  };
};
