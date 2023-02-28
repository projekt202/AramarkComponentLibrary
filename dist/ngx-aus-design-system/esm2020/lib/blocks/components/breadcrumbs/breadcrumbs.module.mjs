import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { BreadcrumbsComponent } from "./breadcrumbs.component";
import * as i0 from "@angular/core";
export class BreadcrumbsModule {
}
BreadcrumbsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreadcrumbsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbsModule, declarations: [BreadcrumbsComponent], imports: [CommonModule, TypographyModule, SanitizePipeModule, IconModule], exports: [BreadcrumbsComponent] });
BreadcrumbsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbsModule, imports: [CommonModule, TypographyModule, SanitizePipeModule, IconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BreadcrumbsComponent],
                    imports: [CommonModule, TypographyModule, SanitizePipeModule, IconModule],
                    providers: [],
                    exports: [BreadcrumbsComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvYmxvY2tzL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFRL0QsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQUxiLG9CQUFvQixhQUN6QixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxhQUU5RCxvQkFBb0I7Z0hBRW5CLGlCQUFpQixZQUpsQixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsVUFBVTs0RkFJN0QsaUJBQWlCO2tCQU43QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxDQUFDO29CQUN6RSxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IFNhbml0aXplUGlwZU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlXCI7XG5pbXBvcnQgeyBCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gXCIuL2JyZWFkY3J1bWJzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1ic0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFR5cG9ncmFwaHlNb2R1bGUsIFNhbml0aXplUGlwZU1vZHVsZSwgSWNvbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtCcmVhZGNydW1ic0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzTW9kdWxlIHt9XG4iXX0=