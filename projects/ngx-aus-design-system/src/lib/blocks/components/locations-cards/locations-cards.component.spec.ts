import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsCardsComponent } from './locations-cards.component';

describe('LocationsCardsComponent', () => {
  let component: LocationsCardsComponent;
  let fixture: ComponentFixture<LocationsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
