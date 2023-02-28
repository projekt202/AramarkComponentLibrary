import { GoogleMapsModule } from "@angular/google-maps";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { SwiperModule } from "swiper/angular";

import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { LocationCardComponent } from "../../../shared/components/location-card/location-card.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { LocationsCardsComponent } from "./locations-cards.component";

export default {
  title: "Locations Cards",
  component: LocationsCardsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LocationsCardsComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        LocationCardComponent,
        CarouselComponent,
      ],
      imports: [GoogleMapsModule, SwiperModule],
    }),
  ],
} as Meta;

const Template: Story<LocationsCardsComponent> = (
  args: LocationsCardsComponent
) => ({
  props: args,
});

const locations = [];
for (let i = 0; i < 3; i += 1) {
  locations.push({
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
  });
}

export const Default = Template.bind({});
Default.args = {
  title: "Nearby Locations",
  allLocationsLink: {
    target: "_blank",
    title: "View all locations",
    url: "https://www.google.com",
  },
  locations,
};
