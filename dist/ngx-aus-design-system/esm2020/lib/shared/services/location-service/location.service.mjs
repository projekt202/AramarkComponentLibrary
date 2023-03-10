import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../platform/platform.service";
export class LocationService {
    constructor(http, platform) {
        this.http = http;
        this.platform = platform;
    }
    getLocation(cb) {
        if (this.platform.isBrowser()) {
            navigator.geolocation.getCurrentPosition((pos) => {
                cb({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            });
        }
    }
    reverseGeocode(lat, lng) {
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBWaX8u3DnZGSFBO1DoKMP3cRHzgQXYWpk`);
    }
    getStateShortForm(state) {
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
LocationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationService, deps: [{ token: i1.HttpClient }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
LocationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.PlatformService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL3NoYXJlZC9zZXJ2aWNlcy9sb2NhdGlvbi1zZXJ2aWNlL2xvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU0zQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFvQixJQUFnQixFQUFVLFFBQXlCO1FBQW5ELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFHLENBQUM7SUFFM0UsV0FBVyxDQUFDLEVBQXdEO1FBQ2xFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM3QixTQUFTLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQy9DLEVBQUUsQ0FBQztvQkFDRCxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO29CQUN4QixHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTO2lCQUMxQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFXLEVBQUUsR0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQiw0REFBNEQsR0FBRyxJQUFJLEdBQUcsOENBQThDLENBQ3JILENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixNQUFNLFNBQVMsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxJQUFJO1lBQ1osZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsSUFBSTtZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtZQUNkLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsZ0NBQWdDLEVBQUUsSUFBSTtZQUN0QyxPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUk7WUFDWCxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsYUFBYSxFQUFFLElBQUk7WUFDbkIsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUUsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osZUFBZSxFQUFFLElBQUk7WUFDckIsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixjQUFjLEVBQUUsSUFBSTtZQUNwQiwwQkFBMEIsRUFBRSxJQUFJO1lBQ2hDLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxJQUFJO1lBQ1gsWUFBWSxFQUFFLElBQUk7WUFDbEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsY0FBYyxFQUFFLElBQUk7WUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixjQUFjLEVBQUUsSUFBSTtZQUNwQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsSUFBSTtZQUNoQixlQUFlLEVBQUUsSUFBSTtZQUNyQixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztRQUNGLGFBQWE7UUFDYixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7NkdBcEZVLGVBQWU7aUhBQWYsZUFBZSxjQUZkLE1BQU07NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vcGxhdGZvcm0vcGxhdGZvcm0uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtU2VydmljZSkge31cblxuICBnZXRMb2NhdGlvbihjYjogKHsgbGF0LCBsbmcgfTogeyBsYXQ6IG51bWJlcjsgbG5nOiBudW1iZXIgfSkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3NlcigpKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3MpID0+IHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgIGxhdDogcG9zLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvcy5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldmVyc2VHZW9jb2RlKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPSR7bGF0fSwke2xuZ30ma2V5PUFJemFTeUJXYVg4dTNEblpHU0ZCTzFEb0tNUDNjUkh6Z1FYWVdwa2BcbiAgICApO1xuICB9XG5cbiAgZ2V0U3RhdGVTaG9ydEZvcm0oc3RhdGU6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlc01hcCA9IHtcbiAgICAgIEFsYWJhbWE6ICdBTCcsXG4gICAgICBBbGFza2E6ICdBSycsXG4gICAgICAnQW1lcmljYW4gU2Ftb2EnOiAnQVMnLFxuICAgICAgQXJpem9uYTogJ0FaJyxcbiAgICAgIEFya2Fuc2FzOiAnQVInLFxuICAgICAgQ2FsaWZvcm5pYTogJ0NBJyxcbiAgICAgIENvbG9yYWRvOiAnQ08nLFxuICAgICAgQ29ubmVjdGljdXQ6ICdDVCcsXG4gICAgICBEZWxhd2FyZTogJ0RFJyxcbiAgICAgICdEaXN0cmljdCBPZiBDb2x1bWJpYSc6ICdEQycsXG4gICAgICAnRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhJzogJ0ZNJyxcbiAgICAgIEZsb3JpZGE6ICdGTCcsXG4gICAgICBHZW9yZ2lhOiAnR0EnLFxuICAgICAgR3VhbTogJ0dVJyxcbiAgICAgIEhhd2FpaTogJ0hJJyxcbiAgICAgIElkYWhvOiAnSUQnLFxuICAgICAgSWxsaW5vaXM6ICdJTCcsXG4gICAgICBJbmRpYW5hOiAnSU4nLFxuICAgICAgSW93YTogJ0lBJyxcbiAgICAgIEthbnNhczogJ0tTJyxcbiAgICAgIEtlbnR1Y2t5OiAnS1knLFxuICAgICAgTG91aXNpYW5hOiAnTEEnLFxuICAgICAgTWFpbmU6ICdNRScsXG4gICAgICAnTWFyc2hhbGwgSXNsYW5kcyc6ICdNSCcsXG4gICAgICBNYXJ5bGFuZDogJ01EJyxcbiAgICAgIE1hc3NhY2h1c2V0dHM6ICdNQScsXG4gICAgICBNaWNoaWdhbjogJ01JJyxcbiAgICAgIE1pbm5lc290YTogJ01OJyxcbiAgICAgIE1pc3Npc3NpcHBpOiAnTVMnLFxuICAgICAgTWlzc291cmk6ICdNTycsXG4gICAgICBNb250YW5hOiAnTVQnLFxuICAgICAgTmVicmFza2E6ICdORScsXG4gICAgICBOZXZhZGE6ICdOVicsXG4gICAgICAnTmV3IEhhbXBzaGlyZSc6ICdOSCcsXG4gICAgICAnTmV3IEplcnNleSc6ICdOSicsXG4gICAgICAnTmV3IE1leGljbyc6ICdOTScsXG4gICAgICAnTmV3IFlvcmsnOiAnTlknLFxuICAgICAgJ05vcnRoIENhcm9saW5hJzogJ05DJyxcbiAgICAgICdOb3J0aCBEYWtvdGEnOiAnTkQnLFxuICAgICAgJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcyc6ICdNUCcsXG4gICAgICBPaGlvOiAnT0gnLFxuICAgICAgT2tsYWhvbWE6ICdPSycsXG4gICAgICBPcmVnb246ICdPUicsXG4gICAgICBQYWxhdTogJ1BXJyxcbiAgICAgIFBlbm5zeWx2YW5pYTogJ1BBJyxcbiAgICAgICdQdWVydG8gUmljbyc6ICdQUicsXG4gICAgICAnUmhvZGUgSXNsYW5kJzogJ1JJJyxcbiAgICAgICdTb3V0aCBDYXJvbGluYSc6ICdTQycsXG4gICAgICAnU291dGggRGFrb3RhJzogJ1NEJyxcbiAgICAgIFRlbm5lc3NlZTogJ1ROJyxcbiAgICAgIFRleGFzOiAnVFgnLFxuICAgICAgVXRhaDogJ1VUJyxcbiAgICAgIFZlcm1vbnQ6ICdWVCcsXG4gICAgICAnVmlyZ2luIElzbGFuZHMnOiAnVkknLFxuICAgICAgVmlyZ2luaWE6ICdWQScsXG4gICAgICBXYXNoaW5ndG9uOiAnV0EnLFxuICAgICAgJ1dlc3QgVmlyZ2luaWEnOiAnV1YnLFxuICAgICAgV2lzY29uc2luOiAnV0knLFxuICAgICAgV3lvbWluZzogJ1dZJyxcbiAgICB9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gc3RhdGVzTWFwW3N0YXRlXSB8fCBzdGF0ZTtcbiAgfVxufVxuIl19