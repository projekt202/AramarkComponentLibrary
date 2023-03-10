import { IconComponentNames } from "../../../shared/components/icon/icon.model";
export declare type CardsColumnComponentVariants = "black" | "white";
export declare type CardsColumnComponentLayout = "2" | "3";
export declare type CardsColumnComponentData = {
    icon?: IconComponentNames;
    title: string;
    text: string;
}[];
export declare type CardsColumnComponentBtn = {
    text: string;
    href?: string;
    route?: string;
    origin?: string;
};
