import { ButtonComponentVariants } from "../../../shared/components/button/button.component.model";
import { ArticleCard } from "../article-card/article-card.model";
export declare type Pages = {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    startCursor: string;
    endCursor: string;
    loaded: boolean;
    nodes: ArticleCard[];
};
export declare type InfoArtOrBlog = {
    page: number;
    totalCount: number;
    enGoToLastPage: boolean;
    disablePagination: boolean;
    firstLoad: boolean;
    title: string;
    pages: Pages[];
};
export declare type ArtOrBlog = {
    articles: InfoArtOrBlog;
    posts: InfoArtOrBlog;
};
export declare type Tabs = Tab[];
export declare type Tab = {
    name: string;
    value: TabValues;
};
export declare type InputPost = {
    tab: string;
    header: string;
};
export declare type TabValues = "articles" | "posts";
export declare type ButtonRelatedPostPagesTabs = {
    variant: ButtonComponentVariants;
    text: string;
};
