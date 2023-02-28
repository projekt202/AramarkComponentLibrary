import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthImageCardComponent } from './fullwidth-image-card.component';

describe('FullwidthImageCardComponent', () => {
  let component: FullwidthImageCardComponent;
  let fixture: ComponentFixture<FullwidthImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullwidthImageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullwidthImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
