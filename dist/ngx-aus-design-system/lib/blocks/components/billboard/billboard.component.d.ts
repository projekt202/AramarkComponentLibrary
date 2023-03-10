import { OnInit } from "@angular/core";
import { IconComponentNames, IconComponentVariants } from "../../../shared/components/icon/icon.model";
import { BillboardComponentBtn, BillboardComponentColumn, BillboardComponentType, BillboardComponentVariant } from "./billboard.component.model";
import * as i0 from "@angular/core";
export declare class BillboardComponent implements OnInit {
    variant: BillboardComponentVariant;
    type: BillboardComponentType;
    column: BillboardComponentColumn;
    imgUrl: string;
    iconName?: IconComponentNames;
    header: string;
    bodyText: string;
    btn?: BillboardComponentBtn;
    iconVariant: IconComponentVariants;
    constructor();
    ngOnInit(): void;
    getClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BillboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BillboardComponent, "aus-billboard", never, { "variant": "variant"; "type": "type"; "column": "column"; "imgUrl": "imgUrl"; "iconName": "iconName"; "header": "header"; "bodyText": "bodyText"; "btn": "btn"; }, {}, never, never, false>;
}
