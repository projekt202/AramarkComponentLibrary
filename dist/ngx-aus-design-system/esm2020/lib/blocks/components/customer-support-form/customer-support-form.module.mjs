import { InputComponent } from "./../../../shared/components/input/input.component";
import { NgxMaskModule } from "ngx-mask";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { HttpClientModule } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "./../../../shared/components/dropdown/dropdown.module";
import { CheckboxModule } from "./../../../shared/components/checkbox/checkbox.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { CustomerSupportFormComponent } from "./customer-support-form.component";
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class CustomerSupportFormModule {
}
CustomerSupportFormModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomerSupportFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CustomerSupportFormModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CustomerSupportFormModule, declarations: [CustomerSupportFormComponent], imports: [CommonModule,
        /* TypographyModule,
        SanitizePipeModule, */
        InputComponent,
        IconModule,
        ButtonModule,
        CheckboxModule,
        DropdownModule,
        FormsModule,
        NgSelectModule,
        HttpClientModule,
        GoogleTagManagerModule, i1.NgxMaskModule], exports: [CustomerSupportFormComponent] });
CustomerSupportFormModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomerSupportFormModule, imports: [CommonModule,
        /* TypographyModule,
        SanitizePipeModule, */
        InputComponent,
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
                        /* TypographyModule,
                        SanitizePipeModule, */
                        InputComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc3VwcG9ydC1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2N1c3RvbWVyLXN1cHBvcnQtZm9ybS9jdXN0b21lci1zdXBwb3J0LWZvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRy9FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFzQmpGLE1BQU0sT0FBTyx5QkFBeUI7O3VIQUF6Qix5QkFBeUI7d0hBQXpCLHlCQUF5QixpQkFuQnJCLDRCQUE0QixhQUV6QyxZQUFZO1FBQ1o7OEJBQ3NCO1FBQ3RCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsc0JBQXNCLCtCQUlkLDRCQUE0Qjt3SEFFM0IseUJBQXlCLFlBakJsQyxZQUFZO1FBQ1o7OEJBQ3NCO1FBQ3RCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7NEZBS2QseUJBQXlCO2tCQXBCckMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDNUMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1o7OENBQ3NCO3dCQUN0QixjQUFjO3dCQUNkLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixhQUFhLENBQUMsT0FBTyxFQUFFO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gXCJuZ3gtbWFza1wiO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlck1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWdvb2dsZS10YWctbWFuYWdlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tIFwiQG5nLXNlbGVjdC9uZy1zZWxlY3RcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5tb2R1bGVcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBJbnB1dE1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IEN1c3RvbWVyU3VwcG9ydEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b21lci1zdXBwb3J0LWZvcm0uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0N1c3RvbWVyU3VwcG9ydEZvcm1Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIC8qIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLCAqL1xuICAgIElucHV0Q29tcG9uZW50LFxuICAgIEljb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgR29vZ2xlVGFnTWFuYWdlck1vZHVsZSxcbiAgICBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0N1c3RvbWVyU3VwcG9ydEZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRGb3JtTW9kdWxlIHt9XG4iXX0=