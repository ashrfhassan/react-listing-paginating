import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import './style.scss';

export interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage: number;
  maxDisplayedNumbers: 1 | 2 | 3 | 3 | 4 | 5 | 6 | 7 | 8;
  hasNextPrevious: boolean;
  hasFirstLast: boolean;
  position?: 'start' | 'center' | 'end';
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
      className={`'btn-container' ${props.styles?.containerCustomClass || ''}`}
    >
      {generateNumbers(
        props.maxDisplayedNumbers < pagesCount
          ? props.maxDisplayedNumbers
          : pagesCount,
        props.currentPage
      ).map((number: number, index: number) => {
        return <button key={index}>{number}</button>;
      })}
    </div>
  );
}

export default Pagination;
