import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnBillboardsComponent } from './two-column-billboards.component';

describe('TwoColumnBillboardsComponent', () => {
  let component: TwoColumnBillboardsComponent;
  let fixture: ComponentFixture<TwoColumnBillboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnBillboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnBillboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
