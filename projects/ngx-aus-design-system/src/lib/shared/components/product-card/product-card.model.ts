export type ProductCardOption = {
  imgUrl: string;
  color: string;
  colorName: string;
  tag?: string;
};

export type ProductCardDetails = {
  sizes: string;
  description: string;
};

export type ProductCardInputs = {
  id: string;
  tag?: string;
  name: string;
  details: ProductCardDetails;
  options: ProductCardOption[];
  legal: string;
};
