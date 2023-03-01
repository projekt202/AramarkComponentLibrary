import { InteriorPageHeroCarouselModule } from "./../interior-page-hero-carousel/interior-page-hero-carousel.module";
import { SwiperModule } from "swiper/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { ImageModule } from "../../../shared/components/image/image.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { ArticleCardModule } from "../article-card/article-card.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { RelatedPostCarouselComponent } from "./related-post-carousel.component";
import * as i0 from "@angular/core";
export class RelatedPostCarouselModule {
}
RelatedPostCarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RelatedPostCarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostCarouselModule, declarations: [RelatedPostCarouselComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ArticleCardModule,
        SanitizePipeModule,
        ButtonModule,
        ImageModule,
        CarouselModule,
        GraphQLModule,
        HttpClientModule,
        LazyLoadImageModule,
        SwiperModule,
        InteriorPageHeroCarouselModule], exports: [RelatedPostCarouselComponent] });
RelatedPostCarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostCarouselModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ArticleCardModule,
        SanitizePipeModule,
        ButtonModule,
        ImageModule,
        CarouselModule,
        GraphQLModule,
        HttpClientModule,
        LazyLoadImageModule,
        SwiperModule,
        InteriorPageHeroCarouselModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [RelatedPostCarouselComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        ArticleCardModule,
                        SanitizePipeModule,
                        ButtonModule,
                        ImageModule,
                        CarouselModule,
                        GraphQLModule,
                        HttpClientModule,
                        LazyLoadImageModule,
                        SwiperModule,
                        InteriorPageHeroCarouselModule,
                    ],
                    providers: [],
                    exports: [RelatedPostCarouselComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1wb3N0LWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL3JlbGF0ZWQtcG9zdC1jYXJvdXNlbC9yZWxhdGVkLXBvc3QtY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQXVCakYsTUFBTSxPQUFPLHlCQUF5Qjs7dUhBQXpCLHlCQUF5Qjt3SEFBekIseUJBQXlCLGlCQXBCckIsNEJBQTRCLGFBRXpDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWiw4QkFBOEIsYUFHdEIsNEJBQTRCO3dIQUUzQix5QkFBeUIsWUFsQmxDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWiw4QkFBOEI7NEZBS3JCLHlCQUF5QjtrQkFyQnJDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQzVDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLDhCQUE4QjtxQkFDL0I7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZXJpb3JQYWdlSGVyb0Nhcm91c2VsTW9kdWxlIH0gZnJvbSBcIi4vLi4vaW50ZXJpb3ItcGFnZS1oZXJvLWNhcm91c2VsL2ludGVyaW9yLXBhZ2UtaGVyby1jYXJvdXNlbC5tb2R1bGVcIjtcbmltcG9ydCB7IFN3aXBlck1vZHVsZSB9IGZyb20gXCJzd2lwZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZU1vZHVsZSB9IGZyb20gXCJuZy1sYXp5bG9hZC1pbWFnZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgR3JhcGhRTE1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9ncmFwaHFsLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlXCI7XG5pbXBvcnQgeyBJbWFnZU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5tb2R1bGVcIjtcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXJ0aWNsZUNhcmRNb2R1bGUgfSBmcm9tIFwiLi4vYXJ0aWNsZS1jYXJkL2FydGljbGUtY2FyZC5tb2R1bGVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IFNhbml0aXplUGlwZU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlXCI7XG5pbXBvcnQgeyBSZWxhdGVkUG9zdENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVsYXRlZC1wb3N0LWNhcm91c2VsLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtSZWxhdGVkUG9zdENhcm91c2VsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEFydGljbGVDYXJkTW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgSW1hZ2VNb2R1bGUsXG4gICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgR3JhcGhRTE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIExhenlMb2FkSW1hZ2VNb2R1bGUsXG4gICAgU3dpcGVyTW9kdWxlLFxuICAgIEludGVyaW9yUGFnZUhlcm9DYXJvdXNlbE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1JlbGF0ZWRQb3N0Q2Fyb3VzZWxDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBSZWxhdGVkUG9zdENhcm91c2VsTW9kdWxlIHt9XG4iXX0=