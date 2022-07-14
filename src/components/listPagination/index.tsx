import Pagination, { PaginationProps } from '@components/pagination';
import React, { useEffect, useState } from 'react';
import './style.scss';

export interface ListPaginationProps {
  items: React.ReactNode[];
  numberOfItemsPerRow?: number;
  display: 'Grid' | 'Rows';
  isLoading?: boolean;
  pagination: PaginationProps;
  styles?: {
    containerCustomClass?: string;
    headerCustomClass?: string;
    dataCustomClass?: string;
    footerCustomClass?: string;
  };
  header?: React.ReactNode;
  footerLeftActions?: React.ReactNode;
  footerRightActions?: React.ReactNode;
}

function ListPagination(props: ListPaginationProps) {
  const [currentPage, setCurrentPage] = useState(props.pagination.currentPage);

  return (
    <div
      className={`'container-fluid' ${
        props.styles?.containerCustomClass || ''
      }`}
    >
      {/* Header */}
      <div className={`'row' ${props.styles?.headerCustomClass || ''}`}>
        {props.header}
      </div>
      {/* Data */}
      <div className={`'row' ${props.styles?.dataCustomClass || ''}`}></div>
      {/* Footer */}
      <div className={`'row' ${props.styles?.footerCustomClass || ''}`}>
        {props.footerLeftActions && (
          <div className='col'>{props.footerLeftActions}</div>
        )}
        <div
          className={`col ${
            props.pagination.position
              ? 'justify-content-' + props.pagination.position
              : ''
          }`}
        >
          <Pagination {...props.pagination} />
        </div>
        {props.footerRightActions && (
          <div className='col'>{props.footerLeftActions}</div>
        )}
      </div>
    </div>
  );
}

export default ListPagination;
