import { Array2StringPipe } from "./../../../../../projects/ngx-aus-design-system/src/lib/shared/pipes/array2string/array2string.pipe";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

import { WysiwygComponent } from "projects/ngx-aus-design-system/src/lib/shared/components/wysiwyg/wysiwyg.component";
import { SanitizePipe } from "projects/ngx-aus-design-system/src/lib/shared/pipes/sanitize/sanitize.pipe";
import { PageSectionComponent } from "../../components/page-section/page-section.component";
import { PageLayoutComponent } from "../../components/page-layout/page-layout.component";
import { TypographyComponent } from "projects/ngx-aus-design-system/src/public-api";
import { SpacingComponent } from "./spacing.component";

export default {
  title: "Style Guide/Spacing",
  component: SpacingComponent,
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

const Template: Story<SpacingComponent> = (args: SpacingComponent) => ({
  props: args,
});

export const Blocks = Template.bind({});
Blocks.args = {
  story: "blocks",
};

export const Grid = Template.bind({});
Grid.args = {
  story: "grid",
};
