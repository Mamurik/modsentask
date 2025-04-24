import { LikeIcon } from '@components/UI/Icons/Icons';
import { toggleFavorite } from '@store/Slices/FavoritesSlice';
import { RootState } from '@store/store';
import { ITrack } from '@types';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconLike,
  TrackAuthor,
  TrackImage,
  TrackInfoRow,
  TrackText,
  TrackTitle,
  TrackWrapper,
} from './Track.styled';

interface TrackProps {
  track: ITrack;
}

const Track: FC<TrackProps> = ({ track }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteTrackIds
  );
  const isLiked = favoriteIds.includes(track.id);

  const handleLike = () => {
    dispatch(toggleFavorite(track.id));
  };

  return (
    <TrackWrapper>
      <TrackImage src={track.artwork['480x480']} />
      <TrackInfoRow>
        <TrackText>
          <TrackTitle>{track.title}</TrackTitle>
          <TrackAuthor>{track.user.name}</TrackAuthor>
        </TrackText>
        <IconLike onClick={handleLike}>
          <LikeIcon
            fill={isLiked ? 'red' : 'none'}
            color={isLiked ? 'red' : 'gray'}
          />
        </IconLike>
      </TrackInfoRow>
    </TrackWrapper>
  );
};

export default Track;
