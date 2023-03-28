import { IconModule } from "./../icon/icon.module";
import { Array2StringPipeModule } from "./../../pipes/array2string/array2string.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SanitizePipeModule } from "../../pipes/sanitize/sanitize.module";
import { TypographyComponent } from "./typography.component";
import * as i0 from "@angular/core";
export class TypographyModule {
}
TypographyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TypographyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TypographyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TypographyModule, declarations: [TypographyComponent], imports: [CommonModule,
        RouterModule,
        SanitizePipeModule,
        Array2StringPipeModule,
        IconModule], exports: [TypographyComponent] });
TypographyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TypographyModule, imports: [CommonModule,
        RouterModule,
        SanitizePipeModule,
        Array2StringPipeModule,
        IconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TypographyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TypographyComponent],
                    imports: [
                        CommonModule,
                        RouterModule,
                        SanitizePipeModule,
                        Array2StringPipeModule,
                        IconModule,
                    ],
                    providers: [],
                    exports: [TypographyComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBYzdELE1BQU0sT0FBTyxnQkFBZ0I7OzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFYWixtQkFBbUIsYUFFaEMsWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLFVBQVUsYUFHRixtQkFBbUI7K0dBRWxCLGdCQUFnQixZQVR6QixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsVUFBVTs0RkFLRCxnQkFBZ0I7a0JBWjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLFVBQVU7cUJBQ1g7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLy4uL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IEFycmF5MlN0cmluZ1BpcGVNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi9waXBlcy9hcnJheTJzdHJpbmcvYXJyYXkyc3RyaW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeUNvbXBvbmVudCB9IGZyb20gXCIuL3R5cG9ncmFwaHkuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1R5cG9ncmFwaHlDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTYW5pdGl6ZVBpcGVNb2R1bGUsXG4gICAgQXJyYXkyU3RyaW5nUGlwZU1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbVHlwb2dyYXBoeUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFR5cG9ncmFwaHlNb2R1bGUge31cbiJdfQ==