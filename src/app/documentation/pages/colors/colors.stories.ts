import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

import { TypographyComponent } from "projects/ngx-aus-design-system/src/lib/shared/components/typography/typography.component";
import { AccessibilityPreviewComponent } from "./../../components/accessibility-preview/accessibility-preview.component";
import { WysiwygComponent } from "projects/ngx-aus-design-system/src/lib/shared/components/wysiwyg/wysiwyg.component";
import { SanitizePipe } from "projects/ngx-aus-design-system/src/lib/shared/pipes/sanitize/sanitize.pipe";
import { PageSectionComponent } from "./../../components/page-section/page-section.component";
import { PageLayoutComponent } from "./../../components/page-layout/page-layout.component";
import { ColorsComponent } from "./colors.component";

export default {
  title: "Style Guide/Colors",
  component: ColorsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        PageLayoutComponent,
        PageSectionComponent,
        TypographyComponent,
        SanitizePipe,
        WysiwygComponent,
        AccessibilityPreviewComponent,
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ColorsComponent> = (args: ColorsComponent) => ({
  props: args,
});

export const Definitions = Template.bind({});
Definitions.args = {};
