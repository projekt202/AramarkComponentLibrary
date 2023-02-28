import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SanitizePipeModule } from "../../pipes/sanitize/sanitize.module";
import { WysiwygComponent } from "./wysiwyg.component";

@NgModule({
  declarations: [WysiwygComponent],
  imports: [CommonModule, RouterModule, SanitizePipeModule],
  providers: [],
  exports: [WysiwygComponent],
})
export class WysiwygModule {}
