import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";

import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { BreadcrumbsComponent } from "./breadcrumbs.component";

export default {
  title: "Breadcrumbs",
  component: BreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        BreadcrumbsComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid">
            <div class="o-grid__col">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<BreadcrumbsComponent> = (args: BreadcrumbsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  paths: [
    { title: "Aramark Uniforms", url: "https://www.google.com" },
    { title: "Locations", url: "https://www.youtube.com" },
    { title: "MA", url: "https://www.twitter.com" },
  ],
};
export const Variant = Template.bind({});
Variant.args = {
  variant: "arrow",
  paths: [{ title: "Back to articles", url: "https://www.google.com" }],
};
