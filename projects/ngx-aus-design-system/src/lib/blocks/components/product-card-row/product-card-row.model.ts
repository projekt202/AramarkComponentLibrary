import {
  ProductCardDetails,
  ProductCardOption,
} from "../../../shared/components/product-card/product-card.model";

export type ProductCardRowProducts = {
  id: string;
  tag?: string;
  name: string;
  legal: string;
  details: ProductCardDetails;
  options: ProductCardOption[];
}[];
