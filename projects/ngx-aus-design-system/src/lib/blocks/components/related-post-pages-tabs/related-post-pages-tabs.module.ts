import { ArticleCardModule } from "./../article-card/article-card.module";
import { GtmIdPipeModule } from "./../../../shared/pipes/gtm/gtm-id.module";
import { TabsModule } from "./../../../shared/components/tabs/tabs.module";
import { PaginationModule } from "./../../../shared/components/pagination/pagination.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { ImageModule } from "../../../shared/components/image/image.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { RelatedPostPagesTabsComponent } from "./related-post-pages-tabs.component";

@NgModule({
  declarations: [RelatedPostPagesTabsComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    ImageModule,
    PaginationModule,
    TabsModule,
    GtmIdPipeModule,
    GraphQLModule,
    HttpClientModule,
    LazyLoadImageModule,
    ArticleCardModule,
  ],
  providers: [],
  exports: [RelatedPostPagesTabsComponent],
})
export class RelatedPostPagesTabsModule {}
