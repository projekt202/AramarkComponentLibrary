import { ButtonComponentTarget, ButtonComponentVariants } from "../../../shared/components/button/button.component.model";
import { InteriorPageHeroComponentType, InteriorPageHeroComponentVariant } from "../interior-page-hero/interior-page-hero.component.model";
export declare type InteriorPageHeroCarouselVariants = "white" | "black";
export declare type InteriorPageHeroCarouselSlide = {
    variant: InteriorPageHeroComponentVariant;
    type: InteriorPageHeroComponentType;
    imgUrl: string;
    header: string;
    date?: string;
    endDate?: string;
    btn: {
        href: string;
        text: string;
        target: ButtonComponentTarget;
        variant: ButtonComponentVariants;
    };
};
