import { BillboardModule } from "./../billboard/billboard.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { TwoColumnBillboardsComponent } from "./two-column-billboards.component";
import * as i0 from "@angular/core";
export class TwoColumnBillboardsModule {
}
TwoColumnBillboardsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnBillboardsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TwoColumnBillboardsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnBillboardsModule, declarations: [TwoColumnBillboardsComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        BillboardModule], exports: [TwoColumnBillboardsComponent] });
TwoColumnBillboardsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnBillboardsModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        BillboardModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnBillboardsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TwoColumnBillboardsComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        ButtonModule,
                        BillboardModule,
                    ],
                    providers: [],
                    exports: [TwoColumnBillboardsComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvLWNvbHVtbi1iaWxsYm9hcmRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL3R3by1jb2x1bW4tYmlsbGJvYXJkcy90d28tY29sdW1uLWJpbGxib2FyZHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQWVqRixNQUFNLE9BQU8seUJBQXlCOzt1SEFBekIseUJBQXlCO3dIQUF6Qix5QkFBeUIsaUJBWnJCLDRCQUE0QixhQUV6QyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLGVBQWUsYUFHUCw0QkFBNEI7d0hBRTNCLHlCQUF5QixZQVZsQyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLGVBQWU7NEZBS04seUJBQXlCO2tCQWJyQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUM1QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpbGxib2FyZE1vZHVsZSB9IGZyb20gXCIuLy4uL2JpbGxib2FyZC9iaWxsYm9hcmQubW9kdWxlXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IFR3b0NvbHVtbkJpbGxib2FyZHNDb21wb25lbnQgfSBmcm9tIFwiLi90d28tY29sdW1uLWJpbGxib2FyZHMuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1R3b0NvbHVtbkJpbGxib2FyZHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEJpbGxib2FyZE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1R3b0NvbHVtbkJpbGxib2FyZHNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUd29Db2x1bW5CaWxsYm9hcmRzTW9kdWxlIHt9XG4iXX0=