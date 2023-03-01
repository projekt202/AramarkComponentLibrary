import { SwiperModule } from "swiper/angular";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { PaginationModule } from "./../../../shared/components/pagination/pagination.module";
import { LocationCardModule } from "./../../../shared/components/location-card/location-card.module";
import { ProductCardModule } from "./../../../shared/components/product-card/product-card.module";
import { ProductCardRowModule } from "./../product-card-row/product-card-row.module";
import { TabsModule } from "./../../../shared/components/tabs/tabs.module";
import { InputModule } from "./../../../shared/components/input/input.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { GraphQLModule } from "../../../graphql.module";
import { SearchComponent } from "./search.component";
import * as i0 from "@angular/core";
import * as i1 from "ngx-smart-modal";
import * as i2 from "@angular/router";
import * as i3 from "ngx-skeleton-loader";
export class SearchModule {
}
SearchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SearchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: SearchModule, declarations: [SearchComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        InputModule,
        TabsModule,
        IconModule,
        CarouselModule,
        ProductCardRowModule,
        ProductCardModule,
        LocationCardModule,
        PaginationModule,
        WysiwygModule, i1.NgxSmartModalModule, SwiperModule,
        AngularContentPortalModule, i2.RouterModule, LazyLoadImageModule,
        FormsModule,
        GraphQLModule,
        HttpClientModule, i3.NgxSkeletonLoaderModule], exports: [SearchComponent] });
SearchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SearchModule, providers: [
        {
            provide: APP_BASE_HREF,
            useValue: "/",
        },
    ], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        InputModule,
        TabsModule,
        IconModule,
        CarouselModule,
        ProductCardRowModule,
        ProductCardModule,
        LocationCardModule,
        PaginationModule,
        WysiwygModule,
        NgxSmartModalModule.forRoot(),
        SwiperModule,
        AngularContentPortalModule,
        RouterModule.forRoot([]),
        LazyLoadImageModule,
        FormsModule,
        GraphQLModule,
        HttpClientModule,
        NgxSkeletonLoaderModule.forRoot({
            animation: "progress",
            loadingText: "Loading...",
        })] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SearchComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        ButtonModule,
                        InputModule,
                        TabsModule,
                        IconModule,
                        CarouselModule,
                        ProductCardRowModule,
                        ProductCardModule,
                        LocationCardModule,
                        PaginationModule,
                        WysiwygModule,
                        NgxSmartModalModule.forRoot(),
                        SwiperModule,
                        AngularContentPortalModule,
                        RouterModule.forRoot([]),
                        LazyLoadImageModule,
                        FormsModule,
                        GraphQLModule,
                        HttpClientModule,
                        NgxSkeletonLoaderModule.forRoot({
                            animation: "progress",
                            loadingText: "Loading...",
                        }),
                    ],
                    providers: [
                        {
                            provide: APP_BASE_HREF,
                            useValue: "/",
                        },
                    ],
                    exports: [SearchComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQXVDckQsTUFBTSxPQUFPLFlBQVk7OzBHQUFaLFlBQVk7MkdBQVosWUFBWSxpQkFwQ1IsZUFBZSxhQUU1QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixhQUFhLDBCQUViLFlBQVk7UUFDWiwwQkFBMEIsbUJBRTFCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQix5Q0FZUixlQUFlOzJHQUVkLFlBQVksYUFSWjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGFBQWE7WUFDdEIsUUFBUSxFQUFFLEdBQUc7U0FDZDtLQUNGLFlBL0JDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7UUFDN0IsWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN4QixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1lBQzlCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUM7NEZBVU8sWUFBWTtrQkFyQ3hCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsVUFBVTt3QkFDVixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7d0JBQzdCLFlBQVk7d0JBQ1osMEJBQTBCO3dCQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDeEIsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQix1QkFBdUIsQ0FBQyxPQUFPLENBQUM7NEJBQzlCLFNBQVMsRUFBRSxVQUFVOzRCQUNyQixXQUFXLEVBQUUsWUFBWTt5QkFDMUIsQ0FBQztxQkFDSDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFFBQVEsRUFBRSxHQUFHO3lCQUNkO3FCQUNGO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2lwZXJNb2R1bGUgfSBmcm9tIFwic3dpcGVyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYsIENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBbmd1bGFyQ29udGVudFBvcnRhbE1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWNvbnRlbnQtcG9ydGFsXCI7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlTW9kdWxlIH0gZnJvbSBcIm5nLWxhenlsb2FkLWltYWdlXCI7XG5pbXBvcnQgeyBOZ3hTa2VsZXRvbkxvYWRlck1vZHVsZSB9IGZyb20gXCJuZ3gtc2tlbGV0b24tbG9hZGVyXCI7XG5pbXBvcnQgeyBOZ3hTbWFydE1vZGFsTW9kdWxlIH0gZnJvbSBcIm5neC1zbWFydC1tb2RhbFwiO1xuXG5pbXBvcnQgeyBXeXNpd3lnTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3lzaXd5Zy93eXNpd3lnLm1vZHVsZVwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGVcIjtcbmltcG9ydCB7IExvY2F0aW9uQ2FyZE1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2xvY2F0aW9uLWNhcmQvbG9jYXRpb24tY2FyZC5tb2R1bGVcIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJkTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5tb2R1bGVcIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJkUm93TW9kdWxlIH0gZnJvbSBcIi4vLi4vcHJvZHVjdC1jYXJkLXJvdy9wcm9kdWN0LWNhcmQtcm93Lm1vZHVsZVwiO1xuaW1wb3J0IHsgVGFic01vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGVcIjtcbmltcG9ydCB7IElucHV0TW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQubW9kdWxlXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlXCI7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IEdyYXBoUUxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vZ3JhcGhxbC5tb2R1bGVcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VhcmNoQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgSW5wdXRNb2R1bGUsXG4gICAgVGFic01vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIENhcm91c2VsTW9kdWxlLFxuICAgIFByb2R1Y3RDYXJkUm93TW9kdWxlLFxuICAgIFByb2R1Y3RDYXJkTW9kdWxlLFxuICAgIExvY2F0aW9uQ2FyZE1vZHVsZSxcbiAgICBQYWdpbmF0aW9uTW9kdWxlLFxuICAgIFd5c2l3eWdNb2R1bGUsXG4gICAgTmd4U21hcnRNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgU3dpcGVyTW9kdWxlLFxuICAgIEFuZ3VsYXJDb250ZW50UG9ydGFsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdKSxcbiAgICBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEdyYXBoUUxNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ3hTa2VsZXRvbkxvYWRlck1vZHVsZS5mb3JSb290KHtcbiAgICAgIGFuaW1hdGlvbjogXCJwcm9ncmVzc1wiLFxuICAgICAgbG9hZGluZ1RleHQ6IFwiTG9hZGluZy4uLlwiLFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgdXNlVmFsdWU6IFwiL1wiLFxuICAgIH0sXG4gIF0sXG4gIGV4cG9ydHM6IFtTZWFyY2hDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2R1bGUge31cbiJdfQ==