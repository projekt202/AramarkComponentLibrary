import { Injectable } from '@angular/core';
import SplitType from 'split-type';
import gsap from 'gsap';
import * as i0 from "@angular/core";
import * as i1 from "../platform/platform.service";
import * as i2 from "../browser/browser.service";
export class AnimationService {
    constructor(ps, bs) {
        this.ps = ps;
        this.bs = bs;
    }
    animTextLines(target, parent) {
        if (this.ps.isBrowser()) {
            // Wait until fonts are loaded to avoid layout shifting
            const doc = this.bs.getDocument();
            doc.fonts.ready.then(() => {
                const parentElem = doc.querySelector(parent);
                parentElem?.classList.remove('anim-loading');
                const text = new SplitType(target, {
                    types: 'lines',
                });
                gsap
                    .timeline()
                    .from(text.lines, {
                    duration: 1,
                    stagger: 0.25,
                    rotateX: -90,
                    rotateY: -10,
                    opacity: 0,
                    y: 50,
                })
                    .then(() => {
                    text.revert();
                });
            });
        }
    }
}
AnimationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AnimationService, deps: [{ token: i1.PlatformService }, { token: i2.BrowserService }], target: i0.ɵɵFactoryTarget.Injectable });
AnimationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AnimationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AnimationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.PlatformService }, { type: i2.BrowserService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9zaGFyZWQvc2VydmljZXMvYW5pbWF0aW9uL2FuaW1hdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxTQUE0QixNQUFNLFlBQVksQ0FBQztBQUN0RCxPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7Ozs7QUFReEIsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixFQUFtQixFQUFVLEVBQWtCO1FBQS9DLE9BQUUsR0FBRixFQUFFLENBQWlCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7SUFBRyxDQUFDO0lBRXZFLGFBQWEsQ0FBQyxNQUFxQixFQUFFLE1BQWM7UUFDakQsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3ZCLHVEQUF1RDtZQUN2RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pDLEtBQUssRUFBRSxPQUFPO2lCQUNmLENBQUMsQ0FBQztnQkFDSCxJQUFJO3FCQUNELFFBQVEsRUFBRTtxQkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDaEIsUUFBUSxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLENBQUMsRUFBRTtvQkFDWixPQUFPLEVBQUUsQ0FBQyxFQUFFO29CQUNaLE9BQU8sRUFBRSxDQUFDO29CQUNWLENBQUMsRUFBRSxFQUFFO2lCQUNOLENBQUM7cUJBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzhHQTVCVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQUZmLE1BQU07NEZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBTcGxpdFR5cGUsIHsgVGFyZ2V0RWxlbWVudCB9IGZyb20gJ3NwbGl0LXR5cGUnO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4uL3BsYXRmb3JtL3BsYXRmb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJvd3NlclNlcnZpY2UgfSBmcm9tICcuLi9icm93c2VyL2Jyb3dzZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwczogUGxhdGZvcm1TZXJ2aWNlLCBwcml2YXRlIGJzOiBCcm93c2VyU2VydmljZSkge31cblxuICBhbmltVGV4dExpbmVzKHRhcmdldDogVGFyZ2V0RWxlbWVudCwgcGFyZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcy5pc0Jyb3dzZXIoKSkge1xuICAgICAgLy8gV2FpdCB1bnRpbCBmb250cyBhcmUgbG9hZGVkIHRvIGF2b2lkIGxheW91dCBzaGlmdGluZ1xuICAgICAgY29uc3QgZG9jID0gdGhpcy5icy5nZXREb2N1bWVudCgpO1xuICAgICAgZG9jLmZvbnRzLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtID0gZG9jLnF1ZXJ5U2VsZWN0b3IocGFyZW50KTtcbiAgICAgICAgcGFyZW50RWxlbT8uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbS1sb2FkaW5nJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldCwge1xuICAgICAgICAgIHR5cGVzOiAnbGluZXMnLFxuICAgICAgICB9KTtcbiAgICAgICAgZ3NhcFxuICAgICAgICAgIC50aW1lbGluZSgpXG4gICAgICAgICAgLmZyb20odGV4dC5saW5lcywge1xuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLjI1LFxuICAgICAgICAgICAgcm90YXRlWDogLTkwLFxuICAgICAgICAgICAgcm90YXRlWTogLTEwLFxuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHk6IDUwLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGV4dC5yZXZlcnQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19