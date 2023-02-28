import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { IconComponentSizes, IconComponentVariants } from './icon.model';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct variant', () => {
    ['transparent', 'black', 'white', 'black-full'].forEach((variant) => {
      component.variant = variant as IconComponentVariants;
      component.name = 'atom';
      fixture.detectChanges();
      const icon = fixture.debugElement.nativeElement.querySelector('.icon');
      expect(icon.classList).toContain(`icon--bg-${variant}`);
    });
    ['xs', 'small', 'large'].forEach((size) => {
      component.size = size as IconComponentSizes;
      fixture.detectChanges();
      const icon = fixture.debugElement.nativeElement.querySelector('.icon');
      expect(icon.classList).toContain(`icon--${size}`);
    });
    const icon = fixture.debugElement.nativeElement.querySelector('.icon');
    expect(icon.classList).not.toContain('icon--round');
    component.round = true;
    fixture.detectChanges();
    expect(icon.classList).toContain('icon--round');
  });

  it('should render a custom version', () => {
    component.fontSize = 100;
    component.color = 'red';
    fixture.detectChanges();
    const styles =
      fixture.debugElement.nativeElement.querySelector('.icon').style;
    expect(styles.fontSize).toBe('100px');
    expect(styles.color).toBe('red');
  });

  it('should render a wide version', () => {
    component.variant = 'black';
    component.name = 'truck';
    fixture.detectChanges();
    const icon = fixture.debugElement.nativeElement.querySelector('.icon');
    expect(icon.classList).toContain('icon--wide');
  });

  it('should render a wider version', () => {
    component.variant = 'black';
    component.name = 'flexibility';
    fixture.detectChanges();
    const icon = fixture.debugElement.nativeElement.querySelector('.icon');
    expect(icon.classList).toContain('icon--wider');
  });
});
