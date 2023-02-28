import {
  ProductCardDetails,
  ProductCardOption,
} from "../../../shared/components/product-card/product-card.model";
import { FullwidthImageCardColumnsItem } from "../fullwidth-image-card-columns/fullwidth-image-card-columns.model";

export type TabbedContentVariant = "white" | "black" | "gray";

export type TabbedContentLayout = "fullwidth" | "50-50" | "2-3" | "3-2";

export type TabbedContentMain = {
  wysiwyg?: {
    data: string;
  };
  image?: {
    src: string;
    altText: string;
  };
  products?: {
    id: string;
    tag?: string;
    name: string;
    details: ProductCardDetails;
    options: ProductCardOption[];
    legal: string;
  }[];
  cards?: FullwidthImageCardColumnsItem[];
}[][];
