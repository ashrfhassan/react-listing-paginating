import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import './style.scss';

interface PaginationBaseProps {
  currentPage: number;
  itemsPerPage: number;
  displayedNumbersCount?: 1 | 2 | 3 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  previousBtnContent?: string | React.ReactNode;
  nextBtnContent?: string | React.ReactNode;
  firstBtnContent?: string | React.ReactNode;
  lastBtnContent?: string | React.ReactNode;
  numbersGapBtnContent?: string | React.ReactNode;
  numberBtnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  previousBtnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextBtnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  firstBtnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  lastBtnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onChangePage?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  OnPreBtnClick?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  OnNextBtnClick?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  OnFirstBtnClick?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  OnLastBtnClick?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  styles?: {
    position?: 'start' | 'center' | 'end';
    containerClass?: string;
    numberBtnClass?: string;
    nextBtnClass?: string;
    previousBtnClass?: string;
    firstBtnClass?: string;
    lastBtnClass?: string;
    activeBtnClass?: string;
  };
}

interface RequireTotalItems extends PaginationBaseProps {
  totalItems: number;
}

interface RequireTotalPages extends PaginationBaseProps {
  totalPages: number;
}

export type PaginationProps = RequireTotalItems | RequireTotalPages;

export const Pagination = (
  props: PaginationProps = {
    currentPage: 1,
    totalItems: 1000,
    totalPages: 20,
    itemsPerPage: 20,
    displayedNumbersCount: 6,
  }
) => {
  const [pagesCount, setPagesCount] = useState(
    'totalPages' in props
      ? props.totalPages
      : undefined || Math.ceil(props.totalItems / props.itemsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  useEffect(
    () => {
      setPagesCount(
        'totalPages' in props
          ? props.totalPages
          : undefined || Math.ceil(props.totalItems / props.itemsPerPage)
      );
    },
    'totalPages' in props ? [props.totalPages] : [props.totalItems]
  );

  const generateNumbers = (
    pagesCount: number,
    displayedNumbersCount: number,
    currentPage: number,
    gapContent?: string | React.ReactNode
  ) => {
    // start listing numbers from current page
    let start =
      Math.floor((currentPage - 1) / displayedNumbersCount) *
      displayedNumbersCount;
    const generatedNumbers = [
      ...Array.from(
        {
          length: displayedNumbersCount - 1,
        },
        (_, i) => i + 1
      ),
    ];
    // adding previous and next page numbers depending on current
    if (currentPage === generatedNumbers[0] + start && currentPage !== 1) {
      start--;
    }
    if (currentPage === generatedNumbers[generatedNumbers.length - 1] + start) {
      start++;
    }
    let pagesNumbers = generatedNumbers.map((number) => {
      const pageNumber = start + number;
      return pageNumber <= pagesCount ? pageNumber : -1;
    });
    // clean numbers array after mapping
    _.remove(pagesNumbers, (val) => val === -1);
    // add numbers gap
    if (gapContent) {
      if (currentPage <= pagesCount - 7) {
        if (pagesNumbers[pagesNumbers.length - 1] === pagesCount)
          pagesNumbers.pop();
        pagesNumbers.push(-1);
        pagesNumbers.push(pagesCount);
      }
      if (currentPage >= 7) {
        pagesNumbers = [1, -1].concat(pagesNumbers);
      }
    }
    return pagesNumbers;
  };

  return (
    <div
      className={`container-fluid btn-container ${
        props.styles?.containerClass || ''
      }`}
    >
      <div
        className={`row m-0 ${
          props.styles?.position
            ? 'justify-content-' + props.styles?.position
            : ''
        }`}
      >
        {/* first page */}
        {props.firstBtnContent && pagesCount > 0 && currentPage !== 1 && (
          <div className={'col px-0 flex-content justify-content-center'}>
            <button
              {...props.firstBtnProps}
              className={`btn ${props.styles?.firstBtnClass ?? ''}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                setCurrentPage(currentPage !== 1 ? 1 : currentPage);
                props.OnFirstBtnClick &&
                  props.OnFirstBtnClick(currentPage !== 1 ? 1 : currentPage, e);
              }}
            >
              {props.firstBtnContent}
            </button>
          </div>
        )}
        {/* previous page */}
        {props.previousBtnContent && pagesCount > 0 && currentPage !== 1 && (
          <div className={'col px-0 flex-content justify-content-center'}>
            <button
              {...props.previousBtnProps}
              className={`btn ${props.styles?.previousBtnClass ?? ''}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                setCurrentPage(
                  currentPage !== 1 ? currentPage - 1 : currentPage
                );
                props.OnPreBtnClick &&
                  props.OnPreBtnClick(
                    currentPage !== 1 ? currentPage - 1 : currentPage,
                    e
                  );
              }}
            >
              {props.previousBtnContent}
            </button>
          </div>
        )}
        {/* page numbers */}
        <React.Fragment>
          {generateNumbers(
            pagesCount,
            props.displayedNumbersCount &&
              props.displayedNumbersCount < pagesCount
              ? props.displayedNumbersCount
              : pagesCount,
            currentPage,
            props.numbersGapBtnContent
          ).map((number: number, index: number) => {
            return (
              <div
                key={`${number}-${index}`}
                className={'col px-0 flex-content justify-content-center'}
              >
                <button
                  title={number != -1 ? number.toString() : undefined}
                  {...props.numberBtnProps}
                  className={`btn ${
                    number === parseInt(currentPage.toString())
                      ? `active ${props.styles?.activeBtnClass ?? ''}`
                      : ''
                  } ${props.styles?.numberBtnClass ?? ''}`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (number === -1) return;
                    setCurrentPage(number);
                    props.onChangePage && props.onChangePage(number, e);
                  }}
                  disabled={number === -1}
                >
                  {number === -1 ? props.numbersGapBtnContent ?? '...' : number}
                </button>
              </div>
            );
          })}
        </React.Fragment>
        {/* next page */}
        {props.nextBtnContent &&
          currentPage !== pagesCount &&
          pagesCount > 0 && (
            <div className={'col px-0 flex-content justify-content-center'}>
              <button
                {...props.nextBtnProps}
                className={`btn ${props.styles?.nextBtnClass ?? ''}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setCurrentPage(
                    currentPage !== pagesCount ? currentPage + 1 : currentPage
                  );
                  props.OnNextBtnClick &&
                    props.OnNextBtnClick(
                      currentPage !== pagesCount
                        ? currentPage + 1
                        : currentPage,
                      e
                    );
                }}
              >
                {props.nextBtnContent}
              </button>
            </div>
          )}
        {/* last page */}
        {props.lastBtnContent &&
          currentPage !== pagesCount &&
          pagesCount > 0 && (
            <div className={'col px-0 flex-content justify-content-center'}>
              <button
                {...props.lastBtnProps}
                className={`btn ${props.styles?.lastBtnClass ?? ''}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setCurrentPage(
                    currentPage !== pagesCount ? pagesCount : currentPage
                  );
                  props.OnLastBtnClick &&
                    props.OnLastBtnClick(
                      currentPage !== pagesCount ? pagesCount : currentPage,
                      e
                    );
                }}
              >
                {props.lastBtnContent}
              </button>
            </div>
          )}
      </div>
    </div>
  );
};
