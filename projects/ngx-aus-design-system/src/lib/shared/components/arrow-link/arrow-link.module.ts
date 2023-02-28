import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyModule } from "../typography/typography.module";
import { ArrowLinkComponent } from "./arrow-link.component";

@NgModule({
  declarations: [ArrowLinkComponent],
  imports: [CommonModule, TypographyModule],
  providers: [],
  exports: [ArrowLinkComponent],
})
export class ArrowLinkModule {}
