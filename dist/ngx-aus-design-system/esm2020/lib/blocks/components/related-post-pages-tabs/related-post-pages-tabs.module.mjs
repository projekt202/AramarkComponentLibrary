import { ArticleCardModule } from "./../article-card/article-card.module";
import { GtmIdPipeModule } from "./../../../shared/pipes/gtm/gtm-id.module";
import { TabsModule } from "./../../../shared/components/tabs/tabs.module";
import { PaginationModule } from "./../../../shared/components/pagination/pagination.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { ImageModule } from "../../../shared/components/image/image.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { RelatedPostPagesTabsComponent } from "./related-post-pages-tabs.component";
import * as i0 from "@angular/core";
export class RelatedPostPagesTabsModule {
}
RelatedPostPagesTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostPagesTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RelatedPostPagesTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostPagesTabsModule, declarations: [RelatedPostPagesTabsComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        ImageModule,
        PaginationModule,
        TabsModule,
        GtmIdPipeModule,
        GraphQLModule,
        HttpClientModule,
        LazyLoadImageModule,
        ArticleCardModule], exports: [RelatedPostPagesTabsComponent] });
RelatedPostPagesTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostPagesTabsModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        ImageModule,
        PaginationModule,
        TabsModule,
        GtmIdPipeModule,
        GraphQLModule,
        HttpClientModule,
        LazyLoadImageModule,
        ArticleCardModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostPagesTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [RelatedPostPagesTabsComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        ButtonModule,
                        ImageModule,
                        PaginationModule,
                        TabsModule,
                        GtmIdPipeModule,
                        GraphQLModule,
                        HttpClientModule,
                        LazyLoadImageModule,
                        ArticleCardModule,
                    ],
                    providers: [],
                    exports: [RelatedPostPagesTabsComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1wb3N0LXBhZ2VzLXRhYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvYmxvY2tzL2NvbXBvbmVudHMvcmVsYXRlZC1wb3N0LXBhZ2VzLXRhYnMvcmVsYXRlZC1wb3N0LXBhZ2VzLXRhYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQXNCcEYsTUFBTSxPQUFPLDBCQUEwQjs7d0hBQTFCLDBCQUEwQjt5SEFBMUIsMEJBQTBCLGlCQW5CdEIsNkJBQTZCLGFBRTFDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGlCQUFpQixhQUdULDZCQUE2Qjt5SEFFNUIsMEJBQTBCLFlBakJuQyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGVBQWU7UUFDZixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixpQkFBaUI7NEZBS1IsMEJBQTBCO2tCQXBCdEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDN0MsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aWNsZUNhcmRNb2R1bGUgfSBmcm9tIFwiLi8uLi9hcnRpY2xlLWNhcmQvYXJ0aWNsZS1jYXJkLm1vZHVsZVwiO1xuaW1wb3J0IHsgR3RtSWRQaXBlTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2d0bS9ndG0taWQubW9kdWxlXCI7XG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGFicy90YWJzLm1vZHVsZVwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGVcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tIFwibmctbGF6eWxvYWQtaW1hZ2VcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEdyYXBoUUxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vZ3JhcGhxbC5tb2R1bGVcIjtcbmltcG9ydCB7IEltYWdlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlL2ltYWdlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgUmVsYXRlZFBvc3RQYWdlc1RhYnNDb21wb25lbnQgfSBmcm9tIFwiLi9yZWxhdGVkLXBvc3QtcGFnZXMtdGFicy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUmVsYXRlZFBvc3RQYWdlc1RhYnNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEltYWdlTW9kdWxlLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUsXG4gICAgVGFic01vZHVsZSxcbiAgICBHdG1JZFBpcGVNb2R1bGUsXG4gICAgR3JhcGhRTE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIExhenlMb2FkSW1hZ2VNb2R1bGUsXG4gICAgQXJ0aWNsZUNhcmRNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtSZWxhdGVkUG9zdFBhZ2VzVGFic0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlbGF0ZWRQb3N0UGFnZXNUYWJzTW9kdWxlIHt9XG4iXX0=