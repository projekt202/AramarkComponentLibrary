import { ButtonComponentVariants } from "../../../shared/components/button/button.component.model";
import { ArticleCard } from "../article-card/article-card.model";

export type Pages = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
  loaded: boolean;
  nodes: ArticleCard[];
};
export type InfoArtOrBlog = {
  page: number;
  totalCount: number;
  enGoToLastPage: boolean;
  disablePagination: boolean;
  firstLoad: boolean;
  title: string;
  pages: Pages[];
};
export type ArtOrBlog = {
  articles: InfoArtOrBlog;
  posts: InfoArtOrBlog;
};
export type Tabs = Tab[];
export type Tab = {
  name: string;
  value: TabValues;
};
export type InputPost = {
  tab: string;
  header: string;
};
export type TabValues = "articles" | "posts"; // It is used to find in graphql
export type ButtonRelatedPostPagesTabs = {
  variant: ButtonComponentVariants;
  text: string;
};
