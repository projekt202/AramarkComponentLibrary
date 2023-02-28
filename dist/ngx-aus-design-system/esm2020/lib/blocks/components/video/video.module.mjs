import { TippyModule, tooltipVariation, popperVariation, } from "@ngneat/helipopper";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { VideoComponent } from "./video.component";
import { YouTubePlayerModule } from "@angular/youtube-player";
import * as i0 from "@angular/core";
import * as i1 from "@ngneat/helipopper";
export class VideoModule {
}
VideoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VideoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VideoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VideoModule, declarations: [VideoComponent], imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        YouTubePlayerModule, i1.TippyModule], exports: [VideoComponent] });
VideoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VideoModule, imports: [CommonModule,
        TypographyModule,
        SanitizePipeModule,
        YouTubePlayerModule,
        TippyModule.forRoot({
            defaultVariation: "tooltip",
            variations: {
                tooltip: tooltipVariation,
                popper: popperVariation,
            },
        })] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VideoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VideoComponent],
                    imports: [
                        CommonModule,
                        TypographyModule,
                        SanitizePipeModule,
                        YouTubePlayerModule,
                        TippyModule.forRoot({
                            defaultVariation: "tooltip",
                            variations: {
                                tooltip: tooltipVariation,
                                popper: popperVariation,
                            },
                        }),
                    ],
                    providers: [],
                    exports: [VideoComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvYmxvY2tzL2NvbXBvbmVudHMvdmlkZW8vdmlkZW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQW9COUQsTUFBTSxPQUFPLFdBQVc7O3lHQUFYLFdBQVc7MEdBQVgsV0FBVyxpQkFqQlAsY0FBYyxhQUUzQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUIsNkJBVVgsY0FBYzswR0FFYixXQUFXLFlBZnBCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixXQUFXLENBQUMsT0FBTyxDQUFDO1lBQ2xCLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE1BQU0sRUFBRSxlQUFlO2FBQ3hCO1NBQ0YsQ0FBQzs0RkFLTyxXQUFXO2tCQWxCdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLFdBQVcsQ0FBQyxPQUFPLENBQUM7NEJBQ2xCLGdCQUFnQixFQUFFLFNBQVM7NEJBQzNCLFVBQVUsRUFBRTtnQ0FDVixPQUFPLEVBQUUsZ0JBQWdCO2dDQUN6QixNQUFNLEVBQUUsZUFBZTs2QkFDeEI7eUJBQ0YsQ0FBQztxQkFDSDtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVtZW50Q2FyZE1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zdGF0ZW1lbnQtY2FyZC9zdGF0ZW1lbnQtY2FyZC5tb2R1bGVcIjtcbmltcG9ydCB7XG4gIFRpcHB5TW9kdWxlLFxuICB0b29sdGlwVmFyaWF0aW9uLFxuICBwb3BwZXJWYXJpYXRpb24sXG59IGZyb20gXCJAbmduZWF0L2hlbGlwb3BwZXJcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgVmlkZW9Db21wb25lbnQgfSBmcm9tIFwiLi92aWRlby5jb21wb25lbnRcIjtcbmltcG9ydCB7IFlvdVR1YmVQbGF5ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIveW91dHViZS1wbGF5ZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVmlkZW9Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgU2FuaXRpemVQaXBlTW9kdWxlLFxuICAgIFlvdVR1YmVQbGF5ZXJNb2R1bGUsXG4gICAgVGlwcHlNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBkZWZhdWx0VmFyaWF0aW9uOiBcInRvb2x0aXBcIixcbiAgICAgIHZhcmlhdGlvbnM6IHtcbiAgICAgICAgdG9vbHRpcDogdG9vbHRpcFZhcmlhdGlvbixcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJWYXJpYXRpb24sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbVmlkZW9Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBWaWRlb01vZHVsZSB7fVxuIl19