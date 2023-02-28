import { ArticleCardVariant } from '../article-card/article-card.model';

export type ArticleCardRow = {
  variant: ArticleCardVariant;
  publishDate: string;
  endDate?: string;
  url: string;
  imgUrl: string;
  title: string;
  text: string;
}[];
