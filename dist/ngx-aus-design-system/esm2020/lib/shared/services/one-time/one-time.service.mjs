import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class OneTimeService {
    constructor(platformId, transferState) {
        this.platformId = platformId;
        this.transferState = transferState;
        this.keys = [];
    }
    makeKey(key) {
        if (!this.keys[key]) {
            let newKey = this.keys[key] ?? makeStateKey('armkd-' + key);
            this.keys[key] = newKey;
            return newKey;
        }
        return this.keys[key];
    }
    oneTime(key) {
        return !this.transferState.hasKey(this.makeKey(key));
    }
    get(key, defaultValue = null) {
        return this.transferState.get(this.makeKey(key), defaultValue);
    }
    set(key, value) {
        this.transferState.set(this.makeKey(key), value);
    }
}
OneTimeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OneTimeService, deps: [{ token: PLATFORM_ID }, { token: i1.TransferState }], target: i0.ɵɵFactoryTarget.Injectable });
OneTimeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OneTimeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OneTimeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i1.TransferState }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXRpbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL3NoYXJlZC9zZXJ2aWNlcy9vbmUtdGltZS9vbmUtdGltZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBMkIsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBS2xGLE1BQU0sT0FBTyxjQUFjO0lBRXpCLFlBQytCLFVBQWtCLEVBQ3ZDLGFBQTRCO1FBRFAsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUg5QixTQUFJLEdBQTJCLEVBQUUsQ0FBQztJQUl0QyxDQUFDO0lBRUwsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxZQUFZLENBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsZUFBbUIsSUFBSTtRQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7OzRHQTFCVSxjQUFjLGtCQUdmLFdBQVc7Z0hBSFYsY0FBYyxjQUZiLE1BQU07NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUlJLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1ha2VTdGF0ZUtleSwgU3RhdGVLZXksIFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9uZVRpbWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBrZXlzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZVxuICApIHsgfVxuXG4gIG1ha2VLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMua2V5c1trZXldKSB7XG4gICAgICBsZXQgbmV3S2V5ID0gdGhpcy5rZXlzW2tleV0gPz8gbWFrZVN0YXRlS2V5PGFueT4oJ2FybWtkLScgKyBrZXkpO1xuICAgICAgdGhpcy5rZXlzW2tleV0gPSBuZXdLZXk7XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XG4gIH1cblxuICBvbmVUaW1lKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnRyYW5zZmVyU3RhdGUuaGFzS2V5KHRoaXMubWFrZUtleShrZXkpKTtcbiAgfVxuICBcbiAgZ2V0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6YW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJTdGF0ZS5nZXQ8YW55Pih0aGlzLm1ha2VLZXkoa2V5KSwgZGVmYXVsdFZhbHVlKTtcbiAgfVxuICBcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgdGhpcy50cmFuc2ZlclN0YXRlLnNldCh0aGlzLm1ha2VLZXkoa2V5KSwgdmFsdWUpO1xuICB9XG59XG4iXX0=