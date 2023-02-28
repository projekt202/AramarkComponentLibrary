import { Story, Meta } from '@storybook/angular';

import { PaginationComponent } from './pagination.component';

export default {
  title: 'Pagination',
  component: PaginationComponent,
} as Meta;

const Template: Story<PaginationComponent> = (args: PaginationComponent) => ({
  props: args,
});

export const Enabled = Template.bind({});
Enabled.args = {
  totalCount: 20,
  pageSize: 7,
  rulerLength: 7,
};

export const Disabled = Template.bind({});
Disabled.args = {
  totalCount: 20,
  pageSize: 3,
  rulerLength: 3,
  disabled: true,
};
