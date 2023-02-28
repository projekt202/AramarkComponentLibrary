import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlatformService } from '../platform/platform.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient, private platform: PlatformService) {}

  getLocation(cb: ({ lat, lng }: { lat: number; lng: number }) => void) {
    if (this.platform.isBrowser()) {
      navigator.geolocation.getCurrentPosition((pos) => {
        cb({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  }

  reverseGeocode(lat: number, lng: number) {
    return this.http.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBWaX8u3DnZGSFBO1DoKMP3cRHzgQXYWpk`
    );
  }

  getStateShortForm(state: string) {
    const statesMap = {
      Alabama: 'AL',
      Alaska: 'AK',
      'American Samoa': 'AS',
      Arizona: 'AZ',
      Arkansas: 'AR',
      California: 'CA',
      Colorado: 'CO',
      Connecticut: 'CT',
      Delaware: 'DE',
      'District Of Columbia': 'DC',
      'Federated States Of Micronesia': 'FM',
      Florida: 'FL',
      Georgia: 'GA',
      Guam: 'GU',
      Hawaii: 'HI',
      Idaho: 'ID',
      Illinois: 'IL',
      Indiana: 'IN',
      Iowa: 'IA',
      Kansas: 'KS',
      Kentucky: 'KY',
      Louisiana: 'LA',
      Maine: 'ME',
      'Marshall Islands': 'MH',
      Maryland: 'MD',
      Massachusetts: 'MA',
      Michigan: 'MI',
      Minnesota: 'MN',
      Mississippi: 'MS',
      Missouri: 'MO',
      Montana: 'MT',
      Nebraska: 'NE',
      Nevada: 'NV',
      'New Hampshire': 'NH',
      'New Jersey': 'NJ',
      'New Mexico': 'NM',
      'New York': 'NY',
      'North Carolina': 'NC',
      'North Dakota': 'ND',
      'Northern Mariana Islands': 'MP',
      Ohio: 'OH',
      Oklahoma: 'OK',
      Oregon: 'OR',
      Palau: 'PW',
      Pennsylvania: 'PA',
      'Puerto Rico': 'PR',
      'Rhode Island': 'RI',
      'South Carolina': 'SC',
      'South Dakota': 'SD',
      Tennessee: 'TN',
      Texas: 'TX',
      Utah: 'UT',
      Vermont: 'VT',
      'Virgin Islands': 'VI',
      Virginia: 'VA',
      Washington: 'WA',
      'West Virginia': 'WV',
      Wisconsin: 'WI',
      Wyoming: 'WY',
    };
    // @ts-ignore
    return statesMap[state] || state;
  }
}
