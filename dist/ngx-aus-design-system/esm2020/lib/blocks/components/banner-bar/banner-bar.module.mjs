import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { ArrowLinkModule } from "./../../../shared/components/arrow-link/arrow-link.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { BannerBarComponent } from "./banner-bar.component";
import * as i0 from "@angular/core";
export class BannerBarModule {
}
BannerBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BannerBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BannerBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: BannerBarModule, declarations: [BannerBarComponent], imports: [CommonModule,
        TypographyModule,
        IconModule,
        SanitizePipeModule,
        ButtonModule,
        ArrowLinkModule,
        WysiwygModule], exports: [BannerBarComponent] });
BannerBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BannerBarModule, imports: [CommonModule,
        TypographyModule,
        IconModule,
        SanitizePipeModule,
        ButtonModule,
        ArrowLinkModule,
        WysiwygModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BannerBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BannerBarComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        IconModule,
                        SanitizePipeModule,
                        ButtonModule,
                        ArrowLinkModule,
                        WysiwygModule,
                    ],
                    providers: [],
                    exports: [BannerBarComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9ibG9ja3MvY29tcG9uZW50cy9iYW5uZXItYmFyL2Jhbm5lci1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDNUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFnQjVELE1BQU0sT0FBTyxlQUFlOzs2R0FBZixlQUFlOzhHQUFmLGVBQWUsaUJBYlgsa0JBQWtCLGFBRS9CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWEsYUFHTCxrQkFBa0I7OEdBRWpCLGVBQWUsWUFYeEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTs0RkFLSixlQUFlO2tCQWQzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFd5c2l3eWdNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy93eXNpd3lnL3d5c2l3eWcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcnJvd0xpbmtNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9hcnJvdy1saW5rL2Fycm93LWxpbmsubW9kdWxlXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGVcIjtcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgQmFubmVyQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFubmVyLWJhci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmFubmVyQmFyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUeXBvZ3JhcGh5TW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBBcnJvd0xpbmtNb2R1bGUsXG4gICAgV3lzaXd5Z01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0Jhbm5lckJhckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckJhck1vZHVsZSB7fVxuIl19