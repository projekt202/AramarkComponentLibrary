import { RouterTestingModule } from '@angular/router/testing';
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Array2StringPipe } from '../../pipes/array2string/array2string.pipe';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago/time-ago.pipe';
import { IconComponent } from '../icon/icon.component';
import { TypographyComponent } from '../typography/typography.component';
import { CustomerCardComponent } from './customer-card.component';

export default {
  title: 'Customer Card',
  component: CustomerCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CustomerCardComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
        TimeAgoPipe,
      ],
      imports: [RouterTestingModule, LazyLoadImageModule],
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

const Template: Story<CustomerCardComponent> = (
  args: CustomerCardComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'https://api.lorem.space/image?w=405&h=232',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  author: {
    name: 'Bob Miller',
    title: 'Vice President',
  },
  route: '/test',
};

export const Centered = Template.bind({});
Centered.args = {
  variant: 'center',
  imgUrl: 'https://api.lorem.space/image?w=405&h=232',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  author: {
    name: 'Bob Miller',
    title: 'Vice President',
  },
  href: 'https://www.google.com',
};

export const DefaultWithRating = Template.bind({});
DefaultWithRating.args = {
  imgUrl: 'https://api.lorem.space/image?w=405&h=232',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  author: {
    name: 'Bob Miller',
    title: 'Vice President',
  },
  route: '/test',
  rating: 4,
  date: '2022/08/01',
};

export const CenteredWithRating = Template.bind({});
CenteredWithRating.args = {
  variant: 'center',
  imgUrl: 'https://api.lorem.space/image?w=405&h=232',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  author: {
    name: 'Bob Miller',
    title: 'Vice President',
  },
  href: 'https://www.google.com',
  rating: 5,
  date: '2022/01/31',
};

export const CenteredWithRatingNoAuthor = Template.bind({});
CenteredWithRatingNoAuthor.args = {
  variant: 'center',
  imgUrl: 'https://api.lorem.space/image?w=405&h=232',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  href: 'https://www.google.com',
  rating: 5,
  date: '2022/01/31',
};

export const WithRatingNoImage = Template.bind({});
WithRatingNoImage.args = {
  variant: 'left',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  href: 'https://www.google.com',
  rating: 5,
  date: '2022/01/31',
};

export const NoImage = Template.bind({});
NoImage.args = {
  variant: 'left',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  href: 'https://www.google.com',
};

export const CenterLeft = Template.bind({});
CenterLeft.args = {
  variant: 'center-left',
  imgUrl: 'https://api.lorem.space/image?w=405&h=232',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  author: {
    name: 'Bob Miller',
    title: 'Vice President',
  },
  route: '/test',
  rating: 5,
  date: '2022/01/31',
};

export const LeftCenter = Template.bind({});
LeftCenter.args = {
  variant: 'left-center',
  imgUrl: 'https://api.lorem.space/image?w=405&h=232',
  title: 'Toyota of Huntington Beach',
  text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
  author: {
    name: 'Bob Miller',
    title: 'Vice President',
  },
  route: '/test',
  rating: 5,
  date: '2022/01/31',
};
