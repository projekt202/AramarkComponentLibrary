import { FullwidthImageCardColumnsModule } from "./../fullwidth-image-card-columns/fullwidth-image-card-columns.module";
import { SwiperModule } from "swiper/angular";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { WysiwygModule } from "../../../shared/components/wysiwyg/wysiwyg.module";
import { ProductCardModule } from "../../../shared/components/product-card/product-card.module";
import { ProductCardRowModule } from "../product-card-row/product-card-row.module";
import { TabsModule } from "../../../shared/components/tabs/tabs.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { GraphQLModule } from "../../../graphql.module";
import { TabbedContentComponent } from "./tabbed-content.component";
import { RouterTestingModule } from "@angular/router/testing";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import * as i0 from "@angular/core";
import * as i1 from "ngx-smart-modal";
import * as i2 from "@angular/router";
export class TabbedContentModule {
}
TabbedContentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabbedContentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabbedContentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TabbedContentModule, declarations: [TabbedContentComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        TabsModule,
        ButtonModule,
        ProductCardModule,
        ProductCardRowModule,
        WysiwygModule,
        ImageModule,
        IconModule,
        CarouselModule,
        LazyLoadImageModule, i1.NgxSmartModalModule, HttpClientModule,
        GraphQLModule,
        RouterTestingModule,
        SwiperModule,
        AngularContentPortalModule, i2.RouterModule, GoogleTagManagerModule,
        FullwidthImageCardColumnsModule], exports: [TabbedContentComponent] });
TabbedContentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabbedContentModule, providers: [
        {
            provide: APP_BASE_HREF,
            useValue: "/",
        },
        { provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" },
    ], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        TabsModule,
        ButtonModule,
        ProductCardModule,
        ProductCardRowModule,
        WysiwygModule,
        ImageModule,
        IconModule,
        CarouselModule,
        LazyLoadImageModule,
        NgxSmartModalModule.forRoot(),
        HttpClientModule,
        GraphQLModule,
        RouterTestingModule,
        SwiperModule,
        AngularContentPortalModule,
        RouterModule.forRoot([]),
        GoogleTagManagerModule,
        FullwidthImageCardColumnsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabbedContentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TabbedContentComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        TabsModule,
                        ButtonModule,
                        ProductCardModule,
                        ProductCardRowModule,
                        WysiwygModule,
                        ImageModule,
                        IconModule,
                        CarouselModule,
                        LazyLoadImageModule,
                        NgxSmartModalModule.forRoot(),
                        HttpClientModule,
                        GraphQLModule,
                        RouterTestingModule,
                        SwiperModule,
                        AngularContentPortalModule,
                        RouterModule.forRoot([]),
                        GoogleTagManagerModule,
                        FullwidthImageCardColumnsModule,
                    ],
                    providers: [
                        {
                            provide: APP_BASE_HREF,
                            useValue: "/",
                        },
                        { provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" },
                    ],
                    exports: [TabbedContentComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkLWNvbnRlbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvYmxvY2tzL2NvbXBvbmVudHMvdGFiYmVkLWNvbnRlbnQvdGFiYmVkLWNvbnRlbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQW9DcEUsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQWpDZixzQkFBc0IsYUFFbkMsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixXQUFXO1FBQ1gsVUFBVTtRQUNWLGNBQWM7UUFDZCxtQkFBbUIsMEJBRW5CLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWiwwQkFBMEIsbUJBRTFCLHNCQUFzQjtRQUN0QiwrQkFBK0IsYUFTdkIsc0JBQXNCO2tIQUVyQixtQkFBbUIsYUFUbkI7UUFDVDtZQUNFLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO0tBQzNELFlBNUJDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtRQUM3QixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3hCLHNCQUFzQjtRQUN0QiwrQkFBK0I7NEZBV3RCLG1CQUFtQjtrQkFsQy9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7d0JBQzdCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osMEJBQTBCO3dCQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDeEIsc0JBQXNCO3dCQUN0QiwrQkFBK0I7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsUUFBUSxFQUFFLEdBQUc7eUJBQ2Q7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtxQkFDM0Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVsbHdpZHRoSW1hZ2VDYXJkQ29sdW1uc01vZHVsZSB9IGZyb20gXCIuLy4uL2Z1bGx3aWR0aC1pbWFnZS1jYXJkLWNvbHVtbnMvZnVsbHdpZHRoLWltYWdlLWNhcmQtY29sdW1ucy5tb2R1bGVcIjtcbmltcG9ydCB7IFN3aXBlck1vZHVsZSB9IGZyb20gXCJzd2lwZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiwgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQW5ndWxhckNvbnRlbnRQb3J0YWxNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1jb250ZW50LXBvcnRhbFwiO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZU1vZHVsZSB9IGZyb20gXCJuZy1sYXp5bG9hZC1pbWFnZVwiO1xuaW1wb3J0IHsgTmd4U21hcnRNb2RhbE1vZHVsZSB9IGZyb20gXCJuZ3gtc21hcnQtbW9kYWxcIjtcblxuaW1wb3J0IHsgSW1hZ2VNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5tb2R1bGVcIjtcbmltcG9ydCB7IFd5c2l3eWdNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3lzaXd5Zy93eXNpd3lnLm1vZHVsZVwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmRNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5tb2R1bGVcIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJkUm93TW9kdWxlIH0gZnJvbSBcIi4uL3Byb2R1Y3QtY2FyZC1yb3cvcHJvZHVjdC1jYXJkLXJvdy5tb2R1bGVcIjtcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGFicy90YWJzLm1vZHVsZVwiO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGVcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgR3JhcGhRTE1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9ncmFwaHFsLm1vZHVsZVwiO1xuaW1wb3J0IHsgVGFiYmVkQ29udGVudENvbXBvbmVudCB9IGZyb20gXCIuL3RhYmJlZC1jb250ZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVyVGVzdGluZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXIvdGVzdGluZ1wiO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlck1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWdvb2dsZS10YWctbWFuYWdlclwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUYWJiZWRDb250ZW50Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBUYWJzTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBQcm9kdWN0Q2FyZE1vZHVsZSxcbiAgICBQcm9kdWN0Q2FyZFJvd01vZHVsZSxcbiAgICBXeXNpd3lnTW9kdWxlLFxuICAgIEltYWdlTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgTGF6eUxvYWRJbWFnZU1vZHVsZSxcbiAgICBOZ3hTbWFydE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEdyYXBoUUxNb2R1bGUsXG4gICAgUm91dGVyVGVzdGluZ01vZHVsZSxcbiAgICBTd2lwZXJNb2R1bGUsXG4gICAgQW5ndWxhckNvbnRlbnRQb3J0YWxNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW10pLFxuICAgIEdvb2dsZVRhZ01hbmFnZXJNb2R1bGUsXG4gICAgRnVsbHdpZHRoSW1hZ2VDYXJkQ29sdW1uc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcbiAgICAgIHVzZVZhbHVlOiBcIi9cIixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogXCJnb29nbGVUYWdNYW5hZ2VySWRcIiwgdXNlVmFsdWU6IFwiR1RNLU5NQ000SkpcIiB9LFxuICBdLFxuICBleHBvcnRzOiBbVGFiYmVkQ29udGVudENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmJlZENvbnRlbnRNb2R1bGUge31cbiJdfQ==