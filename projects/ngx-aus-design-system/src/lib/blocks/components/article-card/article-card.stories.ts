import { DatePipe } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { ArticleCardComponent } from "./article-card.component";

export default {
  title: "Article Card",
  component: ArticleCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ArticleCardComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        ImageComponent,
      ],
      providers: [DatePipe],
      imports: [RouterTestingModule, LazyLoadImageModule],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<ArticleCardComponent> = (args: ArticleCardComponent) => ({
  props: args,
});

export const LeftImage = Template.bind({});
LeftImage.args = {
  publishDate: "2022/08/16",
  url: "https://www.google.com",
  variant: "img-left",
  img: {
    imageUrl: "https://api.lorem.space/image?w=1366&h=470",
    alt: "Aramark Uniform services",
  },
  title: "Aramark Uniform services wins two NAUMD image of the year awards",
  text: "Winning looks designed for Iron Montain and Sysco.",
  btn: {
    url: "https://www.google.com",
    title: "Read More",
  },
};

export const RightImage = Template.bind({});
RightImage.args = {
  publishDate: "2022/08/16",
  url: "https://www.google.com",
  variant: "img-right",
  img: {
    imageUrl: "https://api.lorem.space/image?w=1366&h=470",
    alt: "Aramark Uniform services",
  },
  title: "Aramark Uniform services wins two NAUMD image of the year awards",
  text: "Winning looks designed for Iron Montain and Sysco.",
  btn: {
    url: "https://www.google.com",
    title: "Read More",
  },
};

export const TopImage = Template.bind({});
TopImage.args = {
  publishDate: "2022/08/16",
  url: "https://www.google.com",
  variant: "img-top",
  img: {
    imageUrl: "https://api.lorem.space/image?w=1366&h=470",
    alt: "Aramark Uniform services",
  },
  title: "Aramark Uniform services wins two NAUMD image of the year awards",
  text: "Winning looks designed for Iron Montain and Sysco.",
};

export const DateRange = Template.bind({});
DateRange.args = {
  publishDate: "2022/08/16",
  endDate: "2022/08/20",
  url: "https://www.google.com",
  variant: "img-right",
  img: {
    imageUrl: "https://api.lorem.space/image?w=1366&h=470",
    alt: "Aramark Uniform services",
  },
  title: "Aramark Uniform services wins two NAUMD image of the year awards",
  text: "Winning looks designed for Iron Montain and Sysco.",
  btn: {
    url: "https://www.google.com",
    title: "Read More",
  },
};
