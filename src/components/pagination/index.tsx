import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import './style.scss';

interface PaginationBaseProps {
  currentPage: number;
  itemsPerPage: number;
  maxDisplayedNumbers?: 1 | 2 | 3 | 3 | 4 | 5 | 6 | 7 | 8;
  hasNextPrevious?: boolean;
  previousContent?: string | React.ReactNode;
  nextContent?: string | React.ReactNode;
  hasFirstLast?: boolean;
  firstContent?: string | React.ReactNode;
  lastContent?: string | React.ReactNode;
  hasNumbersGap?: boolean;
  numbersGapContent?: string | React.ReactNode;
  numberProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  previousProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  firstProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  lastProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  changePage?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  previousPage?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  nextPage?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  firstPage?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  lastPage?: (
    pageNumber: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  styles?: {
    position?: 'start' | 'center' | 'end';
    containerCustomClass?: string;
    numberCustomClass?: string;
    nextCustomClass?: string;
    previousCustomClass?: string;
    firstCustomClass?: string;
    lastCustomClass?: string;
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
    maxDisplayedNumbers: 6,
    hasNextPrevious: false,
    hasFirstLast: false,
    hasNumbersGap: false,
  }
) => {
  const [pagesCount, setPagesCount] = useState(
    'totalPages' in props
      ? props.totalPages
      : undefined || props.totalItems / props.itemsPerPage
  );
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  useEffect(
    () => {
      setPagesCount(
        'totalPages' in props
          ? props.totalPages
          : undefined || props.totalItems / props.itemsPerPage
      );
    },
    'totalPages' in props ? [props.totalPages] : [props.totalItems]
  );

  const generateNumbers = (
    pagesCount: number,
    maxDisplayedNumbers: number,
    currentPage: number,
    hasGap = false
  ) => {
    // start listing numbers from current page
    let start =
      Math.floor((currentPage - 1) / maxDisplayedNumbers) * maxDisplayedNumbers;
    const generatedNumbers = [
      ...Array.from(
        {
          length: maxDisplayedNumbers,
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
    if (hasGap) {
      if (currentPage <= pagesCount - 3) {
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
        props.styles?.containerCustomClass || ''
      }`}
    >
      <div className={'row'}>
        <div
          className={`col d-flex ${
            props.styles?.position
              ? 'justify-content-' + props.styles?.position
              : ''
          }`}
        >
          <div>
            {/* first page */}
            {props.hasFirstLast && currentPage !== 1 && (
              <button
                {...props.firstProps}
                className={`btn ${props.styles?.firstCustomClass || ''}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setCurrentPage(currentPage !== 1 ? 1 : currentPage);
                  props.firstPage &&
                    props.firstPage(currentPage !== 1 ? 1 : currentPage, e);
                }}
              >
                {props.firstContent || (
                  <FontAwesomeIcon icon={faAnglesLeft} size='xs' />
                )}
              </button>
            )}
            {/* previous page */}
            {props.hasNextPrevious && currentPage !== 1 && (
              <button
                {...props.previousProps}
                className={`btn ${props.styles?.previousCustomClass || ''}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setCurrentPage(
                    currentPage !== 1 ? currentPage - 1 : currentPage
                  );
                  props.previousPage &&
                    props.previousPage(
                      currentPage !== 1 ? currentPage - 1 : currentPage,
                      e
                    );
                }}
              >
                {props.previousContent || (
                  <FontAwesomeIcon icon={faAngleLeft} size='xs' />
                )}
              </button>
            )}
            {/* page numbers */}
            <React.Fragment>
              {generateNumbers(
                pagesCount,
                props.maxDisplayedNumbers &&
                  props.maxDisplayedNumbers < pagesCount
                  ? props.maxDisplayedNumbers
                  : pagesCount,
                currentPage,
                props.hasNumbersGap
              ).map((number: number, index: number) => {
                return (
                  <button
                    key={`${number}-${index}`}
                    title={number != -1 ? number.toString() : undefined}
                    {...props.numberProps}
                    className={`btn ${number === currentPage ? 'active' : ''} ${
                      props.styles?.numberCustomClass || ''
                    }`}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      if (number === -1) return;
                      setCurrentPage(number);
                      props.changePage && props.changePage(number, e);
                    }}
                    disabled={number === -1}
                  >
                    {number === -1 ? props.numbersGapContent ?? '...' : number}
                  </button>
                );
              })}
            </React.Fragment>
            {/* next page */}
            {props.hasNextPrevious &&
              currentPage !== pagesCount &&
              pagesCount !== 0 && (
                <button
                  {...props.nextProps}
                  className={`btn ${props.styles?.nextCustomClass || ''}`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    setCurrentPage(
                      currentPage !== pagesCount ? currentPage + 1 : currentPage
                    );
                    props.nextPage &&
                      props.nextPage(
                        currentPage !== pagesCount
                          ? currentPage + 1
                          : currentPage,
                        e
                      );
                  }}
                >
                  {props.nextContent || (
                    <FontAwesomeIcon icon={faAngleRight} size='xs' />
                  )}
                </button>
              )}
            {/* last page */}
            {props.hasFirstLast &&
              currentPage !== pagesCount &&
              pagesCount !== 0 && (
                <button
                  {...props.lastProps}
                  className={`btn ${props.styles?.lastCustomClass || ''}`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    setCurrentPage(
                      currentPage !== pagesCount ? pagesCount : currentPage
                    );
                    props.lastPage &&
                      props.lastPage(
                        currentPage !== pagesCount ? pagesCount : currentPage,
                        e
                      );
                  }}
                >
                  {props.lastContent || (
                    <FontAwesomeIcon icon={faAnglesRight} size='xs' />
                  )}
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
