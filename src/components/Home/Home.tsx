import MusicList from '@components/MusicList/MusicList';
import Recommended from '@components/Recomended/Recomended';
import MusicPlayer from '@components/UI/MusicPlayer/MusicPlayer';
import SearchInput from '@components/UI/SearchInput/SearchInput';
import { searchSchema } from '@components/UI/SearchInput/searchValidation';
import Select from '@components/UI/Select/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
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
} from './Home.styled';

interface SearchFormData extends FieldValues {
  search: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  const {
    control,
    watch,
    formState: { isValid },
  } = useForm<SearchFormData>({
    resolver: yupResolver(searchSchema),
    mode: 'onChange',
    defaultValues: {
      search: '',
    },
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

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

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
            onSelect={() => console.log('asd')}
          />
        </SelectGroup>

        <MusicPlayerWrapper>
          <MusicPlayer />
        </MusicPlayerWrapper>
        <HomeMusicImage src="img/home/HomeMusic.png" />
      </ImagePlayerWrapper>

      <ResultText>Search results</ResultText>
      <MusicList searchQuery={debouncedSearchQuery} isValid={isValid} />
      <Recommended></Recommended>
    </HomeWrapper>
  );
};

export default Home;
