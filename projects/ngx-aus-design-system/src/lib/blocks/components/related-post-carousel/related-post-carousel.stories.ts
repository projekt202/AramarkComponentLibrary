import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { CommonModule } from "@angular/common";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { RelatedPostCarouselComponent } from "./related-post-carousel.component";
import { ArticleCardComponent } from "../article-card/article-card.component";
import { GraphQLModule } from "../../../graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        ArticleCardComponent,
        TypographyComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        ButtonComponent,
        ImageComponent,
      ],
      imports: [
        CommonModule,
        GraphQLModule,
        HttpClientModule,
        LazyLoadImageModule,
      ],
    }),
  ],
  component: RelatedPostCarouselComponent,
  title: "Related Post",
} as Meta;

const Template: Story<RelatedPostCarouselComponent> = (
  args: RelatedPostCarouselComponent
) => ({
  props: args,
});

export const RelatedPost = Template.bind({});
RelatedPost.args = {
  title: "More Articles",
  slides: [
    {
      date: "2022/08/16",
      type: "light",
      variant: "left-image",
      imgUrl: "https://api.lorem.space/image?w=1366&h=470",
      header:
        "1. Aramark Uniform services wins two NAUMD image of the year awards",
      btn: {
        href: "https://www.google.com",
        text: "Read More",
        target: "_self",
        variant: "red",
      },
    },
    {
      date: "2022/08/16",
      type: "light",
      variant: "left-image",
      imgUrl: "https://api.lorem.space/image?w=1366&h=470",
      header:
        "2. Aramark Uniform services wins two NAUMD image of the year awards",
      btn: {
        href: "https://www.google.com",
        text: "Read More",
        target: "_self",
        variant: "red",
      },
    },
    {
      date: "2022/08/16",
      type: "light",
      variant: "left-image",
      imgUrl: "https://api.lorem.space/image?w=1366&h=470",
      header:
        "3. Aramark Uniform services wins two NAUMD image of the year awards",
      btn: {
        href: "https://www.google.com",
        text: "Read More",
        target: "_self",
        variant: "red",
      },
    },
  ],
};
