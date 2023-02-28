import { SwiperModule } from "swiper/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerCardModule } from "./../../../shared/components/customer-card/customer-card.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { ReviewsCardsComponent } from "./reviews-cards.component";
import { TimeAgoPipeModule } from "../../../shared/pipes/time-ago/time-ago.module";
import * as i0 from "@angular/core";
export class ReviewsCardsModule {
}
ReviewsCardsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ReviewsCardsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ReviewsCardsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: ReviewsCardsModule, declarations: [ReviewsCardsComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        CustomerCardModule,
        CarouselModule,
        TimeAgoPipeModule,
        SwiperModule], exports: [ReviewsCardsComponent] });
ReviewsCardsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ReviewsCardsModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        CustomerCardModule,
        CarouselModule,
        TimeAgoPipeModule,
        SwiperModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ReviewsCardsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ReviewsCardsComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        CustomerCardModule,
                        CarouselModule,
                        TimeAgoPipeModule,
                        SwiperModule,
                    ],
                    providers: [],
                    exports: [ReviewsCardsComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3cy1jYXJkcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9ibG9ja3MvY29tcG9uZW50cy9yZXZpZXdzLWNhcmRzL3Jldmlld3MtY2FyZHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQWlCbkYsTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQWRkLHFCQUFxQixhQUVsQyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsWUFBWSxhQUdKLHFCQUFxQjtpSEFFcEIsa0JBQWtCLFlBWjNCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixZQUFZOzRGQUtILGtCQUFrQjtrQkFmOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsWUFBWTtxQkFDYjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2lwZXJNb2R1bGUgfSBmcm9tIFwic3dpcGVyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ3VzdG9tZXJDYXJkTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tZXItY2FyZC9jdXN0b21lci1jYXJkLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlXCI7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IFJldmlld3NDYXJkc0NvbXBvbmVudCB9IGZyb20gXCIuL3Jldmlld3MtY2FyZHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUaW1lQWdvUGlwZU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvdGltZS1hZ28vdGltZS1hZ28ubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Jldmlld3NDYXJkc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHlwb2dyYXBoeU1vZHVsZSxcbiAgICBTYW5pdGl6ZVBpcGVNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBDdXN0b21lckNhcmRNb2R1bGUsXG4gICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgVGltZUFnb1BpcGVNb2R1bGUsXG4gICAgU3dpcGVyTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbUmV2aWV3c0NhcmRzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3c0NhcmRzTW9kdWxlIHt9XG4iXX0=