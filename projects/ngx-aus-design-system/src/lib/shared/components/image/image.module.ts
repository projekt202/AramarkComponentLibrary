import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { TypographyModule } from "../typography/typography.module";
import { ImageComponent } from "./image.component";

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, LazyLoadImageModule, TypographyModule],
  providers: [],
  exports: [ImageComponent],
})
export class ImageModule {}
