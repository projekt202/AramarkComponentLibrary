import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { TypographyComponentVariants } from "../../../shared/components/typography/typography.component.model";
import { Image } from "../../../shared/components/image/image.model";
export declare type ArticleCardVariant = "img-left" | "img-right" | "img-top";
export declare type ArticleCard = {
    variant: ArticleCardVariant;
    publishDate: string;
    endDate?: string;
    url: string;
    img: Image;
    title: string;
    text: string;
    tagTitle?: TypographyComponentVariants;
    btn?: ButtonConfig;
};
