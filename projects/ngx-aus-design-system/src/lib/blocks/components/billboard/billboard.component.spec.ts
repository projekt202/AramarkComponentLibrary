import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillboardComponent } from './billboard.component';

import { BillboardComponentColumn, BillboardComponentType, BillboardComponentVariant } from './billboard.component.model';

describe('BillboardComponent', () => {
  let component: BillboardComponent;
  let fixture: ComponentFixture<BillboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct combination', () => {
    [
      { variant: 'left-image', type: 'dark', column: '50-50' },
      { variant: 'left-image', type: 'dark', column: '3-2' },
      { variant: 'left-image', type: 'dark', column: '50-50' },
      { variant: 'left-image', type: 'dark', column: '3-2' },
      { variant: 'right-image', type: 'light', column: '50-50' },
      { variant: 'right-image', type: 'light', column: '3-2' },
      { variant: 'right-image', type: 'light', column: '50-50' },
      { variant: 'right-image', type: 'light', column: '3-2' },
    ].forEach((data) => {
      component.variant = data.variant as BillboardComponentVariant;
      component.type = data.type as BillboardComponentType;
      component.column = data.column as BillboardComponentColumn;

      fixture.detectChanges();
      const billboard =
        fixture.debugElement.nativeElement.querySelector('.billboard');

      expect(billboard.classList).toContain(
        `variant--${data.variant}`
      );
      expect(billboard.classList).toContain(
        `type--${data.type}`
      );
      expect(billboard.classList).toContain(
        `column--c${data.column}`
      );
    });
  });
});
