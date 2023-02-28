import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationServiceAreasComponent } from './location-service-areas.component';

describe('LocationServiceAreasComponent', () => {
  let component: LocationServiceAreasComponent;
  let fixture: ComponentFixture<LocationServiceAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationServiceAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationServiceAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
