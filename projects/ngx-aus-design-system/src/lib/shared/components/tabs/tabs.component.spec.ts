import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returns whether dropdown should be visible instead of slider on mobile', () => {
    spyOn(component, 'getWindowWidth').and.returnValue(600);
    window.dispatchEvent(new Event('resize'));
    expect(component.isOverflown).toBeTrue();
  });

  it('returns default value for dropdown visibility', () => {
    component.didInit = true;
    component.list = undefined;
    expect(component.getControlVisibility()).toBeFalse();
  });

  it('returns initial value for dropdown visibility on desktop', () => {
    spyOn(component, 'getWindowWidth').and.returnValue(1000);
    component.list = undefined;
    component.didInit = false;
    expect(component.getControlVisibility()).toBeTrue();
  });

  it('updates selection when clicking on slider item', () => {
    expect(component.activeIdx).toBe(0);
    component.selectCategory(4);
    expect(component.activeIdx).toBe(4);
  });

  it('updates selection when selecting an option from dropdown', () => {
    component.categories = ['test', 'test 2'];
    expect(component.activeIdx).toBe(0);
    component.onDropdownSelect({
      target: { value: 'test 2' },
    } as unknown as Event);
    expect(component.activeIdx).toBe(1);
  });

  it('updates dropdown width on selection', fakeAsync(() => {
    component.dropdown = { nativeElement: { style: { width: '' } } } as {
      nativeElement: HTMLSelectElement;
    };
    component.placeholder = { nativeElement: { scrollWidth: 100 } } as {
      nativeElement: HTMLSpanElement;
    };
    component.updateDropdownWidth();
    tick(1000);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.dropdown?.nativeElement.style.width).toBe('190px');
    });
  }));
});
