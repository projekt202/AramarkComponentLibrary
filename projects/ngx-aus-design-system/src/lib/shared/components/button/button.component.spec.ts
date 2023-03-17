import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmoothScrollModule } from '@boatzako/ngx-smooth-scroll';

import { ButtonComponent } from './button.component';
import { TypographyPresets } from './../typography/typography.component.model';
import { ButtonComponentVariants, ButtonSizes } from './button.component.model';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [NgxSmoothScrollModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct variant', () => {
    ['white', 'black', 'red', 'transparent', 'outline'].forEach((variant) => {
      component.variant = variant as ButtonComponentVariants;
      component.href = 'https://www.google.com';
      fixture.detectChanges();
      const button =
        fixture.debugElement.nativeElement.querySelector('.button');
      expect(button.classList).toContain(`button--bg-${variant}`);
    });
  });

  it('should render the correct text', () => {
    component.text = 'test';
    component.route = '/test';
    fixture.detectChanges();
    const buttonText = fixture.debugElement.nativeElement.textContent;
    expect(buttonText).toContain('test');
  });

  it('should render a disabled button', () => {
    component.text = 'test';
    component.route = '/test';
    component.disabled = true;
    fixture.detectChanges();
    const classes =
      fixture.debugElement.nativeElement.querySelector('.button').classList;
    expect(classes).toContain('button--disabled');
  });

  it('should render a fullwidth button', () => {
    component.text = 'test';
    component.route = '/test';
    component.fullwidth = true;
    fixture.detectChanges();
    const classes =
      fixture.debugElement.nativeElement.querySelector('.button').classList;
    expect(classes).toContain('button--fullwidth');
  });

  it('should return the correct legacy button background classes', () => {
    ['white', 'black', 'red', 'transparent', 'outline'].forEach(className => {
      component.variant = className as ButtonComponentVariants;
      const classes = component.getClasses();
      expect(classes).toEqual(['button', `button--bg-${className}`]);
    });
  });

  it('should return the correct button size classes', () => {
    ['small', 'medium', 'large'].forEach(className => {
      component.size = className as ButtonSizes;
      const classes = component.getClasses();
      expect(classes).toEqual(['button', `button--size-${className}`]);
    });
  });

  it('should return the correct button variant classes', () => {
    ['primary-brand', 'primary-neutral', 'secondary', 'tertiary'].forEach(className => {
      component.variant = className as ButtonComponentVariants;
      const classes = component.getClasses();
      expect(classes).toEqual(['button', `button--${className}`]);
    });
  });

  it('should return the correct button modifier classes', () => {
    ['fullwidth', 'disabled'].forEach(className => {
      component.variant = 'primary-brand';
      component.fullwidth = true;
      component.disabled = true;
      const classes = component.getClasses();
      expect(classes).toEqual(['button', 'button--primary-brand', `button--${className}`]);
    });
  });

  it('should return the correct typography classes', () => {
    [
      {
        size: 'small',
        class: 'text-preset-9--medium',
      },
      {
        size: 'medium',
        class: 'text-preset-8--medium',
      },
      {
        size: 'large',
        class: 'text-preset-7--medium',
      },
    ].forEach(config => {
      component.size = config.size as ButtonSizes;
      const classes = component.getTextClasses();
      expect(classes).toEqual([config.class as TypographyPresets]);
    });
  });
});
