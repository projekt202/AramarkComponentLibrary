import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyComponent } from './typography.component';
import { TypographyComponentVariants } from './typography.component.model';

describe('TypographyComponent', () => {
  let component: TypographyComponent;
  let fixture: ComponentFixture<TypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct text', () => {
    [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'a',
      'a-accent',
      'span',
      'blockquote',
      'form-text',
      'form-small',
      'numbers-1',
      'numbers-2',
      'numbers-3',
      'numbers-4',
      'numbers-5',
    ].forEach((variant) => {
      component.variant = variant as TypographyComponentVariants;
      component.text = variant;
      if (variant === 'a' || variant === 'a-accent') {
        component.href = 'https://www.google.com';
      }
      fixture.detectChanges();
      expect(
        fixture.debugElement.nativeElement.querySelector('.typography')
      ).toBeTruthy();
      expect(fixture.debugElement.nativeElement.textContent).toContain(variant);
    });
  });

  it('should render a custom version', () => {
    component.color = 'red';
    component.weight = '700';
    fixture.detectChanges();
    const styles = fixture.debugElement.nativeElement.querySelector('p').style;
    expect(styles.color).toBe('red');
    expect(styles.fontWeight).toBe('700');
  });

  it('should render a disabled link', () => {
    component.variant = 'a';
    component.disabled = true;
    component.route = '/test';
    fixture.detectChanges();
    const classes =
      fixture.debugElement.nativeElement.querySelector('a').classList;
    expect(classes).toContain('a-disabled');
  });
});
