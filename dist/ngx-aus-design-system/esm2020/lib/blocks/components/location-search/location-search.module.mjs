import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocationMapModule } from "./../location-map/location-map.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { DropdownModule } from "./../../../shared/components/dropdown/dropdown.module";
import { InputModule } from "./../../../shared/components/input/input.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationSearchComponent } from "./location-search.component";
import { LocationsFiltersModule } from "../locations-filters/locations-filters.module";
import * as i0 from "@angular/core";
export class LocationSearchModule {
}
LocationSearchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LocationSearchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: LocationSearchModule, declarations: [LocationSearchComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        InputModule,
        DropdownModule,
        ButtonModule,
        IconModule,
        LocationMapModule,
        LocationsFiltersModule,
        FormsModule,
        NgSelectModule,
        GraphQLModule,
        HttpClientModule], exports: [LocationSearchComponent] });
LocationSearchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationSearchModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        InputModule,
        DropdownModule,
        ButtonModule,
        IconModule,
        LocationMapModule,
        LocationsFiltersModule,
        FormsModule,
        NgSelectModule,
        GraphQLModule,
        HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LocationSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LocationSearchComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        InputModule,
                        DropdownModule,
                        ButtonModule,
                        IconModule,
                        LocationMapModule,
                        LocationsFiltersModule,
                        FormsModule,
                        NgSelectModule,
                        GraphQLModule,
                        HttpClientModule,
                    ],
                    providers: [],
                    exports: [LocationSearchComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tc2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2xvY2F0aW9uLXNlYXJjaC9sb2NhdGlvbi1zZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFzQnZGLE1BQU0sT0FBTyxvQkFBb0I7O2tIQUFwQixvQkFBb0I7bUhBQXBCLG9CQUFvQixpQkFuQmhCLHVCQUF1QixhQUVwQyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsY0FBYztRQUNkLFlBQVk7UUFDWixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0IsYUFHUix1QkFBdUI7bUhBRXRCLG9CQUFvQixZQWpCN0IsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGNBQWM7UUFDZCxZQUFZO1FBQ1osVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZ0JBQWdCOzRGQUtQLG9CQUFvQjtrQkFwQmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0QixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEdyYXBoUUxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vZ3JhcGhxbC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSBcIkBuZy1zZWxlY3Qvbmctc2VsZWN0XCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBMb2NhdGlvbk1hcE1vZHVsZSB9IGZyb20gXCIuLy4uL2xvY2F0aW9uLW1hcC9sb2NhdGlvbi1tYXAubW9kdWxlXCI7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGVcIjtcbmltcG9ydCB7IElucHV0TW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQubW9kdWxlXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IExvY2F0aW9uU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9jYXRpb24tc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9jYXRpb25zRmlsdGVyc01vZHVsZSB9IGZyb20gXCIuLi9sb2NhdGlvbnMtZmlsdGVycy9sb2NhdGlvbnMtZmlsdGVycy5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTG9jYXRpb25TZWFyY2hDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIElucHV0TW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIExvY2F0aW9uTWFwTW9kdWxlLFxuICAgIExvY2F0aW9uc0ZpbHRlcnNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgR3JhcGhRTE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbTG9jYXRpb25TZWFyY2hDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlYXJjaE1vZHVsZSB7fVxuIl19