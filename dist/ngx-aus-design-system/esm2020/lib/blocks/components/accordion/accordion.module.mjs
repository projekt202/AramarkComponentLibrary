import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CollapsibleModule } from "angular2-collapsible";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyModule } from "./../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "./../../../shared/pipes/sanitize/sanitize.module";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { AccordionComponent } from "./accordion.component";
import * as i0 from "@angular/core";
export class AccordionModule {
}
AccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: AccordionModule, declarations: [AccordionComponent], imports: [CommonModule,
        IconModule,
        TypographyModule,
        WysiwygModule,
        SanitizePipeModule,
        BrowserAnimationsModule,
        CollapsibleModule,
        LazyLoadImageModule], exports: [AccordionComponent] });
AccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AccordionModule, imports: [CommonModule,
        IconModule,
        TypographyModule,
        WysiwygModule,
        SanitizePipeModule,
        BrowserAnimationsModule,
        CollapsibleModule,
        LazyLoadImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionComponent],
                    imports: [
                        CommonModule,
                        IconModule,
                        TypographyModule,
                        WysiwygModule,
                        SanitizePipeModule,
                        BrowserAnimationsModule,
                        CollapsibleModule,
                        LazyLoadImageModule,
                    ],
                    providers: [],
                    exports: [AccordionComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBaUIzRCxNQUFNLE9BQU8sZUFBZTs7NkdBQWYsZUFBZTs4R0FBZixlQUFlLGlCQWRYLGtCQUFrQixhQUUvQixZQUFZO1FBQ1osVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsbUJBQW1CLGFBR1gsa0JBQWtCOzhHQUVqQixlQUFlLFlBWnhCLFlBQVk7UUFDWixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixtQkFBbUI7NEZBS1YsZUFBZTtrQkFmM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tIFwibmctbGF6eWxvYWQtaW1hZ2VcIjtcbmltcG9ydCB7IENvbGxhcHNpYmxlTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXIyLWNvbGxhcHNpYmxlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlXCI7XG5pbXBvcnQgeyBTYW5pdGl6ZVBpcGVNb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlXCI7XG5pbXBvcnQgeyBXeXNpd3lnTW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3lzaXd5Zy93eXNpd3lnLm1vZHVsZVwiO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2FjY29yZGlvbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3JkaW9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgV3lzaXd5Z01vZHVsZSxcbiAgICBTYW5pdGl6ZVBpcGVNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29sbGFwc2libGVNb2R1bGUsXG4gICAgTGF6eUxvYWRJbWFnZU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0FjY29yZGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbk1vZHVsZSB7fVxuIl19