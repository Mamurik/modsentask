import { RootState } from '@store/store';
import { useSelector } from 'react-redux';

export const useTrackState = (trackId: string) => {
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteTrackIds
  );
  const selectedTrack = useSelector(
    (state: RootState) => state.tracks.selectedTrack
  );
  const isPlaying = useSelector((state: RootState) => state.tracks.isPlaying);

  const isLiked = favoriteIds.includes(trackId);
  const isCurrentTrack = selectedTrack?.id === trackId;

  return { isLiked, isCurrentTrack, isPlaying };
};
