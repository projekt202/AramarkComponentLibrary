import { GoogleMapsModule } from "@angular/google-maps";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { LocationMapComponent } from "./location-map.component";

export default {
  title: "Location Map",
  component: LocationMapComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LocationMapComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        ButtonComponent,
      ],
      imports: [GoogleMapsModule, LazyLoadImageModule],
    }),
  ],
} as Meta;

const Template: Story<LocationMapComponent> = (args: LocationMapComponent) => ({
  props: args,
});

const coords = [
  { lat: 38.8272, lng: -77.44387 },
  { lat: 38.833613, lng: -77.436966 },
  { lat: 38.838614, lng: -77.45023 },
  { lat: 38.827181, lng: -77.426181 },
  { lat: 38.835873, lng: -77.444905 },
  { lat: 38.806237, lng: -77.436999 },
  { lat: 38.789915, lng: -77.447649 },
  { lat: 38.812168, lng: -77.428685 },
  { lat: 38.774451, lng: -77.443942 },
  { lat: 38.772176, lng: -77.47761 },
];

const locations = [];
for (let i = 0; i < 10; i += 1) {
  locations.push({
    name: "Aramark",
    address: "110 Glenn Street",
    city: "Lawrence",
    state: "MA",
    zip: "01843",
    phone: "(978) 965-4423",
    hours: "9am - 5pm Daily",
    services: "Delivery",
    coords: {
      lat: coords[i].lat,
      lng: coords[i].lng,
    },
    img: "https://api.lorem.space/image?w=300&h=90",
    url: "https://www.google.com",
  });
}

export const MultipleLocationsSidebarInitiallyOpen = Template.bind({});
MultipleLocationsSidebarInitiallyOpen.args = {
  isInitiallyOpen: true,
  variant: "multiple",
  locations,
};

export const MultipleLocationsSidebarInitiallyClosed = Template.bind({});
MultipleLocationsSidebarInitiallyClosed.args = {
  isInitiallyOpen: false,
  variant: "multiple",
  locations,
  button: {
    variant: "red",
    target: "_blank",
    title: "Request a Quote",
    url: "https://www.google.com",
  },
};

export const SingleLocation = Template.bind({});
SingleLocation.args = {
  variant: "single",
  locations: locations.slice(0, 1),
};
