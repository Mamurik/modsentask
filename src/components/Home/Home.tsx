import { yupResolver } from '@hookform/resolvers/yup';
import { memo, useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import MusicList from '@components/MusicList/MusicList';
import Recommended from '@components/Recomended/Recomended';
import MusicPlayer from '@components/UI/MusicPlayer/MusicPlayer';
import SearchInput from '@components/UI/SearchInput/SearchInput';
import Select from '@components/UI/Select/Select';

import { searchSchema } from '@components/UI/SearchInput/searchValidation';

import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import {
  HomeMusicImage,
  HomeWrapper,
  ImagePlayerWrapper,
  InputWrapper,
  MusicPlayerWrapper,
  ResultText,
  SelectGroup,
  SelectTitle,
} from './Home.styled';

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
