import { InputComponent } from "./../../../shared/components/input/input.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropdownModule } from "./../../../shared/components/dropdown/dropdown.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationsFiltersComponent } from "./locations-filters.component";
import { NgxMaskModule } from "ngx-mask";
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class LocationsFiltersModule {
}
LocationsFiltersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationsFiltersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LocationsFiltersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: LocationsFiltersModule, declarations: [LocationsFiltersComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        IconModule,
        InputComponent,
        DropdownModule,
        FormsModule,
        NgSelectModule, i1.NgxMaskModule], exports: [LocationsFiltersComponent] });
LocationsFiltersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationsFiltersModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        IconModule,
        InputComponent,
        DropdownModule,
        FormsModule,
        NgSelectModule,
        NgxMaskModule.forRoot()] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationsFiltersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LocationsFiltersComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        ButtonModule,
                        IconModule,
                        InputComponent,
                        DropdownModule,
                        FormsModule,
                        NgSelectModule,
                        NgxMaskModule.forRoot(),
                    ],
                    providers: [],
                    exports: [LocationsFiltersComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25zLWZpbHRlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvYmxvY2tzL2NvbXBvbmVudHMvbG9jYXRpb25zLWZpbHRlcnMvbG9jYXRpb25zLWZpbHRlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUV2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQW1CekMsTUFBTSxPQUFPLHNCQUFzQjs7b0hBQXRCLHNCQUFzQjtxSEFBdEIsc0JBQXNCLGlCQWhCbEIseUJBQXlCLGFBRXRDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVO1FBQ1YsY0FBYztRQUNkLGNBQWM7UUFDZCxXQUFXO1FBQ1gsY0FBYywrQkFJTix5QkFBeUI7cUhBRXhCLHNCQUFzQixZQWQvQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osVUFBVTtRQUNWLGNBQWM7UUFDZCxjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7UUFDZCxhQUFhLENBQUMsT0FBTyxFQUFFOzRGQUtkLHNCQUFzQjtrQkFqQmxDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxhQUFhLENBQUMsT0FBTyxFQUFFO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tIFwiQG5nLXNlbGVjdC9uZy1zZWxlY3RcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlXCI7XG5pbXBvcnQgeyBJbnB1dE1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9jYXRpb25zRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL2xvY2F0aW9ucy1maWx0ZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gXCJuZ3gtbWFza1wiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMb2NhdGlvbnNGaWx0ZXJzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBJbnB1dENvbXBvbmVudCxcbiAgICBEcm9wZG93bk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0xvY2F0aW9uc0ZpbHRlcnNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbnNGaWx0ZXJzTW9kdWxlIHt9XG4iXX0=