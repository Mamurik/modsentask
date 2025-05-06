import React from 'react';

import { PaginationButton, PaginationWrapper } from './styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationButton disabled={currentPage === 1} onClick={handlePrevPage}>
        Prev
      </PaginationButton>
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default React.memo(Pagination);
