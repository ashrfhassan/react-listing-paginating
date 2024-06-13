import React, { useState, useEffect } from 'react';
import './style.scss';

interface PaginationBaseProps {
  currentPage: number;
  displayedNumbersCount: number;
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
  onPageChange?: (pageNumber: number) => void;
  onNumberBtnClick?: (
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
  itemsPerPage: number;
  // disabled props
  totalPages?: never;
}

interface RequireTotalPages extends PaginationBaseProps {
  totalPages: number;
  // disabled props
  totalItems?: never;
  itemsPerPage?: never;
}

export type PaginationProps = RequireTotalItems | RequireTotalPages;

export const Pagination = (props: PaginationProps) => {
  const [pagesCount, setPagesCount] = useState(
    'totalPages' in props
      ? (props.totalPages as number)
      : Math.ceil(props.totalItems / props.itemsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(props.currentPage.toString())
  );

  useEffect(() => {
    props.onPageChange && props.onPageChange(currentPage);
  }, [currentPage]);

  useEffect(
    () => {
      setPagesCount(
        'totalPages' in props
          ? (props.totalPages as number)
          : Math.ceil(props.totalItems / props.itemsPerPage)
      );
    },
    'totalPages' in props ? [props.totalPages] : [props.totalItems]
  );
  const calcNumbersCountBeforeAfterCurrent = (
    pagesCount: number,
    displayedNumbersCount: number,
    currentPage: number
  ): {
    numbersCountBeforeCurrent: number;
    numbersCountAfterCurrent: number;
  } => {
    const displayedNumbersCountWithoutCurrent = displayedNumbersCount - 1;
    const isOddCount = displayedNumbersCountWithoutCurrent % 2 !== 0;
    const halfDisplayedNumbersCount = Math.floor(
      displayedNumbersCountWithoutCurrent / 2
    );
    let numbersCountBeforeCurrent = halfDisplayedNumbersCount;
    let numbersCountAfterCurrent = halfDisplayedNumbersCount;
    if (currentPage - numbersCountBeforeCurrent < 1) {
      const diffNumber = numbersCountBeforeCurrent - currentPage + 1;
      numbersCountBeforeCurrent -= diffNumber;
      numbersCountAfterCurrent += diffNumber;
      if (isOddCount) numbersCountAfterCurrent++;
      if (currentPage + numbersCountAfterCurrent > pagesCount) {
        numbersCountAfterCurrent = pagesCount - currentPage;
      }
    } else if (currentPage + numbersCountAfterCurrent >= pagesCount) {
      const diffNumber = currentPage + numbersCountAfterCurrent - pagesCount;
      numbersCountAfterCurrent -= diffNumber;
      numbersCountBeforeCurrent += diffNumber;
      if (isOddCount) numbersCountBeforeCurrent++;
      if (currentPage - numbersCountBeforeCurrent < 1) {
        numbersCountBeforeCurrent = currentPage - 1;
      }
    } else {
      if (isOddCount) numbersCountAfterCurrent++;
    }
    return {
      numbersCountBeforeCurrent,
      numbersCountAfterCurrent,
    };
  };
  const generateNumbers = (
    pagesCount: number,
    displayedNumbersCount: number,
    currentPage: number,
    gapContent?: string | React.ReactNode
  ) => {
    const { numbersCountBeforeCurrent, numbersCountAfterCurrent } =
      calcNumbersCountBeforeAfterCurrent(
        pagesCount,
        displayedNumbersCount,
        currentPage
      );
    let pagesNumbers: number[] = [];
    pagesNumbers.push(currentPage);
    for (let i = 1; i <= numbersCountBeforeCurrent; i++) {
      pagesNumbers.unshift(currentPage - i);
    }
    for (let i = 1; i <= numbersCountAfterCurrent; i++) {
      pagesNumbers.push(currentPage + i);
    }
    // add numbers gap
    if (gapContent) {
      if (currentPage <= pagesCount - 10) {
        pagesNumbers.push(-1); // refers to gap button
        pagesNumbers.push(pagesCount);
      }
      if (currentPage >= 10) {
        pagesNumbers = [1, -1].concat(pagesNumbers);
      }
    }
    return pagesNumbers;
  };

  return (
    <div className={`container-fluid ${props.styles?.containerClass || ''}`}>
      <div
        className={`row ${
          props.styles?.position
            ? 'justify-content-' + props.styles?.position
            : ''
        }`}
      >
        {/* first page */}
        {props.firstBtnContent && pagesCount > 0 && currentPage !== 1 && (
          <div className={'col d-contents'}>
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
          <div className={'col d-contents'}>
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
            parseInt(pagesCount.toString()),
            parseInt(props.displayedNumbersCount.toString()),
            parseInt(currentPage.toString()),
            props.numbersGapBtnContent
          ).map((number: number, index: number) => {
            return (
              <div key={`${number}-${index}`} className={'col d-contents'}>
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
                    props.onNumberBtnClick && props.onNumberBtnClick(number, e);
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
            <div className={'col d-contents'}>
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
            <div className={'col d-contents'}>
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
