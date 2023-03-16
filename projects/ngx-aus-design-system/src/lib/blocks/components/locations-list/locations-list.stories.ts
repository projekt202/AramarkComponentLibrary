import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { LocationsListComponent } from "./locations-list.component";

export default {
  title: "Components/Blocks/Locations List",
  component: LocationsListComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LocationsListComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
      ],
    }),
  ],
} as Meta;

const Template: Story<LocationsListComponent> = (
  args: LocationsListComponent
) => ({
  props: args,
});

export const List = Template.bind({});
List.args = {
  title: "Proudly serving across the country.",
  type: "list",
  data: [
    {
      title: "Alabama",
      url: "https://www.google.com",
    },
    {
      title: "Alaska",
      url: "https://www.google.com",
    },
    {
      title: "Arizona",
      url: "https://www.google.com",
    },
    {
      title: "Arkansas",
      url: "https://www.google.com",
    },
    {
      title: "California",
      url: "https://www.google.com",
    },
    {
      title: "Colorado",
      url: "https://www.google.com",
    },
    {
      title: "Connecticut",
      url: "https://www.google.com",
    },
    {
      title: "Delaware",
      url: "https://www.google.com",
    },
  ],
};

export const Cards = Template.bind({});
Cards.args = {
  title: "Proudly serving across Massachusetts.",
  type: "cards",
  data: [
    {
      title: "Boston, MA",
      url: "https://www.google.com",
      phone: "(978) 965-4423",
      hours: "Closed - Opens 9AM",
      service: "Delivery",
    },
    {
      title: "Malborough, MA",
      url: "https://www.google.com",
      phone: "(978) 965-4423",
      hours: "Closed - Opens 9AM",
      service: "Delivery",
    },
    {
      title: "Worchester, MA",
      url: "https://www.google.com",
      phone: "(978) 965-4423",
      hours: "Closed - Opens 9AM",
      service: "Delivery",
    },
    {
      title: "Lawrence, MA",
      url: "https://www.google.com",
      phone: "(978) 965-4423",
      hours: "Closed - Opens 9AM",
      service: "Delivery",
    },
  ],
};
