import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgxAusDesignSystemModule } from "projects/ngx-aus-design-system/src/lib/ngx-aus-design-system.module";
import { BrowserModule } from "@angular/platform-browser";
import { PageLayoutComponent } from "./documentation/components/page-layout/page-layout.component";
import { ColorsComponent } from "./documentation/pages/colors/colors.component";
import { PageSectionComponent } from './documentation/components/page-section/page-section.component';
import { AccessibilityPreviewComponent } from './documentation/components/accessibility-preview/accessibility-preview.component';
import { TypographyComponent } from './documentation/pages/typography/typography.component';
import { SpacingComponent } from './documentation/pages/spacing/spacing.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, PageLayoutComponent, ColorsComponent, PageSectionComponent, AccessibilityPreviewComponent, TypographyComponent, SpacingComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgxAusDesignSystemModule, BrowserAnimationsModule],
})
export class AppModule {}
