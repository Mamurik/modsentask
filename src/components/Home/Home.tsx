import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import MusicList from '@components/MusicList/MusicList';
import MusicPlayer from '@components/MusicPlayer/MusicPlayer';
import Recommended from '@components/Recomended/Recomended';
import SearchInput from '@components/SearchInput/SearchInput';
import Select from '@components/Select/Select';
import { searchSchema } from '@constants/searchValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo, useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import {
  HomeMusicImage,
  HomeWrapper,
  ImagePlayerWrapper,
  InputWrapper,
  MusicPlayerWrapper,
  ResultText,
  SelectGroup,
  SelectTitle,
} from './styled';

interface SearchFormData extends FieldValues {
  search: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [sortType, setSortType] = useState('relevance');

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

  const handleSortSelect = useCallback((value: string) => {
    setSortType(value);
  }, []);

  return (
    <HomeWrapper>
      <InputWrapper>
        <SearchInput
          control={control}
          placeholder="Search artist, title, album"
        />
      </InputWrapper>

      <ImagePlayerWrapper>
        <SelectGroup>
          <SelectTitle>Sort by</SelectTitle>
          <Select
            options={['relevance', 'popular', 'recent']}
            onSelect={handleSortSelect}
          />
        </SelectGroup>

        <MusicPlayerWrapper>
          <MusicPlayer />
        </MusicPlayerWrapper>

        <HomeMusicImage src="img/home/HomeMusic.png" />
      </ImagePlayerWrapper>

      <ResultText>Search results</ResultText>

      <ErrorBoundary fallback={<h1>Ошибка при загрузке треков 🎵</h1>}>
        <MusicList
          searchQuery={debouncedSearchQuery}
          isValid={isValid}
          sortType={sortType}
        />
      </ErrorBoundary>

      <Recommended />
    </HomeWrapper>
  );
};

export default memo(Home);
