import { OnInit } from "@angular/core";
import { QuoteComponentAuthor, QuoteComponentType } from "./quote.component.model";
import * as i0 from "@angular/core";
export declare class QuoteComponent implements OnInit {
    type: QuoteComponentType;
    author: QuoteComponentAuthor;
    quoteText: string;
    constructor();
    ngOnInit(): void;
    getClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuoteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuoteComponent, "aus-quote", never, { "type": "type"; "author": "author"; "quoteText": "quoteText"; }, {}, never, never, false>;
}
