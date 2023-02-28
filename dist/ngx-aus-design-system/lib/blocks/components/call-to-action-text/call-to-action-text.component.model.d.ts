import { ButtonComponentVariants, ButtonComponentTarget } from "../../../shared/components/button/button.component.model";
export declare type CallToActionTextButton = {
    text: string;
    href: string;
    variant: ButtonComponentVariants;
    target: ButtonComponentTarget;
    origin?: string;
};
export declare type CallToActionTextComponentVariant = "with-body-text" | "without-body-text" | "bg-img";
export declare type CallToActionTextComponentType = "dark" | "light";
export declare type CallToActionTextAlignment = "center" | "left" | "left-alt" | "right-alt" | "center-alt";
