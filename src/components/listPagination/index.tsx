import { PaginationProps } from '@components/pagination';
import React from 'react';
import './style.scss';

const GridContentLoader = React.lazy(
  () => import('@components/contentLoader/grid')
);
const RowContentLoader = React.lazy(
  () => import('@components/contentLoader/row')
);
export interface ListPaginationProps {
  children?: React.ReactElement<PaginationProps>;
  items: JSX.Element[];
  display?: 'Grid' | 'Rows';
  numberOfItemsPerRow?: 2 | 3 | 4;
  isLoading?: boolean;
  loader?: 'ContentLoader' | React.ReactNode;
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

export const ListPagination = (
  props: ListPaginationProps = {
    items: [],
    display: 'Grid',
    isLoading: false,
    loader: 'ContentLoader',
  }
) => {
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
              <React.Fragment>
                {props.display === 'Grid' ? (
                  <GridContentLoader />
                ) : (
                  <RowContentLoader />
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
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
              </React.Fragment>
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
        <div className={`col ${props.styles?.footerPaginationClass || ''} `}>
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
