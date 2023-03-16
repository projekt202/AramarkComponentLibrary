import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CollapsibleModule } from "angular2-collapsible";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";

import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { AccordionComponent } from "./accordion.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,
        WysiwygComponent,
        SanitizePipe,
        Array2StringPipe,
      ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        CollapsibleModule,
        LazyLoadImageModule,
      ],
    }),
  ],
  component: AccordionComponent,
  title: "Components/Blocks/Accordion",
} as Meta;

const Template: Story<AccordionComponent> = (args: AccordionComponent) => {
  return {
    props: args,
  };
};

const data = [];
for (let i = 0; i < 10; i += 1) {
  data.push({
    title: "How can I view invoices and statements?",
    content:
      '<p class="typography">Log into <a href="https://www.google.com" target="_blank">My Account</a>. Choose Services in the top navigation bar and then select View Invoices and Statements.</p><img src="https://api.lorem.space/image?w=318&h=119" alt="Description" /><p>Lorem ipsum dolor sit amet!</p>',
  });
}

export const GrayFullwidthWithSideContent = Template.bind({});
GrayFullwidthWithSideContent.args = {
  variant: "fullwidth",
  type: "gray",
  intro: {
    position: "left",
    imageUrl: "https://api.lorem.space/image?w=500&h=500",
    title: "Frequently Asked Questions",
    text: "<p>Have a question that isn't listed below? Feel free to <a href='https://www.google.com' target='_blank'>contact us</a> and we'll be happy to answer it.</p>",
  },
  data,
};

export const GrayFullwidthWithSideContentOnTop = Template.bind({});
GrayFullwidthWithSideContentOnTop.args = {
  variant: "fullwidth",
  type: "gray",
  intro: {
    position: "top",
    imageUrl: "https://api.lorem.space/image?w=500&h=500",
    title: "Frequently Asked Questions",
    text: "<p>Have a question that isn't listed below? Feel free to <a href='https://www.google.com' target='_blank'>contact us</a> and we'll be happy to answer it.</p>",
  },
  data,
};

export const GrayFullwidth = Template.bind({});
GrayFullwidth.args = {
  variant: "fullwidth",
  type: "gray",
  data,
};

export const GrayCenterd = Template.bind({});
GrayCenterd.args = {
  variant: "centered",
  type: "gray",
  data,
};

export const WhiteCentered = Template.bind({});
WhiteCentered.args = {
  variant: "centered",
  type: "white",
  data,
};

export const BlackFullwidthWithSideContent = Template.bind({});
BlackFullwidthWithSideContent.args = {
  variant: "fullwidth",
  type: "black",
  intro: {
    position: "right",
    imageUrl: "https://api.lorem.space/image?w=500&h=500",
    title: "Frequently Asked Questions",
    text: "<p>Have a question that isn't listed below? Feel free to <a href='https://www.google.com' target='_blank'>contact us</a> and we'll be happy to answer it.</p>",
  },
  data,
};

export const BlackFullwidthWithSideContentOnTop = Template.bind({});
BlackFullwidthWithSideContentOnTop.args = {
  variant: "fullwidth",
  type: "black",
  intro: {
    position: "top",
    imageUrl: "https://api.lorem.space/image?w=500&h=500",
    title: "Frequently Asked Questions",
    text: "<p>Have a question that isn't listed below? Feel free to <a href='https://www.google.com' target='_blank'>contact us</a> and we'll be happy to answer it.</p>",
  },
  data,
};

export const BlackFullwidth = Template.bind({});
BlackFullwidth.args = {
  variant: "fullwidth",
  type: "black",
  data,
};

export const BlackCentered = Template.bind({});
BlackCentered.args = {
  variant: "centered",
  type: "black",
  data,
};

export const WhiteFullwidthWithSideContent = Template.bind({});
WhiteFullwidthWithSideContent.args = {
  variant: "fullwidth",
  type: "white",
  intro: {
    position: "right",
    imageUrl: "https://api.lorem.space/image?w=500&h=500",
    title: "Frequently Asked Questions",
    text: "<p>Have a question that isn't listed below? Feel free to <a href='https://www.google.com' target='_blank'>contact us</a> and we'll be happy to answer it.</p>",
  },
  data,
};

export const WhiteFullwidthWithSideContentOnTop = Template.bind({});
WhiteFullwidthWithSideContentOnTop.args = {
  variant: "fullwidth",
  type: "white",
  intro: {
    position: "top",
    imageUrl: "https://api.lorem.space/image?w=500&h=500",
    title: "Frequently Asked Questions",
    text: "<p>Have a question that isn't listed below? Feel free to <a href='https://www.google.com' target='_blank'>contact us</a> and we'll be happy to answer it.</p>",
  },
  data,
};

export const WhiteFullwidth = Template.bind({});
WhiteFullwidth.args = {
  variant: "fullwidth",
  type: "white",
  data,
};

export const WhiteCenterd = Template.bind({});
WhiteCenterd.args = {
  variant: "centered",
  type: "white",
  data,
};
