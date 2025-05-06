import { LikeIcon, MusicPlaying, MusicStopped } from '@components/Icons/Icons';
import { toggleFavorite } from '@store/Slices/FavoritesSlice';
import { setSelectedTrack, togglePlayPause } from '@store/Slices/TracksSlice';
import { RootState } from '@store/store';
import { ITrack } from '@types';
import { FC, memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  IconLike,
  MusicIconWrapper,
  TrackAuthor,
  TrackImage,
  TrackInfoRow,
  TrackText,
  TrackTitle,
  TrackWrapper,
} from './styled';

interface TrackProps {
  track: ITrack;
  imageWidth?: string;
  imageHeight?: string;
  musicTop?: string;
  musicRight?: string;
}

const Track: FC<TrackProps> = ({
  track,
  imageWidth,
  imageHeight,
  musicRight,
  musicTop,
}) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteTrackIds
  );
  const selectedTrack = useSelector(
    (state: RootState) => state.tracks.selectedTrack
  );
  const isPlaying = useSelector((state: RootState) => state.tracks.isPlaying);

  const isLiked = useMemo(
    () => favoriteIds.includes(track.id),
    [favoriteIds, track.id]
  );
  const isCurrentTrack = useMemo(
    () => selectedTrack?.id === track.id,
    [selectedTrack, track.id]
  );

  const handleLike = useCallback(() => {
    dispatch(toggleFavorite(track.id));
  }, [dispatch, track.id]);

  const handlePlayPause = useCallback(() => {
    if (isCurrentTrack) {
      dispatch(togglePlayPause());
    } else {
      dispatch(setSelectedTrack(track));
    }
  }, [dispatch, isCurrentTrack, track]);

  const handleImageClick = useCallback(() => {
    handlePlayPause();
  }, [handlePlayPause]);

  return (
    <TrackWrapper>
      <TrackImage
        src={track.artwork['480x480']}
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
        $width={imageWidth}
        $height={imageHeight}
      />
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
      <MusicIconWrapper
        onClick={handlePlayPause}
        $top={musicTop}
        $right={musicRight}
      >
        {isCurrentTrack && isPlaying ? <MusicPlaying /> : <MusicStopped />}
      </MusicIconWrapper>
    </TrackWrapper>
  );
};

export default memo(Track);
