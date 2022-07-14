import GridContentLoader from '@components/contentLoader/grid';
import RowContentLoader from '@components/contentLoader/row';
import { Pagination } from '@components/pagination';
import React from 'react';
import './style.scss';

export interface ListPaginationProps {
  children: React.ReactElement<typeof Pagination>;
  items: JSX.Element[];
  numberOfItemsPerRow?: 2 | 3 | 4;
  display: 'Grid' | 'Rows';
  isLoading?: boolean;
  loader?: 'ContentLoader' | React.ReactNode;
  header?: React.ReactNode;
  footerLeftActions?: React.ReactNode;
  footerRightActions?: React.ReactNode;
  paginationPosition?: 'start' | 'center' | 'end';
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

export const ListPagination = (props: ListPaginationProps) => {
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
      {props.isLoading && props.loader && props.loader !== 'ContentLoader' ? (
        props.loader
      ) : (
        <React.Fragment>
          {/* Data */}
          <div className={`row ${props.styles?.dataCustomClass || ''}`}>
            {props.isLoading &&
            props.loader &&
            props.loader === 'ContentLoader' ? (
              <>
                {props.display === 'Grid' ? (
                  <GridContentLoader />
                ) : (
                  <RowContentLoader />
                )}
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </React.Fragment>
      )}
      {/* Footer */}
      <div className={`row ${props.styles?.footerCustomClass || ''}`}>
        {/* left footer */}
        {props.footerLeftActions && (
          <div className={`col ${props.styles?.leftfooterClass || ''}`}>
            {props.footerLeftActions}
          </div>
        )}
        {/* pagination */}
        <div
          className={`col d-flex ${props.styles?.footerPaginationClass || ''} ${
            props.paginationPosition
              ? 'justify-content-' + props.paginationPosition
              : ''
          }`}
        >
          {props.children}
        </div>
        {/* right footer */}
        {props.footerRightActions && (
          <div className={`col ${props.styles?.rightfooterClass || ''}`}>
            {props.footerLeftActions}
          </div>
        )}
      </div>
    </div>
  );
};
