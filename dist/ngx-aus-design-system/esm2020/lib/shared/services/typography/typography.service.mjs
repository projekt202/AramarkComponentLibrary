import { Injectable, SecurityContext } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class TypographyService {
    constructor(ds) {
        this.ds = ds;
    }
    setText(element, selector, value) {
        const node = element.querySelector(selector);
        if (node) {
            node.innerHTML = this.ds.sanitize(SecurityContext.HTML, value);
        }
    }
}
TypographyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TypographyService, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable });
TypographyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TypographyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TypographyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvc2hhcmVkL3NlcnZpY2VzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFvQixFQUFnQjtRQUFoQixPQUFFLEdBQUYsRUFBRSxDQUFjO0lBQUcsQ0FBQztJQUV4QyxPQUFPLENBQ0wsT0FBeUMsRUFDekMsUUFBZ0IsRUFDaEIsS0FBYTtRQUViLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDOzsrR0FaVSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUZoQixNQUFNOzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVHlwb2dyYXBoeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRzOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgc2V0VGV4dChcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmPGFueT5bJ25hdGl2ZUVsZW1lbnQnXSxcbiAgICBzZWxlY3Rvcjogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gdGhpcy5kcy5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19