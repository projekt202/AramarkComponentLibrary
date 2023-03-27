import { ButtonComponent } from "../button/button.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, NativeDateAdapter } from "@angular/material/core";
import { Array2StringPipe } from "../../pipes/array2string/array2string.pipe";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";
import { NgxMaskModule } from "ngx-mask";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";
import { TypographyComponent } from "../typography/typography.component";

import { FormInputComponent } from "./form-input.component";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

export default {
  title: "Components/Shared/Form Input",
  component: FormInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FormInputComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
      ],
      providers: [NativeDateAdapter, NativeDateAdapter],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule,
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col u-6/12@md">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<FormInputComponent> = (args: FormInputComponent) => {
  const form = new FormGroup({});
  const model = {
    firstName: "Mario",
    lastName: "Lopez",
    email: "mario.lopez@aramark.com",
    recoveryEmail: "",
    phone: "",
    date: "",
  };
  const fields: FormlyFieldConfig[] = [
    {
      key: "firstName",
      type: FormInputComponent,
      props: {
        name: "firstName",
        maxLength: 100,
        isRequired: true,
        isDisabled: false,
        label: "First Name",
        validationErrorMsg: "This field is required.",
        placeholder: "",
        size: "medium",
      },
    },
    {
      key: "lastName",
      type: FormInputComponent,
      props: {
        name: "lastName",
        maxLength: 100,
        isRequired: true,
        isDisabled: false,
        label: "Last Name",
        validationErrorMsg: "This field is required.",
        placeholder: "",
        size: "medium",
      },
    },
    {
      key: "email",
      type: FormInputComponent,
      props: {
        name: "email",
        maxLength: 100,
        isRequired: true,
        isDisabled: false,
        label: "Email",
        validationErrorMsg: "This field is required.",
        placeholder: "first.last@aramark.com",
        size: "medium",
      },
    },
    {
      key: "recoveryEmail",
      type: FormInputComponent,
      props: {
        name: "email",
        maxLength: 100,
        isRequired: false,
        isDisabled: false,
        label: "Email",
        placeholder: "first.last@provider.com",
        size: "medium",
      },
    },
    {
      key: "phone",
      type: FormInputComponent,
      props: {
        name: "phoneNumber",
        maxLength: 100,
        isRequired: false,
        isDisabled: false,
        label: "Phone Number",
        placeholder: "(555)555-5555",
        size: "medium",
        type: "phone",
      },
    },
    {
      key: "date",
      type: FormInputComponent,
      props: {
        name: "date",
        label: "Date",
        size: "medium",
        placeholder: "Date",
        datepicker: true,
      },
    },
  ];
  const onSubmit = (model: any) => {
    console.log(model);
  };
  return {
    props: {
      ...args,
      keypress: () => {},
      valueChange: () => {},
      form,
      model,
      fields,
      onSubmit,
    },
    template: `
      <form [formGroup]="form" (ngSubmit)="onSubmit(model)">
        <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
        <br />
        <aus-button [useButton]="true" type="submit" text="Submit"></aus-button>
      </form>
    `,
  };
};

export const Default = Template.bind({});
Default.args = {};
