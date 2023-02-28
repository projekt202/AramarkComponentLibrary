import { TimeAgoPipeModule } from "./../../pipes/time-ago/time-ago.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { CustomerCardComponent } from "./customer-card.component";

@NgModule({
  declarations: [CustomerCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    TypographyModule,
    IconModule,
    TimeAgoPipeModule,
  ],
  providers: [],
  exports: [CustomerCardComponent],
})
export class CustomerCardModule {}
