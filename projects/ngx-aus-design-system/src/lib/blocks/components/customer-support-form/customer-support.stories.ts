import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { NgxMaskModule } from "ngx-mask";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CheckboxComponent } from "../../../shared/components/checkbox/checkbox.component";
import { DropdownComponent } from "../../../shared/components/dropdown/dropdown.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { InputComponent } from "../../../shared/components/input/input.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { CustomerSupportFormComponent } from "./customer-support-form.component";

export default {
  title: "Customer Support Form",
  component: CustomerSupportFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        SanitizePipe,
        InputComponent,
        IconComponent,
        ButtonComponent,
        CheckboxComponent,
        DropdownComponent,
      ],
      imports: [
        FormsModule,
        NgSelectModule,
        HttpClientModule,
        GoogleTagManagerModule,
        NgxMaskModule.forRoot(),
      ],
      providers: [{ provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" }],
    }),
  ],
} as Meta;

const Template: Story<CustomerSupportFormComponent> = (
  args: CustomerSupportFormComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
