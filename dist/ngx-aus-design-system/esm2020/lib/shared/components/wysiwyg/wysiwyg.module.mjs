import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SanitizePipeModule } from "../../pipes/sanitize/sanitize.module";
import { WysiwygComponent } from "./wysiwyg.component";
import * as i0 from "@angular/core";
export class WysiwygModule {
}
WysiwygModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WysiwygModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WysiwygModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: WysiwygModule, declarations: [WysiwygComponent], imports: [CommonModule, RouterModule, SanitizePipeModule], exports: [WysiwygComponent] });
WysiwygModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WysiwygModule, imports: [CommonModule, RouterModule, SanitizePipeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WysiwygModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [WysiwygComponent],
                    imports: [CommonModule, RouterModule, SanitizePipeModule],
                    providers: [],
                    exports: [WysiwygComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXd5Zy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy93eXNpd3lnL3d5c2l3eWcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFRdkQsTUFBTSxPQUFPLGFBQWE7OzJHQUFiLGFBQWE7NEdBQWIsYUFBYSxpQkFMVCxnQkFBZ0IsYUFDckIsWUFBWSxFQUFFLFlBQVksRUFBRSxrQkFBa0IsYUFFOUMsZ0JBQWdCOzRHQUVmLGFBQWEsWUFKZCxZQUFZLEVBQUUsWUFBWSxFQUFFLGtCQUFrQjs0RkFJN0MsYUFBYTtrQkFOekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxrQkFBa0IsQ0FBQztvQkFDekQsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2FuaXRpemVQaXBlTW9kdWxlIH0gZnJvbSBcIi4uLy4uL3BpcGVzL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZVwiO1xuaW1wb3J0IHsgV3lzaXd5Z0NvbXBvbmVudCB9IGZyb20gXCIuL3d5c2l3eWcuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1d5c2l3eWdDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFNhbml0aXplUGlwZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtXeXNpd3lnQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgV3lzaXd5Z01vZHVsZSB7fVxuIl19