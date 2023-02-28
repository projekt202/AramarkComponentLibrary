import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { HttpClientModule } from "@angular/common/http";
import { CookieModule } from "ngx-cookie";

import { GraphQLModule } from "../../../graphql.module";
import { ArrowLinkComponent } from "../../../shared/components/arrow-link/arrow-link.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { AlertBarComponent } from "./alert-bar.component";

export default {
  title: "Alert Bar",
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        ArrowLinkComponent,
        WysiwygComponent,
        SanitizePipe,
      ],
      imports: [GraphQLModule, HttpClientModule, CookieModule.withOptions()],
    }),
  ],
  component: AlertBarComponent,
} as Meta;

const Template: Story<AlertBarComponent> = (args: AlertBarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  text: "This is an alert bar lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  btn: "Learn more",
};
