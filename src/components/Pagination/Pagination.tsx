import { usePagination } from '@hooks/usePagination';
import React from 'react';

import { PaginationButton, PaginationWrapper } from './styled';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasMore: boolean;
}

const Pagination = ({
  currentPage,
  onPageChange,
  hasMore,
}: PaginationProps) => {
  const { handlePrevPage, handleNextPage, isPrevDisabled, isNextDisabled } =
    usePagination({ currentPage, hasMore, onPageChange });

  return (
    <PaginationWrapper>
      <PaginationButton disabled={isPrevDisabled} onClick={handlePrevPage}>
        Prev
      </PaginationButton>

      <PaginationButton disabled={isNextDisabled} onClick={handleNextPage}>
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default React.memo(Pagination);
