import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorPageHeroComponent } from './interior-page-hero.component';
import { InteriorPageHeroComponentType, InteriorPageHeroComponentVariant } from './interior-page-hero.component.model';

describe('InteriorPageHeroComponent', () => {
  let component: InteriorPageHeroComponent;
  let fixture: ComponentFixture<InteriorPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorPageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct combination', () => {
    [
      { variant: 'left-image', type: 'dark' },
      { variant: 'left-image', type: 'light' },
      { variant: 'right-image', type: 'dark' },
      { variant: 'right-image', type: 'light' }
    ].forEach((data) => {
      component.variant = data.variant as InteriorPageHeroComponentVariant;
      component.type = data.type as InteriorPageHeroComponentType;

      fixture.detectChanges();
      const interiorpagehero =
        fixture.debugElement.nativeElement.querySelector('.interiorpagehero');

      expect(interiorpagehero.classList).toContain(
        `variant--${data.variant}`
      );
      expect(interiorpagehero.classList).toContain(
        `type--${data.type}`
      );
    });
  });
});
