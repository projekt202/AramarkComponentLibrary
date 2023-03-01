import { ProductCardModule } from "./../../../shared/components/product-card/product-card.module";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { SwiperModule } from "swiper/angular";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { GtmIdPipeModule } from "./../../../shared/pipes/gtm/gtm-id.module";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { ProductCardRowComponent } from "./product-card-row.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ProductCardRowModule {
}
ProductCardRowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProductCardRowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProductCardRowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: ProductCardRowModule, declarations: [ProductCardRowComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        CarouselModule,
        GtmIdPipeModule,
        WysiwygModule,
        NgxSmartModalModule,
        SwiperModule,
        AngularContentPortalModule, i1.RouterModule, LazyLoadImageModule,
        GoogleTagManagerModule,
        ProductCardModule], exports: [ProductCardRowComponent] });
ProductCardRowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProductCardRowModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        CarouselModule,
        GtmIdPipeModule,
        WysiwygModule,
        NgxSmartModalModule,
        SwiperModule,
        AngularContentPortalModule,
        RouterModule.forRoot([]),
        LazyLoadImageModule,
        GoogleTagManagerModule,
        ProductCardModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProductCardRowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ProductCardRowComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        ButtonModule,
                        CarouselModule,
                        GtmIdPipeModule,
                        WysiwygModule,
                        NgxSmartModalModule,
                        SwiperModule,
                        AngularContentPortalModule,
                        RouterModule.forRoot([]),
                        LazyLoadImageModule,
                        GoogleTagManagerModule,
                        ProductCardModule,
                    ],
                    providers: [],
                    exports: [ProductCardRowComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJkLXJvdy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9ibG9ja3MvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQtcm93L3Byb2R1Y3QtY2FyZC1yb3cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBd0J2RSxNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0IsaUJBckJoQix1QkFBdUIsYUFFcEMsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLDBCQUEwQixtQkFFMUIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixpQkFBaUIsYUFHVCx1QkFBdUI7bUhBRXRCLG9CQUFvQixZQW5CN0IsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN4QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGlCQUFpQjs0RkFLUixvQkFBb0I7a0JBdEJoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWiwwQkFBMEI7d0JBQzFCLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUN4QixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0Q2FyZE1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQubW9kdWxlXCI7XG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlTW9kdWxlIH0gZnJvbSBcIm5nLWxhenlsb2FkLWltYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBbmd1bGFyQ29udGVudFBvcnRhbE1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWNvbnRlbnQtcG9ydGFsXCI7XG5pbXBvcnQgeyBTd2lwZXJNb2R1bGUgfSBmcm9tIFwic3dpcGVyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5neFNtYXJ0TW9kYWxNb2R1bGUgfSBmcm9tIFwibmd4LXNtYXJ0LW1vZGFsXCI7XG5pbXBvcnQgeyBXeXNpd3lnTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3lzaXd5Zy93eXNpd3lnLm1vZHVsZVwiO1xuaW1wb3J0IHsgR3RtSWRQaXBlTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2d0bS9ndG0taWQubW9kdWxlXCI7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZVwiO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBQcm9kdWN0Q2FyZFJvd0NvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3QtY2FyZC1yb3cuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RDYXJkUm93Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICBHdG1JZFBpcGVNb2R1bGUsXG4gICAgV3lzaXd5Z01vZHVsZSxcbiAgICBOZ3hTbWFydE1vZGFsTW9kdWxlLFxuICAgIFN3aXBlck1vZHVsZSxcbiAgICBBbmd1bGFyQ29udGVudFBvcnRhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXSksXG4gICAgTGF6eUxvYWRJbWFnZU1vZHVsZSxcbiAgICBHb29nbGVUYWdNYW5hZ2VyTW9kdWxlLFxuICAgIFByb2R1Y3RDYXJkTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbUHJvZHVjdENhcmRSb3dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2FyZFJvd01vZHVsZSB7fVxuIl19