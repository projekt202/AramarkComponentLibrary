import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { CommonModule } from "@angular/common";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { RelatedPostComponent } from "./related-post.component";
import { HttpClientModule } from "@angular/common/http";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { GraphQLModule } from "../../../graphql.module";
import { SwiperModule } from "swiper/angular";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
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
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        ImageComponent,
        CarouselComponent,
      ],
      imports: [
        CommonModule,
        GraphQLModule,
        HttpClientModule,
        LazyLoadImageModule,
        SwiperModule,
      ],
    }),
  ],
  component: RelatedPostComponent,
  title: "Related Post",
} as Meta;

const Template: Story<RelatedPostComponent> = (args: RelatedPostComponent) => ({
  props: args,
});

export const RelatedPost = Template.bind({});
RelatedPost.args = {
  title: "More Articles",
  articles: [
    {
      publishDate: "2022/08/16",
      url: "https://www.google.com",
      variant: "img-top",
      img: {
        imageUrl: "https://api.lorem.space/image?w=1366&h=470",
        alt: "Aramark Uniform services",
      },
      title:
        "1. Aramark Uniform services wins two NAUMD image of the year awards",
      text: "Winning looks designed for Iron Montain and Sysco.",
    },
    {
      publishDate: "2022/08/16",
      url: "https://www.google.com",
      variant: "img-top",
      img: {
        imageUrl: "https://api.lorem.space/image?w=1366&h=470",
        alt: "Aramark Uniform services",
      },
      title:
        "2. Aramark Uniform services wins two NAUMD image of the year awards",
      text: "Winning looks designed for Iron Montain and Sysco.",
    },
    {
      publishDate: "2022/08/16",
      url: "https://www.google.com",
      variant: "img-top",
      img: {
        imageUrl: "https://api.lorem.space/image?w=1366&h=470",
        alt: "Aramark Uniform services",
      },
      title:
        "3. Aramark Uniform services wins two NAUMD image of the year awards",
      text: "Winning looks designed for Iron Montain and Sysco.",
    },
  ],
};
