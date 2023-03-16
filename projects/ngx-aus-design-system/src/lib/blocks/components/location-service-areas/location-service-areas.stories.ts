import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { SwiperModule } from "swiper/angular";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { LocationServiceAreasComponent } from "./location-service-areas.component";

export default {
  title: "Location Service Areas",
  component: LocationServiceAreasComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LocationServiceAreasComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
        ButtonComponent,
        ImageComponent,
        CarouselComponent,
      ],
      imports: [SwiperModule],
    }),
  ],
} as Meta;

const Template: Story<LocationServiceAreasComponent> = (
  args: LocationServiceAreasComponent
) => ({
  props: args,
});

export const Carousel = Template.bind({});
Carousel.args = {
  title: "Proudly serving Lawrence and surrounding areas:",
  variant: "carousel",
  background: "black",
  locations: [
    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",

    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",

    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",

    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",
  ],
};

export const List = Template.bind({});
List.args = {
  title: "Proudly serving Lawrence and surrounding areas:",
  variant: "list",
  background: "white",
  locations: [
    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",

    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",

    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",

    "North Andover, MA",
    "Methuen, MA",
    "Andover, MA",
    "Salem, NH",
    "Haverhill, MA",
    "Dracut, MA",
    "Tewsbury, MA",
  ],
};
