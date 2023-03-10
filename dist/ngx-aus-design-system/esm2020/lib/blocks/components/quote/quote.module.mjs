import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { QuoteComponent } from "./quote.component";
import * as i0 from "@angular/core";
export class QuoteModule {
}
QuoteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QuoteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QuoteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: QuoteModule, declarations: [QuoteComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        LazyLoadImageModule], exports: [QuoteComponent] });
QuoteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QuoteModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        LazyLoadImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QuoteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [QuoteComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        LazyLoadImageModule,
                    ],
                    providers: [],
                    exports: [QuoteComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvYmxvY2tzL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFhbkQsTUFBTSxPQUFPLFdBQVc7O3lHQUFYLFdBQVc7MEdBQVgsV0FBVyxpQkFWUCxjQUFjLGFBRTNCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQixhQUdYLGNBQWM7MEdBRWIsV0FBVyxZQVJwQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7NEZBS1YsV0FBVztrQkFYdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXp5TG9hZEltYWdlTW9kdWxlIH0gZnJvbSBcIm5nLWxhenlsb2FkLWltYWdlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IFF1b3RlQ29tcG9uZW50IH0gZnJvbSBcIi4vcXVvdGUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1F1b3RlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbUXVvdGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdW90ZU1vZHVsZSB7fVxuIl19