import { ButtonComponentTarget, ButtonComponentVariants } from "../../../shared/components/button/button.component.model";
export declare type BillboardComponentVariant = "right-image" | "left-image";
export declare type BillboardComponentType = "dark" | "light";
export declare type BillboardComponentColumn = "50-50" | "3-2";
export declare type BillboardComponentBtn = {
    text: string;
    href?: string;
    route?: string;
    target?: ButtonComponentTarget;
    variant: ButtonComponentVariants;
    origin?: string;
};
