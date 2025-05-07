import { LikeIcon, MusicPlaying, MusicStopped } from '@components/Icons/Icons';
import { useTrackActions } from '@hooks/useTrackActions';
import { useTrackState } from '@hooks/useTrackState';
import { ITrack } from '@types';
import { images } from '@utils/images';
import { FC, memo } from 'react';

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
  isFixedSize?: boolean;
  fixedImageHeight?: boolean;
}

const Track: FC<TrackProps> = ({
  track,
  imageWidth,
  imageHeight,
  musicRight,
  musicTop,
  isFixedSize,
  fixedImageHeight,
}) => {
  const { isLiked, isCurrentTrack, isPlaying } = useTrackState(track.id);
  const { handleLike, handlePlayPause, handleImageClick } = useTrackActions(
    track,
    isCurrentTrack
  );

  return (
    <TrackWrapper $isFixedSize={isFixedSize}>
      <TrackImage
        src={track.artwork?.['480x480'] || images.logo}
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
        $width={imageWidth}
        $height={imageHeight}
        $fixedImageHeight={fixedImageHeight}
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
