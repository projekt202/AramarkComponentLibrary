import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { ImageRoundedCorners } from "../../../shared/components/image/image.model";
import { TypographyComponentVariants } from "../../../shared/components/typography/typography.component.model";
import { Image } from "../../../shared/components/image/image.model";
import { ArticleCardVariant } from "./article-card.model";
import * as i0 from "@angular/core";
export declare class ArticleCardComponent {
    variant: ArticleCardVariant;
    publishDate: string;
    endDate?: string;
    url: string;
    img: Image;
    title: string;
    text: string;
    tagTitle?: TypographyComponentVariants;
    loading: boolean;
    btn?: ButtonConfig;
    imageRoundedCorners: ImageRoundedCorners;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ArticleCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArticleCardComponent, "aus-article-card", never, { "variant": "variant"; "publishDate": "publishDate"; "endDate": "endDate"; "url": "url"; "img": "img"; "title": "title"; "text": "text"; "tagTitle": "tagTitle"; "loading": "loading"; "btn": "btn"; }, {}, never, never, false>;
}
