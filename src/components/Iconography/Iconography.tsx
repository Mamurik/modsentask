import {
  FavoriteIcon,
  HomeIcon,
  LikeIcon,
  MusicPlaying,
  MusicStopped,
} from '@components/UI/Icons/Icons';
import {
  IconographyDiv,
  IconographyHeader,
  IconographyHeaderTitle,
  IconographyWrapper,
} from './Iconography.styled';

const Iconography = () => {
  return (
    <IconographyWrapper>
      <IconographyHeader>
        <IconographyHeaderTitle>Iconography</IconographyHeaderTitle>
      </IconographyHeader>
      <IconographyDiv>
        <LikeIcon />
        <HomeIcon />
        <FavoriteIcon />
        <MusicPlaying />
        <MusicStopped />
        <img src="img/footer/fb.svg" alt="Facebook" />
        <img src="img/footer/inst.svg" alt="Instagram" />
        <img src="img/footer/git.svg" alt="GitHub" />
        <img src="img/footer/twt.svg" alt="Twitter" />
        <img src="img/logo.svg" alt="Logo" />
      </IconographyDiv>
    </IconographyWrapper>
  );
};

export default Iconography;
