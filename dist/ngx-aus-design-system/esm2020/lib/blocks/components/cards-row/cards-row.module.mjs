import { SwiperModule } from "swiper/angular";
import { RouterModule } from "@angular/router";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { CardModule } from "../../../shared/components/card/card.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { CardsRowComponent } from "./cards-row.component";
import * as i0 from "@angular/core";
export class CardsRowModule {
}
CardsRowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CardsRowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardsRowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CardsRowModule, declarations: [CardsRowComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        CardModule,
        CarouselModule,
        RouterModule,
        SwiperModule], exports: [CardsRowComponent] });
CardsRowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CardsRowModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        IconModule,
        ButtonModule,
        CardModule,
        CarouselModule,
        RouterModule,
        SwiperModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CardsRowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardsRowComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        IconModule,
                        ButtonModule,
                        CardModule,
                        CarouselModule,
                        RouterModule,
                        SwiperModule,
                    ],
                    providers: [],
                    exports: [CardsRowComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMtcm93Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2NhcmRzLXJvdy9jYXJkcy1yb3cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQWtCMUQsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYyxpQkFmVixpQkFBaUIsYUFFOUIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixVQUFVO1FBQ1YsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZLGFBR0osaUJBQWlCOzZHQUVoQixjQUFjLFlBYnZCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osVUFBVTtRQUNWLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWTs0RkFLSCxjQUFjO2tCQWhCMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXBlck1vZHVsZSB9IGZyb20gXCJzd2lwZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlXCI7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGVcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGVcIjtcbmltcG9ydCB7IENhcmRzUm93Q29tcG9uZW50IH0gZnJvbSBcIi4vY2FyZHMtcm93LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDYXJkc1Jvd0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHlwb2dyYXBoeU1vZHVsZSxcbiAgICBTYW5pdGl6ZVBpcGVNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgU3dpcGVyTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbQ2FyZHNSb3dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkc1Jvd01vZHVsZSB7fVxuIl19