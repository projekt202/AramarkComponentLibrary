import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmoothScrollModule } from '@boatzako/ngx-smooth-scroll';

import { ButtonComponent } from './button.component';
import { ButtonComponentVariants } from './button.component.model';

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
});
