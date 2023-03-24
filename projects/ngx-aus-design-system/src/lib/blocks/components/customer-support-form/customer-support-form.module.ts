import { InputComponent } from "./../../../shared/components/input/input.component";
import { NgxMaskModule } from "ngx-mask";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { HttpClientModule } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "./../../../shared/components/dropdown/dropdown.module";
import { CheckboxModule } from "./../../../shared/components/checkbox/checkbox.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { InputModule } from "./../../../shared/components/input/input.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { CustomerSupportFormComponent } from "./customer-support-form.component";

@NgModule({
  declarations: [CustomerSupportFormComponent],
  imports: [
    CommonModule,
    /* TypographyModule,
    SanitizePipeModule, */
    InputComponent,
    IconModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    GoogleTagManagerModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  exports: [CustomerSupportFormComponent],
})
export class CustomerSupportFormModule {}
