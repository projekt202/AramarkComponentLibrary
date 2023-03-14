import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgxAusDesignSystemModule } from "projects/ngx-aus-design-system/src/lib/ngx-aus-design-system.module";
import { BrowserModule } from "@angular/platform-browser";
import { PageLayoutComponent } from "./documentation/components/page-layout/page-layout.component";
import { ColorsComponent } from "./documentation/pages/colors/colors.component";
import { PageSectionComponent } from './documentation/components/page-section/page-section.component';
import { AccessibilityPreviewComponent } from './documentation/components/accessibility-preview/accessibility-preview.component';

@NgModule({
  declarations: [AppComponent, PageLayoutComponent, ColorsComponent, PageSectionComponent, AccessibilityPreviewComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgxAusDesignSystemModule],
})
export class AppModule {}
