import { NgxMaskModule } from "ngx-mask";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { HttpClientModule } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "./../../../shared/components/dropdown/dropdown.module";
import { CheckboxModule } from "./../../../shared/components/checkbox/checkbox.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { InputModule } from "./../../../shared/components/input/input.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { CustomerSupportFormComponent } from "./customer-support-form.component";
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class CustomerSupportFormModule {
}
CustomerSupportFormModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomerSupportFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CustomerSupportFormModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CustomerSupportFormModule, declarations: [CustomerSupportFormComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        InputModule,
        IconModule,
        ButtonModule,
        CheckboxModule,
        DropdownModule,
        FormsModule,
        NgSelectModule,
        HttpClientModule,
        GoogleTagManagerModule, i1.NgxMaskModule], exports: [CustomerSupportFormComponent] });
CustomerSupportFormModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomerSupportFormModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        InputModule,
        IconModule,
        ButtonModule,
        CheckboxModule,
        DropdownModule,
        FormsModule,
        NgSelectModule,
        HttpClientModule,
        GoogleTagManagerModule,
        NgxMaskModule.forRoot()] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomerSupportFormModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CustomerSupportFormComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        InputModule,
                        IconModule,
                        ButtonModule,
                        CheckboxModule,
                        DropdownModule,
                        FormsModule,
                        NgSelectModule,
                        HttpClientModule,
                        GoogleTagManagerModule,
                        NgxMaskModule.forRoot(),
                    ],
                    providers: [],
                    exports: [CustomerSupportFormComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc3VwcG9ydC1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2N1c3RvbWVyLXN1cHBvcnQtZm9ybS9jdXN0b21lci1zdXBwb3J0LWZvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFzQmpGLE1BQU0sT0FBTyx5QkFBeUI7O3VIQUF6Qix5QkFBeUI7d0hBQXpCLHlCQUF5QixpQkFuQnJCLDRCQUE0QixhQUV6QyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtRQUNWLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLFdBQVc7UUFDWCxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHNCQUFzQiwrQkFJZCw0QkFBNEI7d0hBRTNCLHlCQUF5QixZQWpCbEMsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFVBQVU7UUFDVixZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7UUFDZCxXQUFXO1FBQ1gsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsYUFBYSxDQUFDLE9BQU8sRUFBRTs0RkFLZCx5QkFBeUI7a0JBcEJyQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUM1QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsYUFBYSxDQUFDLE9BQU8sRUFBRTtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gXCJuZ3gtbWFza1wiO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlck1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWdvb2dsZS10YWctbWFuYWdlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tIFwiQG5nLXNlbGVjdC9uZy1zZWxlY3RcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5tb2R1bGVcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBJbnB1dE1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IEN1c3RvbWVyU3VwcG9ydEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b21lci1zdXBwb3J0LWZvcm0uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0N1c3RvbWVyU3VwcG9ydEZvcm1Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIElucHV0TW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgR29vZ2xlVGFnTWFuYWdlck1vZHVsZSxcbiAgICBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0N1c3RvbWVyU3VwcG9ydEZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRGb3JtTW9kdWxlIHt9XG4iXX0=