import { LazyLoadImageModule } from "ng-lazyload-image";
import { RouterModule } from "@angular/router";
import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { ArticleCardComponent } from "./article-card.component";
import * as i0 from "@angular/core";
export class ArticleCardModule {
}
ArticleCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ArticleCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArticleCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: ArticleCardModule, declarations: [ArticleCardComponent], imports: [CommonModule,
        TypographyModule,
        IconModule,
        SanitizePipeModule,
        ButtonModule,
        ImageModule,
        RouterModule,
        LazyLoadImageModule], exports: [ArticleCardComponent] });
ArticleCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ArticleCardModule, providers: [DatePipe], imports: [CommonModule,
        TypographyModule,
        IconModule,
        SanitizePipeModule,
        ButtonModule,
        ImageModule,
        RouterModule,
        LazyLoadImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ArticleCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArticleCardComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        IconModule,
                        SanitizePipeModule,
                        ButtonModule,
                        ImageModule,
                        RouterModule,
                        LazyLoadImageModule,
                    ],
                    providers: [DatePipe],
                    exports: [ArticleCardComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1jYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBaUJoRSxNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBZGIsb0JBQW9CLGFBRWpDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUIsYUFHWCxvQkFBb0I7Z0hBRW5CLGlCQUFpQixhQUhqQixDQUFDLFFBQVEsQ0FBQyxZQVRuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1COzRGQUtWLGlCQUFpQjtrQkFmN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ3JCLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tIFwibmctbGF6eWxvYWQtaW1hZ2VcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEltYWdlTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IEFydGljbGVDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZS1jYXJkLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcnRpY2xlQ2FyZENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHlwb2dyYXBoeU1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgSW1hZ2VNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExhenlMb2FkSW1hZ2VNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW0RhdGVQaXBlXSxcbiAgZXhwb3J0czogW0FydGljbGVDYXJkQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUNhcmRNb2R1bGUge31cbiJdfQ==