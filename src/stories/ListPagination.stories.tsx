import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Listing, ListingProps } from '../components/listing';
import { useState, useEffect } from 'react';
import { Pagination, PaginationProps } from '../components/pagination';

export default {
  title: 'List Pagination',
  component: Listing,
  argTypes: {
    display: {
      defaultValue: 'Grid',
      control: 'select',
      options: ['Grid', 'Rows'],
    },
    loader: {
      defaultValue: 'ContentLoader',
      control: 'select',
      options: ['ContentLoader', 'Loading...'],
    },
  },
} as ComponentMeta<typeof Listing>;

const Template: ComponentStory<any> = (
  args: ListingProps & { pagination: PaginationProps }
) => {
  const { pagination, ...listArgs } = args;
  return (
    <Listing {...listArgs}>
      <Pagination {...pagination} />
    </Listing>
  );
};

// data
const items = [
  ...Array.from(
    {
      length: 1000,
    },
    (_, i) => i + 1
  ),
].map((val, index) => <div key={index}>Item {val}</div>);

export const Primary = Template.bind({});
Primary.args = {
  items: items.slice(0, 20),
  display: 'Grid',
  numberOfItemsPerRow: 2,
  isLoading: true,
  loader: 'ContentLoader',
  header: <div>this is header.</div>,
  footerLeftActions: <div>this is left footer.</div>,
  footerRightActions: <div>this is right footer.</div>,
  styles: {
    containerClass: '',
    headerClass: 'text-center',
    itemClass: 'd-flex justify-content-center',
    footerClass: '',
  },
  pagination: {
    totalItems: 702,
    currentPage: '1',
    itemsPerPage: 20,
    displayedNumbersCount: 6,
    //  numbersGapBtnContent: '...',
    previousBtnContent: 'previous',
    nextBtnContent: 'next',
    firstBtnContent: 'first',
    lastBtnContent: 'last',
    styles: {
      position: 'center',
      numberBtnClass: 'btn-primary',
    },
  },
};
