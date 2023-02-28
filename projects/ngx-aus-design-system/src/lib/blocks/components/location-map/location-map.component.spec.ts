import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';

import { LocationMapComponent } from './location-map.component';

describe('LocationMapComponent', () => {
  let component: LocationMapComponent;
  let fixture: ComponentFixture<LocationMapComponent>;

  const mock = {
    name: 'Aramark',
    address: '110 Glenn Street',
    city: 'Lawrence, MA',
    zip: '01843',
    phone: '(978) 965-4423',
    hours: '9am - 5pm Daily',
    services: 'Delivery',
    img: 'https://api.lorem.space/image?w=1366&h=470',
    coords: {
      lat: 3.37251,
      lng: -76.523625,
    },
    url: 'https://www.google.com',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationMapComponent],
      imports: [GoogleMapsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationMapComponent);
    component = fixture.componentInstance;
    component.locations = [mock, mock];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('creates mobile version', () => {
    spyOn(component, 'getWindowWidth').and.returnValue(500);
    component.variant = 'single';
    component.centerSinglePin();
    expect(component).toBeTruthy();
  });

  it('updates active location card', () => {
    component.variant = 'multiple';
    fixture.detectChanges();
    expect(component.activeIdx).toBe(0);
    const locationCards =
      fixture.debugElement.nativeElement.querySelectorAll('li');
    expect(locationCards.length).toBe(2);
    locationCards[1].click();
    expect(component.activeIdx).toBe(1);
  });

  it('should not open or update the active location card if variant is "single"', () => {
    component.variant = 'single';
    expect(component.activeIdx).toBe(0);
    expect(component.isOpen).toBeFalsy();
    component.openInfo(1);
    expect(component.activeIdx).toBe(0);
    expect(component.isOpen).toBeFalsy();
  });

  it('should close popups and locations list if not initially set to be open', () => {
    spyOn(component, 'closePopups');
    component.variant = 'multiple';
    component.isInitiallyOpen = false;
    component.openInfo(1);
    expect(component.isOpen).toBeTrue();
    component.onClickMap();
    expect(component.isOpen).toBeFalse();
    expect(component.closePopups).toHaveBeenCalled();
  });
});
