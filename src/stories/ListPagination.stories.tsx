import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ListPagination,
  ListPaginationProps,
} from '@components/listPagination';
import { useState, useEffect } from 'react';
import { Pagination, PaginationProps } from '@components/pagination';
import {} from '../index';

export default {
  title: 'List Pagination',
  component: ListPagination,
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
} as ComponentMeta<typeof ListPagination>;

const Template: ComponentStory<any> = (
  args: ListPaginationProps & { pagination: PaginationProps }
) => {
  const { pagination, ...listArgs } = args;
  return (
    <ListPagination {...listArgs}>
      <Pagination {...pagination} />
    </ListPagination>
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
  paginationPosition: 'center',
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
    totalPages: 100,
    currentPage: 1,
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

/* ***************************************** */
/* **********ASYNCHROUNCE*************** */
/* ***************************************** */

const paginateFlights = async (page: number, size: number) => {
  const response: any = await fetch(
    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`
  );
  return await response.json();
};
const AsyncTemplate: ComponentStory<any> = (
  args: ListPaginationProps & { pagination: PaginationProps }
) => {
  const { pagination, ...listArgs } = args;
  const [totalPages, setTotalPages] = useState(0);
  const [dataItems, setDataItems] = useState([]);
  const [items, setItems] = useState<any>([]);
  const loadFlights = async (page: number, size: number) => {
    const data: any = await paginateFlights(page, size);
    setDataItems(data.data);
    setTotalPages(data.totalPages);
  };
  useEffect(() => {
    loadFlights(0, 20);
  }, []);
  useEffect(() => {
    const demoItems: any = dataItems.map((val: any, i: number) => {
      return <div key={i}>{val.name}</div>;
    });
    setItems(demoItems);
  }, [dataItems]);
  const changePage = async (pageNumber: number) => {
    // api call using pageNumber
    loadFlights(pageNumber - 1, 20);
  };
  const firstPage = async (pageNumber: number) => {
    // api call using pageNumber
    loadFlights(pageNumber - 1, 20);
  };
  const lastPage = async (pageNumber: number) => {
    // api call using pageNumber
    loadFlights(pageNumber - 1, 20);
  };
  const previousPage = async (pageNumber: number) => {
    // api call using pageNumber
    loadFlights(pageNumber - 1, 20);
  };
  const nextPage = async (pageNumber: number) => {
    // api call using pageNumber
    loadFlights(pageNumber - 1, 20);
  };
  return (
    <ListPagination {...listArgs} items={items}>
      <Pagination
        {...pagination}
        totalPages={totalPages}
        changePage={changePage}
        firstPage={firstPage}
        lastPage={lastPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </ListPagination>
  );
};

export const Asynchronous = AsyncTemplate.bind({});
Asynchronous.args = {
  display: 'Rows',
  numberOfItemsPerRow: 2,
  isLoading: false,
  loader: 'ContentLoader',
  styles: {
    itemCustomClass: 'd-flex justify-content-center',
  },
  paginationPosition: 'center',
  pagination: {
    currentPage: 1,
    itemsPerPage: 20,
    maxDisplayedNumbers: 6,
    hasFirstLast: true,
    hasNextPrevious: true,
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
