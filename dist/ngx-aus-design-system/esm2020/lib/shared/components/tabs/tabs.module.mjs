import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { GtmIdPipeModule } from "../../pipes/gtm/gtm-id.module";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { TabsComponent } from "./tabs.component";
import * as i0 from "@angular/core";
export class TabsModule {
}
TabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TabsModule, declarations: [TabsComponent], imports: [CommonModule,
        LazyLoadImageModule,
        TypographyModule,
        GtmIdPipeModule,
        IconModule], exports: [TabsComponent] });
TabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabsModule, imports: [CommonModule,
        LazyLoadImageModule,
        TypographyModule,
        GtmIdPipeModule,
        IconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TabsComponent],
                    imports: [
                        CommonModule,
                        LazyLoadImageModule,
                        TypographyModule,
                        GtmIdPipeModule,
                        IconModule,
                    ],
                    providers: [],
                    exports: [TabsComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy90YWJzL3RhYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQWNqRCxNQUFNLE9BQU8sVUFBVTs7d0dBQVYsVUFBVTt5R0FBVixVQUFVLGlCQVhOLGFBQWEsYUFFMUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFVBQVUsYUFHRixhQUFhO3lHQUVaLFVBQVUsWUFUbkIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFVBQVU7NEZBS0QsVUFBVTtrQkFadEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzdCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLFVBQVU7cUJBQ1g7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tIFwibmctbGF6eWxvYWQtaW1hZ2VcIjtcbmltcG9ydCB7IEd0bUlkUGlwZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9waXBlcy9ndG0vZ3RtLWlkLm1vZHVsZVwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLi9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSBcIi4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUYWJzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgR3RtSWRQaXBlTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtUYWJzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7fVxuIl19