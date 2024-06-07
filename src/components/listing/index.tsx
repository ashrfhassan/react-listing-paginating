import { PaginationProps } from '../../components/pagination';
import React from 'react';
import './style.scss';

const GridContentLoader = React.lazy(
  () => import('../../components/contentLoader/grid')
);
const RowContentLoader = React.lazy(
  () => import('../../components/contentLoader/row')
);
export interface ListingProps {
  children?: React.ReactElement<PaginationProps>;
  items: React.ReactNode[];
  display?: 'Grid' | 'Rows';
  numberOfItemsPerRow?: 2 | 3 | 4;
  isLoading?: boolean;
  loader?: 'ContentLoader' | React.ReactNode;
  header?: React.ReactNode;
  footerLeftActions?: React.ReactNode;
  footerRightActions?: React.ReactNode;
  styles?: {
    containerClass?: string;
    headerClass?: string;
    itemClass?: string;
    footerClass?: string;
  };
}

export const Listing = (
  props: ListingProps = {
    items: [],
    display: 'Grid',
    isLoading: false,
    loader: 'ContentLoader',
  }
) => {
  return (
    <div className={`container-fluid ${props.styles?.containerClass ?? ''}`}>
      {/* Header */}
      {props.header && (
        <div className={`row ${props.styles?.headerClass ?? ''}`}>
          <div className={'col'}>{props.header}</div>
        </div>
      )}
      {props.isLoading && props.loader && props.loader !== 'ContentLoader' ? (
        props.loader
      ) : (
        <React.Fragment>
          {/* Data */}
          <div className={'row'}>
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
              ${props.styles?.itemClass ?? ''}`}
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
      <div className={`row ${props.styles?.footerClass ?? ''}`}>
        {/* left footer */}
        {props.footerLeftActions && (
          <div className={'col'}>{props.footerLeftActions}</div>
        )}
        {/* pagination */}
        <div className={'col'}>{props.children}</div>
        {/* right footer */}
        {props.footerRightActions && (
          <div className={'col'}>{props.footerLeftActions}</div>
        )}
      </div>
    </div>
  );
};
