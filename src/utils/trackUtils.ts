import { ITrack } from '@types';
import { images } from '@utils/images';

export const getTrackImage = (track: ITrack) =>
  track.artwork?.['480x480'] || images.logo;

export const trackImageStyles = (
  width?: string,
  height?: string,
  fixedHeight?: boolean
) => ({
  width,
  height,
  fixedHeight,
});
