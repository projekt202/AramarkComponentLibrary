import { Array2StringPipeModule } from "./../../pipes/array2string/array2string.module";
import { SanitizePipeModule } from "./../../pipes/sanitize/sanitize.module";
import { TypographyModule } from "./../typography/typography.module";
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
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule,
        NgxSmoothScrollModule,
        RouterModule,
        IconModule,
        TypographyModule,
        SanitizePipeModule,
        Array2StringPipeModule], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ButtonModule, imports: [CommonModule,
        NgxSmoothScrollModule,
        RouterModule,
        IconModule,
        TypographyModule,
        SanitizePipeModule,
        Array2StringPipeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    imports: [
                        CommonModule,
                        NgxSmoothScrollModule,
                        RouterModule,
                        IconModule,
                        TypographyModule,
                        SanitizePipeModule,
                        Array2StringPipeModule,
                    ],
                    providers: [],
                    exports: [ButtonComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQWdCckQsTUFBTSxPQUFPLFlBQVk7OzBHQUFaLFlBQVk7MkdBQVosWUFBWSxpQkFiUixlQUFlLGFBRTVCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHNCQUFzQixhQUdkLGVBQWU7MkdBRWQsWUFBWSxZQVhyQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixzQkFBc0I7NEZBS2IsWUFBWTtrQkFkeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnJheTJTdHJpbmdQaXBlTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vcGlwZXMvYXJyYXkyc3RyaW5nL2FycmF5MnN0cmluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFNhbml0aXplUGlwZU1vZHVsZSB9IGZyb20gXCIuLy4uLy4uL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5neFNtb290aFNjcm9sbE1vZHVsZSB9IGZyb20gXCJAYm9hdHpha28vbmd4LXNtb290aC1zY3JvbGxcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi4vaWNvbi9pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYnV0dG9uLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5neFNtb290aFNjcm9sbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBBcnJheTJTdHJpbmdQaXBlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbQnV0dG9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kdWxlIHt9XG4iXX0=