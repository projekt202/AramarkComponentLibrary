import { RouterModule } from "@angular/router";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { FwHeroComponent } from "./fw-hero.component";
import * as i0 from "@angular/core";
export class FwHeroModule {
}
FwHeroModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FwHeroModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FwHeroModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: FwHeroModule, declarations: [FwHeroComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        IconModule,
        RouterModule,
        LazyLoadImageModule], exports: [FwHeroComponent] });
FwHeroModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FwHeroModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        ButtonModule,
        IconModule,
        RouterModule,
        LazyLoadImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FwHeroModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FwHeroComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        ButtonModule,
                        IconModule,
                        RouterModule,
                        LazyLoadImageModule,
                    ],
                    providers: [],
                    exports: [FwHeroComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnctaGVyby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9ibG9ja3MvY29tcG9uZW50cy9mdy1oZXJvL2Z3LWhlcm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFnQnRELE1BQU0sT0FBTyxZQUFZOzswR0FBWixZQUFZOzJHQUFaLFlBQVksaUJBYlIsZUFBZSxhQUU1QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixtQkFBbUIsYUFHWCxlQUFlOzJHQUVkLFlBQVksWUFYckIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7UUFDVixZQUFZO1FBQ1osbUJBQW1COzRGQUtWLFlBQVk7a0JBZHhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tIFwibmctbGF6eWxvYWQtaW1hZ2VcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IFNhbml0aXplUGlwZU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlXCI7XG5pbXBvcnQgeyBGd0hlcm9Db21wb25lbnQgfSBmcm9tIFwiLi9mdy1oZXJvLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGd0hlcm9Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbRndIZXJvQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRndIZXJvTW9kdWxlIHt9XG4iXX0=