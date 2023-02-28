import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponentVariants } from '../../../shared/components/card/card.model';
import { IconComponentNames } from '../../../shared/components/icon/icon.model';

import { CardsRowComponent } from './cards-row.component';

describe('CardsRowComponent', () => {
  let component: CardsRowComponent;
  let fixture: ComponentFixture<CardsRowComponent>;

  const card = {
    variant: 'white' as CardComponentVariants,
    icon: 'package' as IconComponentNames,
    title: 'Uniform',
    text: 'Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms',
  };

  const spyResize = jasmine.createSpy();

  beforeAll(() => {
    window.addEventListener('resize', spyResize);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsRowComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CardsRowComponent);
    component = fixture.componentInstance;
    component.title = 'test';
    component.text = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 8 cards under the same grid on mobile/tablet', () => {
    for (let i = 0; i < 8; i++) {
      component.data.push(card);
    }
    spyOn(component, 'getIsUnderThreshold').and.returnValue(true);
    fixture.detectChanges();
    const grids =
      fixture.debugElement.nativeElement.querySelectorAll('.o-grid--center');
    expect(grids.length).toBe(1);
  });

  it('should render 2 4-card rows on desktop', () => {
    for (let i = 0; i < 8; i++) {
      component.data.push(card);
    }
    spyOn(component, 'getIsUnderThreshold').and.returnValue(false);
    fixture.detectChanges();
    const grids =
      fixture.debugElement.nativeElement.querySelectorAll('.o-grid--center');
    expect(grids.length).toBe(2);
    expect(grids[0].children.length).toBe(4);
    expect(grids[1].children.length).toBe(4);
  });

  it('should render 1 3-card row and 1 2-card row on desktop', () => {
    for (let i = 0; i < 5; i++) {
      component.data.push(card);
    }
    spyOn(component, 'getIsUnderThreshold').and.returnValue(false);
    fixture.detectChanges();
    const grids =
      fixture.debugElement.nativeElement.querySelectorAll('.o-grid--center');
    expect(grids.length).toBe(2);
    expect(grids[0].children.length).toBe(3);
    expect(grids[1].children.length).toBe(2);
  });

  it('should render 1 4-card row on desktop', () => {
    for (let i = 0; i < 4; i++) {
      component.data.push(card);
    }
    spyOn(component, 'getIsUnderThreshold').and.returnValue(false);
    fixture.detectChanges();
    const grids =
      fixture.debugElement.nativeElement.querySelectorAll('.o-grid--center');
    expect(grids.length).toBe(1);
    expect(grids[0].children.length).toBe(4);
  });

  it('should render 1 4-card row and 1 3-card row on desktop', () => {
    for (let i = 0; i < 7; i++) {
      component.data.push(card);
    }
    spyOn(component, 'getIsUnderThreshold').and.returnValue(false);
    fixture.detectChanges();
    const grids =
      fixture.debugElement.nativeElement.querySelectorAll('.o-grid--center');
    expect(grids.length).toBe(2);
    expect(grids[0].children.length).toBe(4);
    expect(grids[1].children.length).toBe(3);
  });

  it('should trigger event handler when window is resized', () => {
    window.dispatchEvent(new Event('resize'));
    expect(spyResize).toHaveBeenCalled();
  });

  it('sets true to isUnderThreshold when on SSR', () => {
    component.window = null;
    component.updateIsUnderThreshold();
    expect(component.isUnderThreshold).toBeTrue();
  });
});
