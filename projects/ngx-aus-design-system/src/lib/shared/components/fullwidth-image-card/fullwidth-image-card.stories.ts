import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Array2StringPipe } from '../../pipes/array2string/array2string.pipe';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { ArrowLinkComponent } from '../arrow-link/arrow-link.component';

import { TypographyComponent } from '../typography/typography.component';
import { FullwidthImageCardComponent } from './fullwidth-image-card.component';

export default {
  title: 'Fullwidth Image Card',
  component: FullwidthImageCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, SanitizePipe, Array2StringPipe, ArrowLinkComponent],
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

const Template: Story<FullwidthImageCardComponent> = (
  args: FullwidthImageCardComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'https://api.lorem.space/image?w=1366&h=470',
  title: 'John Zillmer',
  subtitle: 'Chief Executive Officer',
};

export const Link = Template.bind({});
Link.args = {
  imgUrl: 'https://api.lorem.space/image?w=1366&h=470',
  title: 'John Zillmer',
  subtitle: 'Chief Executive Officer',
  cta: {
    variant: 'link',
    config: {
      title: 'Learn more',
      url: 'https://www.google.com',
    },
  },
};

export const ArrowLink = Template.bind({});
ArrowLink.args = {
  imgUrl: 'https://api.lorem.space/image?w=1366&h=470',
  title: 'John Zillmer',
  subtitle: 'Chief Executive Officer',
  cta: {
    variant: 'arrow-link',
    config: {
      title: 'Learn more',
      url: 'https://www.google.com',
    },
  },
};

export const WithText = Template.bind({});
WithText.args = {
  imgUrl: 'https://api.lorem.space/image?w=1366&h=470',
  title: 'John Zillmer',
  subtitle: 'Chief Executive Officer',
  text: 'Deserunt non incididunt voluptate elit eu nostrud ex aliqua ad. Lorem ullamco aute culpa aliqua exercitation.',
  cta: {
    variant: 'link',
    config: {
      title: 'Learn more',
      url: 'https://www.google.com',
    },
  },
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  imgUrl: 'https://api.lorem.space/image?w=1366&h=470',
  title: 'John Zillmer',
};
