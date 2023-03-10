import { GoogleMapsModule } from "@angular/google-maps";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationMapComponent } from "./location-map.component";
import * as i0 from "@angular/core";
export class LocationMapModule {
}
LocationMapModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationMapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LocationMapModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: LocationMapModule, declarations: [LocationMapComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        GoogleMapsModule,
        LazyLoadImageModule], exports: [LocationMapComponent] });
LocationMapModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationMapModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        GoogleMapsModule,
        LazyLoadImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationMapModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LocationMapComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        ButtonModule,
                        GoogleMapsModule,
                        LazyLoadImageModule,
                    ],
                    providers: [],
                    exports: [LocationMapComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tbWFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2xvY2F0aW9uLW1hcC9sb2NhdGlvbi1tYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBZ0JoRSxNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBYmIsb0JBQW9CLGFBRWpDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQixhQUdYLG9CQUFvQjtnSEFFbkIsaUJBQWlCLFlBWDFCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjs0RkFLVixpQkFBaUI7a0JBZDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZU1hcHNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlTW9kdWxlIH0gZnJvbSBcIm5nLWxhenlsb2FkLWltYWdlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9jYXRpb25NYXBDb21wb25lbnQgfSBmcm9tIFwiLi9sb2NhdGlvbi1tYXAuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xvY2F0aW9uTWFwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBHb29nbGVNYXBzTW9kdWxlLFxuICAgIExhenlMb2FkSW1hZ2VNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtMb2NhdGlvbk1hcENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uTWFwTW9kdWxlIHt9XG4iXX0=