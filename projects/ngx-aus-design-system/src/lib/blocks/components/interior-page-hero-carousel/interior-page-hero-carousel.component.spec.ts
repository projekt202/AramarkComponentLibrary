import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorPageHeroCarouselComponent } from './interior-page-hero-carousel.component';

describe('InteriorPageHeroCarouselComponent', () => {
  let component: InteriorPageHeroCarouselComponent;
  let fixture: ComponentFixture<InteriorPageHeroCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorPageHeroCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorPageHeroCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
