import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from "@angular/core";
import { EventsParams } from "swiper/angular";

import SwiperCore, { SwiperOptions, Autoplay, A11y } from "swiper";
import { BrowserService } from "../../services/browser/browser.service";
import { A11yOptions } from "swiper/types";
SwiperCore.use([Autoplay, A11y]);

@Component({
  selector: "aus-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren("slide") slides?: QueryList<any>;
  @Input() slidesPerView: number = 1;
  @Input() config?: SwiperOptions;
  @Input() controlsMargin?: number;
  @Input() controls?: boolean = true;
  @Input() disableOnFirstCycle?: boolean;

  @ViewChild("swiper") swiper?: any;
  didInit: boolean = false;
  currentIdx: number = 0;
  isAuto = true;
  pagination: number[] = Array.from(Array(this.slides?.length).keys()) || [];

  didReachEnd: boolean = false;
  didCompleteFirstCycle: boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private browserService: BrowserService
  ) {}

  getSwiper() {
    return this.swiper?.swiperRef;
  }

  updatePagination(swiper: any) {
    if (!swiper || !Array.isArray(swiper.snapGrid)) return;
    let filtered = [...swiper.snapGrid];
    for (let i = 0; i < 2; i += 1) {
      filtered.pop();
    }
    this.pagination = this.config?.loop ? filtered : swiper.snapGrid;
  }

  ngAfterViewInit(): void {
    this.updatePagination(this.swiper.swiperRef);
    const window = this.browserService.getWindow();
    if (window) {
      window.addEventListener("resize", () => {
        this.updatePagination(this.swiper.swiperRef);
      });
    }
    this.currentIdx = this.config?.initialSlide || 0;
    this.didInit = true;
    this.changeDetectorRef.detectChanges();
  }

  toggleAuto() {
    this.isAuto = !this.isAuto;
    if (this.isAuto) {
      this.swiper?.swiperRef.autoplay.start();
      return true;
    }
    this.swiper?.swiperRef.autoplay.stop();
    return false;
  }

  getCurrentIdx() {
    return this.currentIdx;
  }

  onSlideChange(e: EventsParams["slideChange"], isEvent?: boolean) {
    if (!this.slides || !this.didInit) return;
    let newIdx = isEvent ? e[0].realIndex : e[0].activeIndex;
    if (!isEvent && newIdx >= this.slides.length) {
      newIdx = newIdx - this.slides.length;
    }
    this.currentIdx = newIdx;
    this.changeDetectorRef.detectChanges();
  }

  onReachBeginning() {
    if (this.disableOnFirstCycle) {
      if (this.didReachEnd) {
        // Stop autoplay after first cycle
        if (this.isAuto && !this.didCompleteFirstCycle) {
          this.toggleAuto();
        }
        this.didCompleteFirstCycle = true;
      }
    }
  }

  onReachEnd() {
    if (this.disableOnFirstCycle) {
      this.didReachEnd = true;
    }
  }

  slideTo(index: number) {
    this.currentIdx = index;
    if (this.config?.loop) {
      this.swiper?.swiperRef.slideToLoop(index);
    } else {
      this.swiper?.swiperRef.slideTo(index);
    }
  }

  getConfig() {
    if (this.config?.loop && this.slides && this.slides?.length <= 1) {
      this.config.loop = false;
      this.changeDetectorRef.detectChanges();
    }
    return {
      autoHeight: true,
      ...(this.config || {}),
    };
  }

  getA11y(): A11yOptions {
    return {
      enabled: true,
      containerMessage:
        "This element contains multiple groups of related content",
      itemRoleDescriptionMessage: "Related content group",
    };
  }
}
