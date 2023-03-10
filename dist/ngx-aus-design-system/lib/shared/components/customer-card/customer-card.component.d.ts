import { CustomerCardComponentAuthor, CustomerCardComponentVariant } from "./customer-card.model";
import * as i0 from "@angular/core";
export declare class CustomerCardComponent {
    imgUrl?: string;
    title: string;
    text: string;
    route?: string;
    href?: string;
    variant?: CustomerCardComponentVariant;
    author?: CustomerCardComponentAuthor;
    rating?: number;
    date?: string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerCardComponent, "aus-customer-card", never, { "imgUrl": "imgUrl"; "title": "title"; "text": "text"; "route": "route"; "href": "href"; "variant": "variant"; "author": "author"; "rating": "rating"; "date": "date"; }, {}, never, never, false>;
}
