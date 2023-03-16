import { RouterTestingModule } from "@angular/router/testing";
import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CardComponent } from "../../../shared/components/card/card.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { IconComponentNames } from "../../../shared/components/icon/icon.model";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { CardsColumnComponent } from "./cards-column.component";

export default {
  title: "Components/Blocks/CardsColumn",
  component: CardsColumnComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CardsColumnComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        CardComponent,
      ],
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<CardsColumnComponent> = (args: CardsColumnComponent) => ({
  props: args,
});

const mock = {
  icon: "package" as IconComponentNames,
  title: "One stop shop",
  text: "From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly. From uniforms to floor mats and first aids — get everything you need to run your business delivered and refreshed weekly. ",
};
const data = [];
const noIconData = [];
for (let i = 0; i < 10; i++) {
  data.push(mock);
  noIconData.push({ ...mock, icon: undefined });
}

export const Black2Columns = Template.bind({});
Black2Columns.args = {
  data: data.slice(0, 4),
  button: {
    text: "Get in touch with a team member",
    route: "/test",
  },
};

export const Black3Columns = Template.bind({});
Black3Columns.args = {
  data: data.slice(0, 6),
  layout: "3",
  button: {
    text: "Get in touch with a team member",
    route: "/test",
  },
};

export const Black2ColumnsNoButton = Template.bind({});
Black2ColumnsNoButton.args = {
  data: data.slice(0, 4),
};

export const Black3ColumnsNoButton = Template.bind({});
Black3ColumnsNoButton.args = {
  data: data.slice(0, 6),
  layout: "3",
};

export const White2Columns = Template.bind({});
White2Columns.args = {
  data: data.slice(0, 4),
  variant: "white",
  layout: "2",
  button: {
    text: "Get in touch with a team member",
    href: "https://www.google.com",
  },
};

export const White3Columns = Template.bind({});
White3Columns.args = {
  data: data.slice(0, 6),
  variant: "white",
  layout: "3",
  button: {
    text: "Get in touch with a team member",
    href: "https://www.google.com",
  },
};

export const White2ColumnsNoButton = Template.bind({});
White2ColumnsNoButton.args = {
  data: data.slice(0, 4),
  variant: "white",
  layout: "2",
};

export const White3ColumnsNoButton = Template.bind({});
White3ColumnsNoButton.args = {
  data: data.slice(0, 6),
  variant: "white",
  layout: "3",
};

export const UnevenRows = Template.bind({});
UnevenRows.args = {
  data: data.slice(0, 8),
  variant: "white",
  layout: "3",
};

export const WhiteNoIcons = Template.bind({});
WhiteNoIcons.args = {
  data: noIconData,
  variant: "white",
  layout: "3",
};

export const BlackNoIcons = Template.bind({});
BlackNoIcons.args = {
  data: noIconData,
  variant: "black",
  layout: "2",
};
