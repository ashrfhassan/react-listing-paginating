import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListPagination, {
  ListPaginationProps,
} from '@components/listPagination';
import React from 'react';

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
  items: [
    ...Array.from(
      {
        length: 10,
      },
      (_, i) => i + 1
    ),
  ].map((val, index) => <div key={index}>Item {val}</div>),
  display: 'Grid',
  numberOfItemsPerRow: 2,
  isLoading: false,
  header: <div>this is header.</div>,
  footerLeftActions: <div>this is left footer.</div>,
  footerRightActions: <div>this is right footer.</div>,
  styles: {
    containerCustomClass: '',
    headerCustomClass: 'text-center',
    dataCustomClass: '',
    itemCustomClass: 'd-flex justify-content-center',
    footerCustomClass: '',
    footerPaginationClass: 'col-6',
    leftfooterClass: 'd-flex justify-content-center',
    rightfooterClass: 'd-flex justify-content-center',
  },
  pagination: {
    position: 'center',
    totalPages: 10,
    currentPage: 5,
    itemsPerPage: 20,
    maxDisplayedNumbers: 6,
    hasFirstLast: true,
    hasNextPrevious: true,
    previousContent: 'previous',
    nextContent: 'next',
    firstContent: 'first',
    lastContent: 'last',
    changePage: async (pageNumber: number) => {
      // api call using pageNumber
    },
    firstPage: async (pageNumber: number) => {
      // api call using pageNumber
    },
    lastPage: async (pageNumber: number) => {
      // api call using pageNumber
    },
    previousPage: async (pageNumber: number) => {
      // api call using pageNumber
    },
    nextPage: async (pageNumber: number) => {
      // api call using pageNumber
    },
    firstProps: {
      title: 'First page',
    },
    lastProps: {
      title: 'Last page',
    },
    previousProps: {
      title: 'Previous page',
    },
    nextProps: {
      title: 'Next page',
    },
    numberProps: {
      onMouseLeave: () => {
        console.log('Mouse left');
      },
    },
    styles: {
      numberCustomClass: 'btn-primary',
      firstCustomClass: 'btn-primary',
      lastCustomClass: 'btn-primary',
      previousCustomClass: 'btn-primary',
      nextCustomClass: 'btn-primary',
      containerCustomClass: 'bg-white',
    },
  },
};
