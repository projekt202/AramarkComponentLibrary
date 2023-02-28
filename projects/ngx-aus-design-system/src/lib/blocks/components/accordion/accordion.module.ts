import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CollapsibleModule } from "angular2-collapsible";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TypographyModule } from "./../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "./../../../shared/pipes/sanitize/sanitize.module";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { AccordionComponent } from "./accordion.component";

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    IconModule,
    TypographyModule,
    WysiwygModule,
    SanitizePipeModule,
    BrowserAnimationsModule,
    CollapsibleModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [AccordionComponent],
})
export class AccordionModule {}
