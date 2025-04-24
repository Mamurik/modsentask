import MusicList from '@components/MusicList/MusicList';
import SearchInput from '@components/UI/SearchInput/SearchInput';
import {
  HomeMusicImage,
  HomeWrapper,
  InputWrapper,
  ResultText,
} from './Home.styled';

const Home = () => {
  return (
    <HomeWrapper>
      <InputWrapper>
        <SearchInput placeholder="Search artist, title, album"></SearchInput>
      </InputWrapper>
      <HomeMusicImage src="img/home/HomeMusic.png" />
      <ResultText>Search results</ResultText>
      <MusicList></MusicList>
    </HomeWrapper>
  );
};

export default Home;
