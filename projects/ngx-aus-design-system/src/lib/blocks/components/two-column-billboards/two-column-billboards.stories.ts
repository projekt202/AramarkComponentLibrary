import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { CommonModule } from "@angular/common";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { TwoColumnBillboardsComponent } from "./two-column-billboards.component";
import { BillboardComponent } from "../billboard/billboard.component";
import {
  BillboardComponentColumn,
  BillboardComponentType,
  BillboardComponentVariant,
} from "../billboard/billboard.component.model";

import { LazyLoadImageModule } from "ng-lazyload-image";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { ButtonComponentVariants } from "../../../shared/components/button/button.component.model";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        BillboardComponent,
      ],
      imports: [CommonModule, LazyLoadImageModule],
    }),
  ],
  component: TwoColumnBillboardsComponent,
  title: "Components/Blocks/Two-Column Billboards",
} as Meta;

const Template: Story<TwoColumnBillboardsComponent> = (
  args: TwoColumnBillboardsComponent
) => ({
  props: args,
});

const billboard = {
  variant: "left-image" as BillboardComponentVariant,
  type: "light" as BillboardComponentType,
  column: "50-50" as BillboardComponentColumn,
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark FlexFit® is comfort",
  bodyText:
    "Desiged for every day wear. Aliqua nostrud consectetur amet labore officia dolor aliquip sint fugiat non voluptate.",
  btn: {
    text: "Learn More",
    variant: "red" as ButtonComponentVariants,
    href: "https://www.google.com",
  },
};

export const White = Template.bind({});
White.args = {
  bgColor: "white",
  billboards: [billboard, billboard],
};

export const Gray = Template.bind({});
Gray.args = {
  bgColor: "gray",
  billboards: [billboard, billboard],
};

export const Black = Template.bind({});
Black.args = {
  bgColor: "black",
  billboards: [billboard, billboard],
};
