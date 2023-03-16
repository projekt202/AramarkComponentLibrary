import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";
import { Array2StringPipe } from "../../pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";
import { IconComponent } from "../icon/icon.component";
import { TypographyComponent } from "../typography/typography.component";

import { LocationCardComponent } from "./location-card.component";

export default {
  title: "Components/Shared/Location Card",
  component: LocationCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LocationCardComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col u-6/12@md u-5/12@lg u-4/12@xl">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<LocationCardComponent> = (
  args: LocationCardComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  map: true,
  city: "Syracuse, NY",
  name: "Aramark Uniform Services",
  address: "110 Glenn Street",
  zip: "01843",
  phone: "(978) 965-4423",
  url: "https://www.google.com",
  coords: {
    lat: 38.8272,
    lng: -77.44387,
  },
};

export const NoMap = Template.bind({});
NoMap.args = {
  map: false,
  city: "Syracuse, NY",
  name: "Aramark Uniform Services",
  address: "110 Glenn Street",
  zip: "01843",
  phone: "(978) 965-4423",
  url: "https://www.google.com",
};
