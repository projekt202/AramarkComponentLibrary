import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { GtmIdPipe } from '../../pipes/gtm/gtm-id.pipe';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { IconComponent } from '../icon/icon.component';
import { TypographyComponent } from '../typography/typography.component';

import { TabsComponent } from './tabs.component';

export default {
  title: 'Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TabsComponent,
        TypographyComponent,
        SanitizePipe,
        IconComponent,
        GtmIdPipe,
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  categories: [
    'Uniforms',
    'Floor Mats',
    'Restroom',
    'First Aid',
    'Towels',
    'Mops',
    'Linens',
    'Cleaning Chemicals',
  ],
};
