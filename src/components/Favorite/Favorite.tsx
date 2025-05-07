import FavoriteList from '@components/FavoriteList/FavoriteList';
import MusicPlayer from '@components/MusicPlayer/MusicPlayer';

import {
  FavoriteWrapper,
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
      </ImagePlayerWrapper>
      <ResultText>Your Favorites</ResultText>
      <FavoriteList />
    </FavoriteWrapper>
  );
};

export default Favorite;
