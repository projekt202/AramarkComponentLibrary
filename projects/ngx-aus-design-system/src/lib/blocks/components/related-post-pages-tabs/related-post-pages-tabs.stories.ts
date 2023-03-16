import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { CommonModule } from "@angular/common";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { RelatedPostPagesTabsComponent } from "./related-post-pages-tabs.component";
import { HttpClientModule } from "@angular/common/http";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { GraphQLModule } from "../../../graphql.module";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { TabsComponent } from "../../../shared/components/tabs/tabs.component";
import { GtmIdPipe } from "../../../shared/pipes/gtm/gtm-id.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { ArticleCardComponent } from "../article-card/article-card.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        ArticleCardComponent,
        TypographyComponent,
        IconComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        ImageComponent,
        PaginationComponent,
        TabsComponent,
        GtmIdPipe,
      ],
      imports: [
        CommonModule,
        GraphQLModule,
        HttpClientModule,
        LazyLoadImageModule,
      ],
    }),
  ],
  component: RelatedPostPagesTabsComponent,
  title: "Related Post",
} as Meta;

const Template: Story<RelatedPostPagesTabsComponent> = (
  args: RelatedPostPagesTabsComponent
) => ({
  props: args,
});

export const RelatedPostPagesTabs = Template.bind({});
RelatedPostPagesTabs.args = {
  articles: {
    tab: "Articles",
    header: "Recent Articles",
  },
  posts: {
    tab: "Blog",
    header: "Recent Posts",
  },
  numPerPage: 2,
};
