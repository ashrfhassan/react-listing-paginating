import Pagination, { PaginationProps } from '@components/pagination';
import React, { useEffect, useState } from 'react';
import './style.scss';

export interface ListPaginationProps {
  items: React.ReactNode[];
  numberOfItemsPerRow?: 2 | 3 | 4;
  display: 'Grid' | 'Rows';
  isLoading?: boolean;
  pagination: PaginationProps;
  header?: React.ReactNode;
  footerLeftActions?: React.ReactNode;
  footerRightActions?: React.ReactNode;
  styles?: {
    containerCustomClass?: string;
    headerCustomClass?: string;
    dataCustomClass?: string;
    itemCustomClass?: string;
    footerCustomClass?: string;
    footerPaginationClass?: string;
    leftfooterClass?: string;
    rightfooterClass?: string;
  };
}

function ListPagination(props: ListPaginationProps) {
  return (
    <div
      className={`container-fluid ${props.styles?.containerCustomClass || ''}`}
    >
      {/* Header */}
      {props.header && (
        <div className={`row ${props.styles?.headerCustomClass || ''}`}>
          <div className={'col'}>{props.header}</div>
        </div>
      )}
      {/* Data */}
      <div className={`row ${props.styles?.dataCustomClass || ''}`}>
        {props.items.map((val, index) => {
          return (
            <div
              className={`col ${
                props.numberOfItemsPerRow && props.display === 'Grid'
                  ? 'col-' + 12 / props.numberOfItemsPerRow
                  : ''
              } ${props.display === 'Rows' ? 'col-12' : ''}
              ${props.styles?.itemCustomClass || ''}`}
              key={index}
            >
              <React.Fragment>{val}</React.Fragment>
            </div>
          );
        })}
      </div>
      {/* Footer */}
      <div className={`row ${props.styles?.footerCustomClass || ''}`}>
        {props.footerLeftActions && (
          <div className={`col ${props.styles?.leftfooterClass || ''}`}>
            {props.footerLeftActions}
          </div>
        )}
        <div
          className={`col d-flex ${props.styles?.footerPaginationClass || ''} ${
            props.pagination.position
              ? 'justify-content-' + props.pagination.position
              : ''
          }`}
        >
          <Pagination {...props.pagination} />
        </div>
        {props.footerRightActions && (
          <div className={`col ${props.styles?.rightfooterClass || ''}`}>
            {props.footerLeftActions}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListPagination;
