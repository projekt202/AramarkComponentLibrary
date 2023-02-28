import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { SwiperModule } from "swiper/angular";
import { GtmIdPipeModule } from "../../pipes/gtm/gtm-id.module";
import { ButtonModule } from "../button/button.module";
import { CarouselModule } from "../carousel/carousel.module";
import { TypographyModule } from "../typography/typography.module";
import { WysiwygModule } from "../wysiwyg/wysiwyg.module";
import { ProductCardComponent } from "./product-card.component";
import * as i0 from "@angular/core";
import * as i1 from "ngx-smart-modal";
export class ProductCardModule {
}
ProductCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProductCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProductCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: ProductCardModule, declarations: [ProductCardComponent], imports: [CommonModule, i1.NgxSmartModalModule, AngularContentPortalModule,
        RouterModule,
        LazyLoadImageModule,
        SwiperModule,
        GoogleTagManagerModule,
        TypographyModule,
        WysiwygModule,
        GtmIdPipeModule,
        CarouselModule,
        ButtonModule], exports: [ProductCardComponent] });
ProductCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProductCardModule, providers: [{ provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" }], imports: [CommonModule,
        NgxSmartModalModule.forRoot(),
        AngularContentPortalModule,
        RouterModule,
        LazyLoadImageModule,
        SwiperModule,
        GoogleTagManagerModule,
        TypographyModule,
        WysiwygModule,
        GtmIdPipeModule,
        CarouselModule,
        ButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProductCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ProductCardComponent],
                    imports: [
                        CommonModule,
                        NgxSmartModalModule.forRoot(),
                        AngularContentPortalModule,
                        RouterModule,
                        LazyLoadImageModule,
                        SwiperModule,
                        GoogleTagManagerModule,
                        TypographyModule,
                        WysiwygModule,
                        GtmIdPipeModule,
                        CarouselModule,
                        ButtonModule,
                    ],
                    providers: [{ provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" }],
                    exports: [ProductCardComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFxQmhFLE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFsQmIsb0JBQW9CLGFBRWpDLFlBQVksMEJBRVosMEJBQTBCO1FBQzFCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsWUFBWSxhQUdKLG9CQUFvQjtnSEFFbkIsaUJBQWlCLGFBSGpCLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLFlBYnJFLFlBQVk7UUFDWixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7UUFDN0IsMEJBQTBCO1FBQzFCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsWUFBWTs0RkFLSCxpQkFBaUI7a0JBbkI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7d0JBQzdCLDBCQUEwQjt3QkFDMUIsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO29CQUN2RSxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBbmd1bGFyQ29udGVudFBvcnRhbE1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWNvbnRlbnQtcG9ydGFsXCI7XG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlTW9kdWxlIH0gZnJvbSBcIm5nLWxhenlsb2FkLWltYWdlXCI7XG5pbXBvcnQgeyBOZ3hTbWFydE1vZGFsTW9kdWxlIH0gZnJvbSBcIm5neC1zbWFydC1tb2RhbFwiO1xuaW1wb3J0IHsgU3dpcGVyTW9kdWxlIH0gZnJvbSBcInN3aXBlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBHdG1JZFBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vcGlwZXMvZ3RtL2d0bS1pZC5tb2R1bGVcIjtcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tIFwiLi4vY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSBcIi4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IFd5c2l3eWdNb2R1bGUgfSBmcm9tIFwiLi4vd3lzaXd5Zy93eXNpd3lnLm1vZHVsZVwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmRDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0LWNhcmQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RDYXJkQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ3hTbWFydE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBbmd1bGFyQ29udGVudFBvcnRhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGF6eUxvYWRJbWFnZU1vZHVsZSxcbiAgICBTd2lwZXJNb2R1bGUsXG4gICAgR29vZ2xlVGFnTWFuYWdlck1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFd5c2l3eWdNb2R1bGUsXG4gICAgR3RtSWRQaXBlTW9kdWxlLFxuICAgIENhcm91c2VsTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBcImdvb2dsZVRhZ01hbmFnZXJJZFwiLCB1c2VWYWx1ZTogXCJHVE0tTk1DTTRKSlwiIH1dLFxuICBleHBvcnRzOiBbUHJvZHVjdENhcmRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2FyZE1vZHVsZSB7fVxuIl19