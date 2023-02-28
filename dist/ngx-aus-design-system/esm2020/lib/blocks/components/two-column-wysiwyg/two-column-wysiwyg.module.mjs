import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArrowLinkModule } from "./../../../shared/components/arrow-link/arrow-link.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { SupportCardModule } from "./../../../shared/components/support-card/support-card.module";
import { FullwidthImageCardModule } from "./../../../shared/components/fullwidth-image-card/fullwidth-image-card.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { TwoColumnWysiwygComponent } from "./two-column-wysiwyg.component";
import * as i0 from "@angular/core";
export class TwoColumnWysiwygModule {
}
TwoColumnWysiwygModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnWysiwygModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TwoColumnWysiwygModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnWysiwygModule, declarations: [TwoColumnWysiwygComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        WysiwygModule,
        ImageModule,
        SupportCardModule,
        FullwidthImageCardModule,
        ButtonModule,
        IconModule,
        ArrowLinkModule,
        LazyLoadImageModule], exports: [TwoColumnWysiwygComponent] });
TwoColumnWysiwygModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnWysiwygModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        WysiwygModule,
        ImageModule,
        SupportCardModule,
        FullwidthImageCardModule,
        ButtonModule,
        IconModule,
        ArrowLinkModule,
        LazyLoadImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TwoColumnWysiwygModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TwoColumnWysiwygComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        WysiwygModule,
                        ImageModule,
                        SupportCardModule,
                        FullwidthImageCardModule,
                        ButtonModule,
                        IconModule,
                        ArrowLinkModule,
                        LazyLoadImageModule,
                    ],
                    providers: [],
                    exports: [TwoColumnWysiwygComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvLWNvbHVtbi13eXNpd3lnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL3R3by1jb2x1bW4td3lzaXd5Zy90d28tY29sdW1uLXd5c2l3eWcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM1RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDekgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBb0IzRSxNQUFNLE9BQU8sc0JBQXNCOztvSEFBdEIsc0JBQXNCO3FIQUF0QixzQkFBc0IsaUJBakJsQix5QkFBeUIsYUFFdEMsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLG1CQUFtQixhQUdYLHlCQUF5QjtxSEFFeEIsc0JBQXNCLFlBZi9CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixtQkFBbUI7NEZBS1Ysc0JBQXNCO2tCQWxCbEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDekMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXp5TG9hZEltYWdlTW9kdWxlIH0gZnJvbSBcIm5nLWxhenlsb2FkLWltYWdlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEFycm93TGlua01vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Fycm93LWxpbmsvYXJyb3ctbGluay5tb2R1bGVcIjtcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBTdXBwb3J0Q2FyZE1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3N1cHBvcnQtY2FyZC9zdXBwb3J0LWNhcmQubW9kdWxlXCI7XG5pbXBvcnQgeyBGdWxsd2lkdGhJbWFnZUNhcmRNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9mdWxsd2lkdGgtaW1hZ2UtY2FyZC9mdWxsd2lkdGgtaW1hZ2UtY2FyZC5tb2R1bGVcIjtcbmltcG9ydCB7IEltYWdlTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlXCI7XG5pbXBvcnQgeyBXeXNpd3lnTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3lzaXd5Zy93eXNpd3lnLm1vZHVsZVwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGVcIjtcbmltcG9ydCB7IFNhbml0aXplUGlwZU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlXCI7XG5pbXBvcnQgeyBUd29Db2x1bW5XeXNpd3lnQ29tcG9uZW50IH0gZnJvbSBcIi4vdHdvLWNvbHVtbi13eXNpd3lnLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUd29Db2x1bW5XeXNpd3lnQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIFNhbml0aXplUGlwZU1vZHVsZSxcbiAgICBXeXNpd3lnTW9kdWxlLFxuICAgIEltYWdlTW9kdWxlLFxuICAgIFN1cHBvcnRDYXJkTW9kdWxlLFxuICAgIEZ1bGx3aWR0aEltYWdlQ2FyZE1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBBcnJvd0xpbmtNb2R1bGUsXG4gICAgTGF6eUxvYWRJbWFnZU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1R3b0NvbHVtbld5c2l3eWdDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUd29Db2x1bW5XeXNpd3lnTW9kdWxlIHt9XG4iXX0=