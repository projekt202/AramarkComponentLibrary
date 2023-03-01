import { ButtonComponentVariants } from '../../../shared/components/button/button.component.model';
import { IconComponentNames, IconComponentVariants } from '../../../shared/components/icon/icon.model';
export declare type FwHeroVariant = 'card' | 'blur' | 'transparency';
export declare type FwHeroCardVariants = 'white' | 'black' | 'transparent';
export declare type FwHeroBannerVariants = 'white' | 'black';
export declare type FwHeroCardPosition = 'left' | 'right';
export declare type FwHeroTextColor = 'white' | 'black';
export declare type FwHeroCard = {
    title: string;
    gradient?: boolean;
    text?: string;
    icon?: {
        name: IconComponentNames;
        variant?: IconComponentVariants;
    };
    variant: FwHeroCardVariants;
    button?: {
        text: string;
        route?: string;
        href?: string;
        variant?: ButtonComponentVariants;
        origin?: string;
    };
    buttonSecondary?: {
        text: string;
        route?: string;
        href?: string;
        variant?: ButtonComponentVariants;
        origin?: string;
    };
    position?: FwHeroCardPosition;
    onlyMobileSecondaryBtn?: boolean;
};
export declare type FwHeroBanner = {
    text?: string;
    variant: FwHeroBannerVariants;
    centered?: boolean;
    button?: {
        text: string;
        route?: string;
        href?: string;
        variant?: ButtonComponentVariants;
        origin?: string;
    };
    primaryBtnOnlyMobile?: boolean;
    buttonSecondary?: {
        text: string;
        route?: string;
        href?: string;
        variant?: ButtonComponentVariants;
        origin?: string;
    };
    onlyMobileSecondaryBtn?: boolean;
};
