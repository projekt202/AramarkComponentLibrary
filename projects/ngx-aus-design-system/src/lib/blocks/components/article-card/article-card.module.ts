import { LazyLoadImageModule } from "ng-lazyload-image";
import { RouterModule } from "@angular/router";
import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";

import { ImageModule } from "./../../../shared/components/image/image.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { ArticleCardComponent } from "./article-card.component";

@NgModule({
  declarations: [ArticleCardComponent],
  imports: [
    CommonModule,
    TypographyModule,
    IconModule,
    SanitizePipeModule,
    ButtonModule,
    ImageModule,
    RouterModule,
    LazyLoadImageModule,
  ],
  providers: [DatePipe],
  exports: [ArticleCardComponent],
})
export class ArticleCardModule {}
