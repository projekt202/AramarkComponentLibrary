import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageComponent],
      imports: [LazyLoadImageModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    component.backgroundDimensions = {
      mobile: {
        width: '1px',
        height: '1px',
      },
      tablet: {
        width: '2px',
        height: '2px',
      },
      desktop: {
        width: '3px',
        height: '3px',
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returns the appropriate background styles on mobile', () => {
    spyOn(component, 'getWindowWidth').and.returnValue(500);
    component.variant = 'background';
    const styles = component.getStyle();
    // @ts-ignore
    expect(styles.width).toBe('1px');
    // @ts-ignore
    expect(styles.height).toBe('1px');
  });

  it('returns default background styles if none are provided', () => {
    component.variant = 'background';
    component.backgroundDimensions = undefined;
    const styles = component.getStyle();
    // @ts-ignore
    expect(styles.width).toBe('auto');
    // @ts-ignore
    expect(styles.height).toBe('auto');
  });

  it('returns 0 as window width on server side', () => {
    component.window = null;
    const width = component.getWindowWidth();
    expect(width).toBe(0);
  });

  it('renders a fullwidth img tag', () => {
    component.fullwidth = true;
    component.variant = 'image';
    const styles = component.getStyle();
    expect(styles.width).toBe('100%');
  });
});
