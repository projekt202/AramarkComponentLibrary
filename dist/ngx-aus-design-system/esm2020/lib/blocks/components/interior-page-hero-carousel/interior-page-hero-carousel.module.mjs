import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { InteriorPageHeroModule } from "./../interior-page-hero/interior-page-hero.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { SwiperModule } from "swiper/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { InteriorPageHeroCarouselComponent } from "./interior-page-hero-carousel.component";
import * as i0 from "@angular/core";
export class InteriorPageHeroCarouselModule {
}
InteriorPageHeroCarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: InteriorPageHeroCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InteriorPageHeroCarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: InteriorPageHeroCarouselModule, declarations: [InteriorPageHeroCarouselComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        IconModule,
        ImageModule,
        InteriorPageHeroModule,
        CarouselModule,
        LazyLoadImageModule,
        SwiperModule], exports: [InteriorPageHeroCarouselComponent] });
InteriorPageHeroCarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: InteriorPageHeroCarouselModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        IconModule,
        ImageModule,
        InteriorPageHeroModule,
        CarouselModule,
        LazyLoadImageModule,
        SwiperModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: InteriorPageHeroCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InteriorPageHeroCarouselComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        ButtonModule,
                        IconModule,
                        ImageModule,
                        InteriorPageHeroModule,
                        CarouselModule,
                        LazyLoadImageModule,
                        SwiperModule,
                    ],
                    providers: [],
                    exports: [InteriorPageHeroCarouselComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJpb3ItcGFnZS1oZXJvLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2ludGVyaW9yLXBhZ2UtaGVyby1jYXJvdXNlbC9pbnRlcmlvci1wYWdlLWhlcm8tY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBbUI1RixNQUFNLE9BQU8sOEJBQThCOzs0SEFBOUIsOEJBQThCOzZIQUE5Qiw4QkFBOEIsaUJBaEIxQixpQ0FBaUMsYUFFOUMsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsWUFBWSxhQUdKLGlDQUFpQzs2SEFFaEMsOEJBQThCLFlBZHZDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFlBQVk7NEZBS0gsOEJBQThCO2tCQWpCMUMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDakQsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixXQUFXO3dCQUNYLHNCQUFzQjt3QkFDdEIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGVcIjtcbmltcG9ydCB7IEludGVyaW9yUGFnZUhlcm9Nb2R1bGUgfSBmcm9tIFwiLi8uLi9pbnRlcmlvci1wYWdlLWhlcm8vaW50ZXJpb3ItcGFnZS1oZXJvLm1vZHVsZVwiO1xuaW1wb3J0IHsgSW1hZ2VNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5tb2R1bGVcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBTd2lwZXJNb2R1bGUgfSBmcm9tIFwic3dpcGVyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tIFwibmctbGF6eWxvYWQtaW1hZ2VcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IFNhbml0aXplUGlwZU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlXCI7XG5pbXBvcnQgeyBJbnRlcmlvclBhZ2VIZXJvQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tIFwiLi9pbnRlcmlvci1wYWdlLWhlcm8tY2Fyb3VzZWwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ludGVyaW9yUGFnZUhlcm9DYXJvdXNlbENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHlwb2dyYXBoeU1vZHVsZSxcbiAgICBTYW5pdGl6ZVBpcGVNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgSW1hZ2VNb2R1bGUsXG4gICAgSW50ZXJpb3JQYWdlSGVyb01vZHVsZSxcbiAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICAgIFN3aXBlck1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0ludGVyaW9yUGFnZUhlcm9DYXJvdXNlbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEludGVyaW9yUGFnZUhlcm9DYXJvdXNlbE1vZHVsZSB7fVxuIl19