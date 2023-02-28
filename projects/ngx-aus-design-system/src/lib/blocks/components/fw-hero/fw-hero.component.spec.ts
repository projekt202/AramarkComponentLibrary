import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwHeroComponent } from './fw-hero.component';
import {
  FwHeroBannerVariants,
  FwHeroCardVariants,
  FwHeroVariant,
} from './fw-hero.model';

describe('FwHeroComponent', () => {
  let component: FwHeroComponent;
  let fixture: ComponentFixture<FwHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FwHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FwHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct variants combination', () => {
    [
      { card: 'white', banner: 'white', type: 'card' },
      { card: 'white', banner: 'black', type: 'card' },
      { card: 'black', banner: 'black', type: 'card' },
      { card: 'black', banner: 'white', type: 'card' },
      { card: 'transparent', banner: 'white', type: 'blur' },
      { card: undefined, banner: 'black', type: undefined },
    ].forEach((variant) => {
      component.variant = variant.type as FwHeroVariant;
      component.banner = {
        text: 'Lorem ipsum',
        variant: variant.banner as FwHeroBannerVariants,
        button: {
          text: 'Lorem ipsum',
          href: 'https://www.google.com',
        },
      };
      component.card = {
        title: 'Lorem ipsum',
        gradient: true,
        variant: variant.card as FwHeroCardVariants,
        button: {
          text: 'Lorem ipsum',
          route: '/test',
          variant: 'black',
        },
      };
      fixture.detectChanges();
      if (variant.card) {
        const buttonCard =
          fixture.debugElement.nativeElement.querySelector('.fw-hero__card');
        expect(buttonCard.classList).toContain(
          `fw-hero__card--${variant.card}`
        );
      }
      if (variant.banner) {
        const buttonBanner =
          fixture.debugElement.nativeElement.querySelector('.fw-hero__banner');
        expect(buttonBanner.classList).toContain(
          `fw-hero__banner--${variant.banner}`
        );
      }
    });
  });
});
