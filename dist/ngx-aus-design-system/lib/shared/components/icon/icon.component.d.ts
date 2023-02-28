import { IconComponentNames, IconComponentSizes, IconComponentVariants } from "./icon.model";
import * as i0 from "@angular/core";
export declare class IconComponent {
    name: IconComponentNames;
    size: IconComponentSizes;
    variant: IconComponentVariants;
    fontSize?: number | "inherit";
    color?: string;
    round?: boolean;
    WideIcons: IconComponentNames[];
    WiderIcons: IconComponentNames[];
    constructor();
    getClasses(): string;
    getCustomStyle(): {
        color?: string | undefined;
        fontSize?: string | undefined;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "aus-icon", never, { "name": "name"; "size": "size"; "variant": "variant"; "fontSize": "fontSize"; "color": "color"; "round": "round"; }, {}, never, never, false>;
}
