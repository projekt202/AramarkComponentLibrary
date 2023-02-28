import { LazyLoadImageModule } from "ng-lazyload-image";
import { SwiperModule } from "swiper/angular";
import { QuoteModule } from "./../quote/quote.module";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { QuoteSliderComponent } from "./quote-slider.component";
import * as i0 from "@angular/core";
export class QuoteSliderModule {
}
QuoteSliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QuoteSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QuoteSliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: QuoteSliderModule, declarations: [QuoteSliderComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        CarouselModule,
        QuoteModule,
        SwiperModule,
        LazyLoadImageModule], exports: [QuoteSliderComponent] });
QuoteSliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QuoteSliderModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        CarouselModule,
        QuoteModule,
        SwiperModule,
        LazyLoadImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QuoteSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [QuoteSliderComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        CarouselModule,
                        QuoteModule,
                        SwiperModule,
                        LazyLoadImageModule,
                    ],
                    providers: [],
                    exports: [QuoteSliderComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUtc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL3F1b3RlLXNsaWRlci9xdW90ZS1zbGlkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFpQmhFLE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFkYixvQkFBb0IsYUFFakMsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQixhQUdYLG9CQUFvQjtnSEFFbkIsaUJBQWlCLFlBWjFCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7NEZBS1YsaUJBQWlCO2tCQWY3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsVUFBVTt3QkFDVixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tIFwibmctbGF6eWxvYWQtaW1hZ2VcIjtcbmltcG9ydCB7IFN3aXBlck1vZHVsZSB9IGZyb20gXCJzd2lwZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUXVvdGVNb2R1bGUgfSBmcm9tIFwiLi8uLi9xdW90ZS9xdW90ZS5tb2R1bGVcIjtcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgUXVvdGVTbGlkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9xdW90ZS1zbGlkZXIuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1F1b3RlU2xpZGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIENhcm91c2VsTW9kdWxlLFxuICAgIFF1b3RlTW9kdWxlLFxuICAgIFN3aXBlck1vZHVsZSxcbiAgICBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbUXVvdGVTbGlkZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdW90ZVNsaWRlck1vZHVsZSB7fVxuIl19