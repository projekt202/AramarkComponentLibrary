import { RouterTestingModule } from "@angular/router/testing";
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";
import { Array2StringPipe } from "../../pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";
import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { TypographyComponent } from "../typography/typography.component";
import { CardComponent } from "./card.component";

export default {
  title: "Components/Shared/Card",
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CardComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
      ],
      imports: [RouterTestingModule],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col u-12/12 u-6/12@md u-4/12@lg u-3/12@xl">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const White = Template.bind({});
White.args = {
  icon: "package",
  title: "Uniform",
  text: "Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms",
  button: {
    text: "Get a Quote",
    route: "/test",
  },
};

export const Transparent = Template.bind({});
Transparent.args = {
  icon: "package",
  title: "Uniform",
  variant: "transparent",
  text: "Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms",
  button: {
    text: "Get a Quote",
    href: "https://www.google.com",
  },
};

export const NoButton = Template.bind({});
NoButton.args = {
  icon: "package",
  title: "Uniform",
  variant: "transparent",
  text: "Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms",
};

export const LeftAlignedBlack = Template.bind({});
LeftAlignedBlack.args = {
  icon: "package",
  title: "One stop shop",
  variant: "left-aligned-black",
  text: "From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly. From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly.",
};

export const LeftAlignedWhite = Template.bind({});
LeftAlignedWhite.args = {
  icon: "package",
  title: "One stop shop",
  variant: "left-aligned-white",
  text: "From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly. From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly.",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "One stop shop",
  variant: "left-aligned-black",
  text: "From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly. From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly.",
};
