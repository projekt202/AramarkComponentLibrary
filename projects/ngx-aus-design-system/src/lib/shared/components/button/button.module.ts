import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { IconModule } from "../icon/icon.module";
import { ButtonComponent } from "./button.component";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, NgxSmoothScrollModule, RouterModule, IconModule],
  providers: [],
  exports: [ButtonComponent],
})
export class ButtonModule {}
