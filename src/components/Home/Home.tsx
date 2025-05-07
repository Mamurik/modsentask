import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import MusicList from '@components/MusicList/MusicList';
import MusicPlayer from '@components/MusicPlayer/MusicPlayer';
import Recommended from '@components/Recommended/Recommended';
import SearchInput from '@components/SearchInput/SearchInput';
import Select from '@components/Select/Select';
import { useSearchForm } from '@hooks/useSearchForm';
import { useSort } from '@hooks/useSort';
import { memo } from 'react';

import {
  HomeWrapper,
  ImagePlayerWrapper,
  InputWrapper,
  MusicPlayerWrapper,
  ResultText,
  SelectGroup,
  SelectTitle,
} from './styled';

const Home = () => {
  const { control, debouncedSearchQuery, isValid } = useSearchForm();
  const { sortType, handleSortSelect } = useSort();

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
      </ImagePlayerWrapper>

      <ResultText>Search results</ResultText>

      <ErrorBoundary fallback={<p>Oops something went wrong</p>}>
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
