import { ITrack } from '@types';
import { FC } from 'react';
import { TrackWrapper } from './Track.styled';

interface TrackProps {
  track: ITrack;
}
const Track: FC<TrackProps> = ({ track }) => {
  return (
    <TrackWrapper>
      <h2>{track.id}</h2>
    </TrackWrapper>
  );
};

export default Track;
