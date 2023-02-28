import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardCarouselComponent } from './billboard-carousel.component';

describe('BillboardCarouselComponent', () => {
  let component: BillboardCarouselComponent;
  let fixture: ComponentFixture<BillboardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillboardCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillboardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
