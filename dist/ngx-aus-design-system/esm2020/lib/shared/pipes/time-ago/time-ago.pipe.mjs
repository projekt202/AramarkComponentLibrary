import { Pipe } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as i0 from "@angular/core";
export class TimeAgoPipe {
    transform(date) {
        dayjs.extend(relativeTime);
        return dayjs(date).fromNow();
    }
}
TimeAgoPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TimeAgoPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TimeAgoPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TimeAgoPipe, name: "timeAgo" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TimeAgoPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'timeAgo',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL3NoYXJlZC9waXBlcy90aW1lLWFnby90aW1lLWFnby5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sS0FBSyxZQUFZLE1BQU0sMkJBQTJCLENBQUM7O0FBSzFELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7eUdBSlUsV0FBVzt1R0FBWCxXQUFXOzRGQUFYLFdBQVc7a0JBSHZCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgKiBhcyByZWxhdGl2ZVRpbWUgZnJvbSAnZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVBZ28nLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lQWdvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBkYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG4iXX0=