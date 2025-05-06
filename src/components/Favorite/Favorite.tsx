import FavoriteList from '@components/FavoriteList/FavoriteList';
import MusicPlayer from '@components/MusicPlayer/MusicPlayer';
import { images } from '@utils/images';

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
        <HomeMusicImage src={images.home} />
      </ImagePlayerWrapper>
      <ResultText>Your Favorites</ResultText>
      <FavoriteList />
    </FavoriteWrapper>
  );
};

export default Favorite;
