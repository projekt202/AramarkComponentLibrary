import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { IconModule } from "../icon/icon.module";
import { ButtonComponent } from "./button.component";
import * as i0 from "@angular/core";
export class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule, NgxSmoothScrollModule, RouterModule, IconModule], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ButtonModule, imports: [CommonModule, NgxSmoothScrollModule, RouterModule, IconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    imports: [CommonModule, NgxSmoothScrollModule, RouterModule, IconModule],
                    providers: [],
                    exports: [ButtonComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQVFyRCxNQUFNLE9BQU8sWUFBWTs7MEdBQVosWUFBWTsyR0FBWixZQUFZLGlCQUxSLGVBQWUsYUFDcEIsWUFBWSxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxVQUFVLGFBRTdELGVBQWU7MkdBRWQsWUFBWSxZQUpiLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsVUFBVTs0RkFJNUQsWUFBWTtrQkFOeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDO29CQUN4RSxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmd4U21vb3RoU2Nyb2xsTW9kdWxlIH0gZnJvbSBcIkBib2F0emFrby9uZ3gtc21vb3RoLXNjcm9sbFwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLi9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5neFNtb290aFNjcm9sbE1vZHVsZSwgUm91dGVyTW9kdWxlLCBJY29uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0J1dHRvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7fVxuIl19