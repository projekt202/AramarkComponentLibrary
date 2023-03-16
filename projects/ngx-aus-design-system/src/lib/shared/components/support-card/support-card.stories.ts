import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Array2StringPipe } from '../../pipes/array2string/array2string.pipe';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { TypographyComponent } from '../typography/typography.component';

import { SupportCardComponent } from './support-card.component';

export default {
  title: 'Support Card',
  component: SupportCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        SupportCardComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        IconComponent,
      ],
      imports: [LazyLoadImageModule],
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

const Template: Story<SupportCardComponent> = (args: SupportCardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'https://api.lorem.space/image?w=300&h=300',
  pretitle: 'Prospective Customer',
  title: 'Talk to a member of our sales team',
  text: 'We’ll discuss your needs and help you find the right product delivery services for you.',
  btn: {
    target: '_blank',
    title: 'Contact Sales',
    url: 'https://www.google.com',
    variant: 'red',
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  pretitle: 'Prospective Customer',
  title: 'Talk to a member of our sales team',
  text: 'We’ll discuss your needs and help you find the right product delivery services for you.',
  icon: {
    name: 'box',
  },
  btn: {
    target: '_blank',
    title: 'Contact Sales',
    url: 'https://www.google.com',
    variant: 'red',
  },
};

export const WithSecondaryButton = Template.bind({});
WithSecondaryButton.args = {
  imgUrl: 'https://api.lorem.space/image?w=300&h=300',
  title: 'Talk to a member of our sales team',
  text: 'We’ll discuss your needs and help you find the right product delivery services for you.',
  btn: {
    target: '_blank',
    title: 'Contact Sales',
    url: 'https://www.google.com',
    variant: 'red',
  },
  secondaryBtn: {
    target: '_blank',
    title: 'View & Pay Invoices',
    url: 'https://www.google.com',
    variant: 'outline',
  },
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Talk to a member of our sales team',
  text: 'We’ll discuss your needs and help you find the right product delivery services for you.',
  btn: {
    target: '_blank',
    title: 'Contact Sales',
    url: 'https://www.google.com',
    variant: 'red',
  },
};

export const NoText = Template.bind({});
NoText.args = {
  imgUrl: 'https://api.lorem.space/image?w=300&h=300',
  btn: {
    target: '_blank',
    title: 'Contact Sales',
    url: 'https://www.google.com',
    variant: 'red',
  },
};
