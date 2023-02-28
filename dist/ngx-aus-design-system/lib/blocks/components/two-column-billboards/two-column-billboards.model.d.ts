import { IconComponentNames } from "../../../shared/components/icon/icon.model";
import { BillboardComponentBtn, BillboardComponentColumn, BillboardComponentType, BillboardComponentVariant } from "../billboard/billboard.component.model";
export declare type BillboardsInput = {
    variant: BillboardComponentVariant;
    type: BillboardComponentType;
    column: BillboardComponentColumn;
    imgUrl: string;
    iconName?: IconComponentNames;
    header: string;
    bodyText: string;
    btn?: BillboardComponentBtn;
};
export declare type BillboardBgcolors = "white" | "black" | "gray";
