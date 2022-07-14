import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import './style.scss';

export interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage: number;
  maxDisplayedNumbers: 1 | 2 | 3 | 3 | 4 | 5 | 6 | 7 | 8;
  hasNextPrevious: boolean;
  previousContent?: string | React.ReactNode;
  nextContent?: string | React.ReactNode;
  firstContent?: string | React.ReactNode;
  lastContent?: string | React.ReactNode;
  hasFirstLast: boolean;
  numberProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  previousProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  firstProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  lastProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  position?: 'start' | 'center' | 'end';
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
    containerCustomClass?: string;
    numberCustomClass?: string;
    nextCustomClass?: string;
    previousCustomClass?: string;
    firstCustomClass?: string;
    lastCustomClass?: string;
  };
}

function Pagination(props: PaginationProps) {
  const [pagesCount, setPagesCount] = useState(
    props.totalPages || (props.totalItems ?? 0) / props.itemsPerPage
  );
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  const generateNumbers = (
    maxDisplayedNumbers: number,
    currentPage: number
  ) => {
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
    if (currentPage === generatedNumbers[0] + start && currentPage !== 1) {
      start--;
    }
    if (currentPage === generatedNumbers[generatedNumbers.length - 1] + start) {
      start++;
    }
    const pagesNumbers = generatedNumbers.map((number) => {
      const pageNumber = start + number;
      return pageNumber <= pagesCount ? pageNumber : -1;
    });
    _.remove(pagesNumbers, (val) => val === -1);
    return pagesNumbers;
  };

  return (
    <div
      className={`btn-container ${props.styles?.containerCustomClass || ''}`}
    >
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
            <FontAwesomeIcon icon={solid('angles-left')} size='xs' />
          )}
        </button>
      )}
      {/* previous page */}
      {props.hasNextPrevious && currentPage !== 1 && (
        <button
          {...props.previousProps}
          className={`btn ${props.styles?.previousCustomClass || ''}`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage);
            props.previousPage &&
              props.previousPage(
                currentPage !== 1 ? currentPage - 1 : currentPage,
                e
              );
          }}
        >
          {props.previousContent || (
            <FontAwesomeIcon icon={solid('angle-left')} size='xs' />
          )}
        </button>
      )}
      {/* page numbers */}
      {generateNumbers(
        props.maxDisplayedNumbers < pagesCount
          ? props.maxDisplayedNumbers
          : pagesCount,
        currentPage
      ).map((number: number, index: number) => {
        return (
          <button
            key={index}
            title={number.toString()}
            {...props.numberProps}
            className={`btn ${number === currentPage ? 'active' : ''} ${
              props.styles?.numberCustomClass || ''
            }`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              setCurrentPage(number);
              props.changePage && props.changePage(number, e);
            }}
          >
            {number}
          </button>
        );
      })}
      {/* next page */}
      {props.hasNextPrevious && currentPage !== pagesCount && (
        <button
          {...props.nextProps}
          className={`btn ${props.styles?.nextCustomClass || ''}`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            setCurrentPage(
              currentPage !== pagesCount ? currentPage + 1 : currentPage
            );
            props.nextPage &&
              props.nextPage(
                currentPage !== pagesCount ? currentPage + 1 : currentPage,
                e
              );
          }}
        >
          {props.nextContent || (
            <FontAwesomeIcon icon={solid('angle-right')} size='xs' />
          )}
        </button>
      )}
      {/* last page */}
      {props.hasFirstLast && currentPage !== pagesCount && (
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
            <FontAwesomeIcon icon={solid('angles-right')} size='xs' />
          )}
        </button>
      )}
    </div>
  );
}

export default Pagination;
