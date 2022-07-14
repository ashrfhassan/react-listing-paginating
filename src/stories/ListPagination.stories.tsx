import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListPagination, {
  ListPaginationProps,
} from '@components/listPagination';

export default {
  title: 'List Pagination',
  component: ListPagination,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListPagination>;

const Template: ComponentStory<typeof ListPagination> = (
  args: ListPaginationProps
) => <ListPagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [],
  display: 'Grid',
  isLoading: false,
  pagination: {
    currentPage: 5,
    hasFirstLast: true,
    hasNextPrevious: true,
    itemsPerPage: 20,
    maxDisplayedNumbers: 6,
    totalPages: 10,
    styles: {
      numberCustomClass: 'btn-primary',
    },
  },
};
