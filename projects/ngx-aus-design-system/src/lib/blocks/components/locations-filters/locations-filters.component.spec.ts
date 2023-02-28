import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsFiltersComponent } from './locations-filters.component';

describe('LocationsFiltersComponent', () => {
  let component: LocationsFiltersComponent;
  let fixture: ComponentFixture<LocationsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
