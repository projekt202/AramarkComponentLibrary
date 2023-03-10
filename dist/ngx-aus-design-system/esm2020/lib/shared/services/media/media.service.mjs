import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../browser/browser.service";
export class MediaService {
    constructor(bs) {
        this.bs = bs;
        this.window = this.bs.getWindow();
    }
    getResponsiveImage(images) {
        const windowWidth = this.window?.innerWidth || 0;
        if (windowWidth >= 2560 && images['4k_background']) {
            return images['4k_background'];
        }
        if (windowWidth >= 1920 && images.hd_background) {
            return images.hd_background;
        }
        if (windowWidth >= 1366 && images.large_desktop_background) {
            return images.large_desktop_background;
        }
        if (windowWidth >= 1024 && images.desktop_background) {
            return images.desktop_background;
        }
        if (windowWidth >= 768 && images.tablet_background) {
            return images.tablet_background;
        }
        if (windowWidth >= 425 && images.mobile_background) {
            return images.mobile_background;
        }
        return images.default_background;
    }
}
MediaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MediaService, deps: [{ token: i1.BrowserService }], target: i0.ɵɵFactoryTarget.Injectable });
MediaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MediaService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MediaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.BrowserService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL3NoYXJlZC9zZXJ2aWNlcy9tZWRpYS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVEzQyxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFvQixFQUFrQjtRQUFsQixPQUFFLEdBQUYsRUFBRSxDQUFnQjtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQXdCO1FBQ3pDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxXQUFXLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDL0MsT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxXQUFXLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTtZQUMxRCxPQUFPLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QztRQUNELElBQUksV0FBVyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDcEQsT0FBTyxNQUFNLENBQUMsa0JBQWtCLENBQUM7U0FDbEM7UUFDRCxJQUFJLFdBQVcsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ2xELE9BQU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxXQUFXLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNsRCxPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztTQUNqQztRQUNELE9BQU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7OzBHQTVCVSxZQUFZOzhHQUFaLFlBQVksY0FGWCxNQUFNOzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3NlclNlcnZpY2UgfSBmcm9tICcuLi9icm93c2VyL2Jyb3dzZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVJbWFnZXMgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIHdpbmRvdz86IFdpbmRvdyB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiczogQnJvd3NlclNlcnZpY2UpIHtcbiAgICB0aGlzLndpbmRvdyA9IHRoaXMuYnMuZ2V0V2luZG93KCk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlSW1hZ2UoaW1hZ2VzOiBSZXNwb25zaXZlSW1hZ2VzKTogc3RyaW5nIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHRoaXMud2luZG93Py5pbm5lcldpZHRoIHx8IDA7XG4gICAgaWYgKHdpbmRvd1dpZHRoID49IDI1NjAgJiYgaW1hZ2VzWyc0a19iYWNrZ3JvdW5kJ10pIHtcbiAgICAgIHJldHVybiBpbWFnZXNbJzRrX2JhY2tncm91bmQnXTtcbiAgICB9XG4gICAgaWYgKHdpbmRvd1dpZHRoID49IDE5MjAgJiYgaW1hZ2VzLmhkX2JhY2tncm91bmQpIHtcbiAgICAgIHJldHVybiBpbWFnZXMuaGRfYmFja2dyb3VuZDtcbiAgICB9XG4gICAgaWYgKHdpbmRvd1dpZHRoID49IDEzNjYgJiYgaW1hZ2VzLmxhcmdlX2Rlc2t0b3BfYmFja2dyb3VuZCkge1xuICAgICAgcmV0dXJuIGltYWdlcy5sYXJnZV9kZXNrdG9wX2JhY2tncm91bmQ7XG4gICAgfVxuICAgIGlmICh3aW5kb3dXaWR0aCA+PSAxMDI0ICYmIGltYWdlcy5kZXNrdG9wX2JhY2tncm91bmQpIHtcbiAgICAgIHJldHVybiBpbWFnZXMuZGVza3RvcF9iYWNrZ3JvdW5kO1xuICAgIH1cbiAgICBpZiAod2luZG93V2lkdGggPj0gNzY4ICYmIGltYWdlcy50YWJsZXRfYmFja2dyb3VuZCkge1xuICAgICAgcmV0dXJuIGltYWdlcy50YWJsZXRfYmFja2dyb3VuZDtcbiAgICB9XG4gICAgaWYgKHdpbmRvd1dpZHRoID49IDQyNSAmJiBpbWFnZXMubW9iaWxlX2JhY2tncm91bmQpIHtcbiAgICAgIHJldHVybiBpbWFnZXMubW9iaWxlX2JhY2tncm91bmQ7XG4gICAgfVxuICAgIHJldHVybiBpbWFnZXMuZGVmYXVsdF9iYWNrZ3JvdW5kO1xuICB9XG59XG4iXX0=