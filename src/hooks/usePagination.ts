import { useCallback } from 'react';

interface UsePaginationProps {
  currentPage: number;
  hasMore: boolean;
  onPageChange: (page: number) => void;
}

export const usePagination = ({
  currentPage,
  hasMore,
  onPageChange,
}: UsePaginationProps) => {
  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNextPage = useCallback(() => {
    if (hasMore) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, hasMore, onPageChange]);

  return {
    handlePrevPage,
    handleNextPage,
    isPrevDisabled: currentPage === 1,
    isNextDisabled: !hasMore,
  };
};
