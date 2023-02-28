import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle autoplay mode', () => {
    component.swiper = {
      swiperRef: {
        autoplay: {
          start: jasmine.createSpy(),
          stop: jasmine.createSpy(),
        },
        snapGrid: [],
      },
    };
    component.isAuto = true;
    expect(component.toggleAuto()).toBeFalse();
    expect(component.isAuto).toBeFalse();
    expect(component.swiper.swiperRef.autoplay.stop).toHaveBeenCalled();
    expect(component.toggleAuto()).toBeTrue();
    expect(component.isAuto).toBeTrue();
    expect(component.swiper.swiperRef.autoplay.start).toHaveBeenCalled();
  });

  it('returns the current slide index', () => {
    component.currentIdx = 2;
    expect(component.getCurrentIdx()).toBe(2);
  });

  it('updates the current slide index on slide change', () => {
    component.currentIdx = 0;
    // @ts-ignore
    component.onSlideChange([{ activeIndex: 1 }]);
    expect(component.currentIdx).toBe(1);
    component.slides = undefined;
    component.currentIdx = 2;
    // @ts-ignore
    component.onSlideChange([{ activeIndex: 1 }]);
    expect(component.currentIdx).toBe(2);
  });

  it('slides to specific slide', () => {
    component.currentIdx = 0;
    component.swiper = {
      swiperRef: {
        slideTo: jasmine.createSpy(),
        slideToLoop: jasmine.createSpy(),
        snapGrid: [],
      },
    };
    component.slideTo(3);
    expect(component.currentIdx).toBe(3);
    expect(component.swiper.swiperRef.slideTo).toHaveBeenCalledWith(3);
    component.config = { loop: true };
    component.slideTo(2);
    expect(component.swiper.swiperRef.slideToLoop).toHaveBeenCalledWith(2);
  });
});
