import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SwiperModule } from "swiper/angular";
import { IconModule } from "../icon/icon.module";
import { CarouselComponent } from "./carousel.component";

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, SwiperModule, IconModule],
  providers: [],
  exports: [CarouselComponent],
})
export class CarouselModule {}
