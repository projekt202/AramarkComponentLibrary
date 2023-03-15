import { Array2StringPipe } from "./../../../../../projects/ngx-aus-design-system/src/lib/shared/pipes/array2string/array2string.pipe";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

import { TypographyComponent } from "projects/ngx-aus-design-system/src/lib/shared/components/typography/typography.component";
import { WysiwygComponent } from "projects/ngx-aus-design-system/src/lib/shared/components/wysiwyg/wysiwyg.component";
import { SanitizePipe } from "projects/ngx-aus-design-system/src/lib/shared/pipes/sanitize/sanitize.pipe";
import { PageSectionComponent } from "../../components/page-section/page-section.component";
import { PageLayoutComponent } from "../../components/page-layout/page-layout.component";
import { TypographyComponent as TC } from "./typography.component";

export default {
  title: "Style Guide/Typography",
  component: TC,
  decorators: [
    moduleMetadata({
      declarations: [
        PageLayoutComponent,
        PageSectionComponent,
        TypographyComponent,
        SanitizePipe,
        WysiwygComponent,
        Array2StringPipe,
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TC> = (args: TC) => ({
  props: args,
});

export const Presets = Template.bind({});
Presets.args = {};
