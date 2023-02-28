import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { CookieModule } from "ngx-cookie";
import { NgModule } from "@angular/core";
import { ArrowLinkModule } from "./../../../shared/components/arrow-link/arrow-link.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { WysiwygModule } from "../../../shared/components/wysiwyg/wysiwyg.module";
import { AlertBarComponent } from "./alert-bar.component";
import { GraphQLModule } from "../../../graphql.module";
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie";
export class AlertBarModule {
}
AlertBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AlertBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: AlertBarModule, declarations: [AlertBarComponent], imports: [CommonModule,
        TypographyModule,
        ArrowLinkModule,
        WysiwygModule,
        SanitizePipeModule,
        GraphQLModule,
        HttpClientModule, i1.CookieModule], exports: [AlertBarComponent] });
AlertBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AlertBarModule, imports: [CommonModule,
        TypographyModule,
        ArrowLinkModule,
        WysiwygModule,
        SanitizePipeModule,
        GraphQLModule,
        HttpClientModule,
        CookieModule.withOptions()] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AlertBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlertBarComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        ArrowLinkModule,
                        WysiwygModule,
                        SanitizePipeModule,
                        GraphQLModule,
                        HttpClientModule,
                        CookieModule.withOptions(),
                    ],
                    providers: [],
                    exports: [AlertBarComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2FsZXJ0LWJhci9hbGVydC1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQWlCeEQsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYyxpQkFkVixpQkFBaUIsYUFFOUIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZ0JBQWdCLDhCQUlSLGlCQUFpQjs2R0FFaEIsY0FBYyxZQVp2QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsWUFBWSxDQUFDLFdBQVcsRUFBRTs0RkFLakIsY0FBYztrQkFmMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsWUFBWSxDQUFDLFdBQVcsRUFBRTtxQkFDM0I7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29va2llTW9kdWxlIH0gZnJvbSBcIm5neC1jb29raWVcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQXJyb3dMaW5rTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYXJyb3ctbGluay9hcnJvdy1saW5rLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgV3lzaXd5Z01vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy93eXNpd3lnL3d5c2l3eWcubW9kdWxlXCI7XG5pbXBvcnQgeyBBbGVydEJhckNvbXBvbmVudCB9IGZyb20gXCIuL2FsZXJ0LWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdyYXBoUUxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vZ3JhcGhxbC5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWxlcnRCYXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgQXJyb3dMaW5rTW9kdWxlLFxuICAgIFd5c2l3eWdNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIEdyYXBoUUxNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb29raWVNb2R1bGUud2l0aE9wdGlvbnMoKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0FsZXJ0QmFyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRCYXJNb2R1bGUge31cbiJdfQ==