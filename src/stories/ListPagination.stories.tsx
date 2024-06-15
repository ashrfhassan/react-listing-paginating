import { Listing, ListingProps } from '../components/listing';
import { Pagination, PaginationProps } from '../components/pagination';
import { useEffect, useState } from 'react';

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
} as any;

// data
const items = [
  ...Array.from(
    {
      length: 1000,
    },
    (_, i) => i + 1
  ),
].map((val, index) => <div key={index}>Item {val}</div>);

const Template: any = (
  args: ListingProps & { pagination: PaginationProps }
) => {
  const { pagination, ...listArgs } = args;
  const [displayedItems, setDisplayedItems] = useState<any>([]);
  useEffect(() => {
    setDisplayedItems(items.slice(0, pagination.itemsPerPage));
  }, []);

  return (
    <Listing {...listArgs} items={displayedItems}>
      <Pagination
        {...pagination}
        onPageChange={(pageNumber: number) => {
          setDisplayedItems(
            items.slice(
              (pageNumber - 1) * (pagination.itemsPerPage as number),
              pageNumber * (pagination.itemsPerPage as number)
            )
          );
        }}
      />
    </Listing>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  display: 'Grid',
  numberOfItemsPerRow: 2,
  isLoading: false,
  loader: 'ContentLoader',
  header: <div>this is header.</div>,
  styles: {
    containerClass: '',
    headerClass: 'text-center',
    itemClass: 'd-flex justify-content-center',
    footerClass: '',
  },
  pagination: {
    totalItems: 1000,
    currentPage: '1',
    itemsPerPage: 30,
    displayedNumbersCount: 6,
    numbersGapBtnContent: '...',
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
