export declare type ProductCardOption = {
    imgUrl: string;
    color: string;
    colorName: string;
    tag?: string;
};
export declare type ProductCardDetails = {
    sizes: string;
    description: string;
};
export declare type ProductCardInputs = {
    id: string;
    tag?: string;
    name: string;
    details: ProductCardDetails;
    options: ProductCardOption[];
    legal: string;
};
