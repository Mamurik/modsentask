import { useCallback, useState } from 'react';

export const useSort = () => {
  const [sortType, setSortType] = useState('relevance');

  const handleSortSelect = useCallback((value: string) => {
    setSortType(value);
  }, []);

  return {
    sortType,
    handleSortSelect,
  };
};
