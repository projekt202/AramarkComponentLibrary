import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ArrowLinkModule } from "../arrow-link/arrow-link.module";
import { TypographyModule } from "../typography/typography.module";
import { FullwidthImageCardComponent } from "./fullwidth-image-card.component";
import * as i0 from "@angular/core";
export class FullwidthImageCardModule {
}
FullwidthImageCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FullwidthImageCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FullwidthImageCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: FullwidthImageCardModule, declarations: [FullwidthImageCardComponent], imports: [CommonModule,
        LazyLoadImageModule,
        TypographyModule,
        ArrowLinkModule], exports: [FullwidthImageCardComponent] });
FullwidthImageCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FullwidthImageCardModule, imports: [CommonModule,
        LazyLoadImageModule,
        TypographyModule,
        ArrowLinkModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FullwidthImageCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FullwidthImageCardComponent],
                    imports: [
                        CommonModule,
                        LazyLoadImageModule,
                        TypographyModule,
                        ArrowLinkModule,
                    ],
                    providers: [],
                    exports: [FullwidthImageCardComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHdpZHRoLWltYWdlLWNhcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvZnVsbHdpZHRoLWltYWdlLWNhcmQvZnVsbHdpZHRoLWltYWdlLWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFhL0UsTUFBTSxPQUFPLHdCQUF3Qjs7c0hBQXhCLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQVZwQiwyQkFBMkIsYUFFeEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZSxhQUdQLDJCQUEyQjt1SEFFMUIsd0JBQXdCLFlBUmpDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGVBQWU7NEZBS04sd0JBQXdCO2tCQVhwQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUMzQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZU1vZHVsZSB9IGZyb20gXCJuZy1sYXp5bG9hZC1pbWFnZVwiO1xuaW1wb3J0IHsgQXJyb3dMaW5rTW9kdWxlIH0gZnJvbSBcIi4uL2Fycm93LWxpbmsvYXJyb3ctbGluay5tb2R1bGVcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZVwiO1xuaW1wb3J0IHsgRnVsbHdpZHRoSW1hZ2VDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZnVsbHdpZHRoLWltYWdlLWNhcmQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Z1bGx3aWR0aEltYWdlQ2FyZENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTGF6eUxvYWRJbWFnZU1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIEFycm93TGlua01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0Z1bGx3aWR0aEltYWdlQ2FyZENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGx3aWR0aEltYWdlQ2FyZE1vZHVsZSB7fVxuIl19