import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { GtmIdPipeModule } from "../../pipes/gtm/gtm-id.module";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { TabsComponent } from "./tabs.component";

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    TypographyModule,
    GtmIdPipeModule,
    IconModule,
  ],
  providers: [],
  exports: [TabsComponent],
})
export class TabsModule {}
