import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IconModule } from "../icon/icon.module";
import { IconButtonComponent } from "./icon-button.component";

@NgModule({
  declarations: [IconButtonComponent],
  imports: [CommonModule, RouterModule, IconModule],
  providers: [],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
