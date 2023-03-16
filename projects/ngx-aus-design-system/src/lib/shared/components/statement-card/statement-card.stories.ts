import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Array2StringPipe } from '../../pipes/array2string/array2string.pipe';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { IconComponent } from '../icon/icon.component';
import { TypographyComponent } from '../typography/typography.component';

import { StatementCardComponent } from './statement-card.component';

export default {
  title: 'Statement Card',
  component: StatementCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        StatementCardComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col u-6/12@md u-5/12@lg u-4/12@xl">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<StatementCardComponent> = (
  args: StatementCardComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: 'caring',
  title: 'Assess your needs',
  text: 'It starts with a conversation between you and an industry expert. We learn about your business and identify what services, products, and delivery cadence will have you operating at peak efficiency and set your business apart from the competition.',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: 'Assess your needs',
  text: 'It starts with a conversation between you and an industry expert. We learn about your business and identify what services, products, and delivery cadence will have you operating at peak efficiency and set your business apart from the competition.',
};
