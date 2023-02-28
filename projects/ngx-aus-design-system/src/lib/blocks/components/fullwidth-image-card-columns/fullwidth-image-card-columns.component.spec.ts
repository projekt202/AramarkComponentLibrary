import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthImageCardColumnsComponent } from './fullwidth-image-card-columns.component';

describe('FullwidthImageCardColumnsComponent', () => {
  let component: FullwidthImageCardColumnsComponent;
  let fixture: ComponentFixture<FullwidthImageCardColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullwidthImageCardColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullwidthImageCardColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
