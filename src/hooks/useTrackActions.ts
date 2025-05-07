import { toggleFavorite } from '@store/Slices/FavoritesSlice';
import { setSelectedTrack, togglePlayPause } from '@store/Slices/TracksSlice';
import { ITrack } from '@types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useTrackActions = (track: ITrack, isCurrentTrack: boolean) => {
  const dispatch = useDispatch();

  const handleLike = useCallback(() => {
    dispatch(toggleFavorite(track.id)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track.id]);

  const handlePlayPause = useCallback(() => {
    if (isCurrentTrack) {
      dispatch(togglePlayPause());
    } else {
      dispatch(setSelectedTrack(track));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrentTrack, track]); //диспатч мне кажется лучше оставить, в доке написано что все реактивные значения должны быть включены в массив зависимостей

  return {
    handleLike,
    handlePlayPause,
    handleImageClick: handlePlayPause,
  };
};
