import FavoriteList from '@components/FavoriteList/FavoriteList';
import MusicPlayer from '@components/MusicPlayer/MusicPlayer';

import {
  FavoriteWrapper,
  HomeMusicImage,
  ImagePlayerWrapper,
  MusicPlayerWrapper,
  ResultText,
} from './styled';

const Favorite = () => {
  return (
    <FavoriteWrapper>
      <ImagePlayerWrapper>
        <MusicPlayerWrapper>
          <MusicPlayer />
        </MusicPlayerWrapper>
        <HomeMusicImage src="img/home/HomeMusic.png" />
      </ImagePlayerWrapper>
      <ResultText>Search results</ResultText>
      <FavoriteList />
    </FavoriteWrapper>
  );
};

export default Favorite;
