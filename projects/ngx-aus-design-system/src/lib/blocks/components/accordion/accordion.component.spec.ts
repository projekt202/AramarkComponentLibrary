import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import {
  AccordionComponentComponentType,
  AccordionComponentComponentVariant,
} from './accordion.component.model';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create appropriate variant', () => {
    ['fullwidth', 'centered'].forEach((config) => {
      component.variant = config as AccordionComponentComponentVariant;
      fixture.detectChanges();
      const elem =
        fixture.debugElement.nativeElement.querySelector('.accordion');
      expect(elem.classList).toContain(`accordion--${config}`);
    });
    ['black', 'white'].forEach((config) => {
      component.type = config as AccordionComponentComponentType;
      fixture.detectChanges();
      const elem =
        fixture.debugElement.nativeElement.querySelector('.accordion');
      expect(elem.classList).toContain(`accordion--${config}`);
    });
    ['left', 'right', 'top'].forEach((config) => {
      component.intro = {
        text: 'test',
        title: 'test',
        imageUrl: 'test',
        position: config as 'left' | 'right',
      };
      fixture.detectChanges();
      const elem =
        fixture.debugElement.nativeElement.querySelector('.accordion');
      expect(elem.classList).toContain(`accordion--intro-${config}`);
    });
  });

  it('updates open item index', () => {
    expect(component.openIdx).toBe(null);
    component.setOpenIdx(1);
    expect(component.openIdx).toBe(1);
  });

  it('toggles or sets active item index', () => {
    component.openIdx = 0;
    component.onToggleHandler(0);
    expect(component.openIdx).toBeNull();
    component.onToggleHandler(1);
    expect(component.openIdx).toBe(1);
  });
});
