import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { QuoteComponent } from "./quote.component";

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [QuoteComponent],
})
export class QuoteModule {}
