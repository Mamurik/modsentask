import { searchSchema } from '@constants/searchValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface SearchFormData {
  search: string;
}

export const useSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  const {
    control,
    watch,
    formState: { isValid },
  } = useForm<SearchFormData>({
    resolver: yupResolver(searchSchema),
    mode: 'onChange',
    defaultValues: { search: '' },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setSearchQuery(value.search || '');
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchQuery]);

  return {
    control,
    debouncedSearchQuery,
    isValid,
  };
};
