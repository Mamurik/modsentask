import { ITrack } from '@types';
import { useEffect, useState } from 'react';

export const useVisibleTracks = (
  allTracks: ITrack[],
  favoriteTrackIds: string[],
  delay = 30000
) => {
  const [visibleTracks, setVisibleTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    const favorites = allTracks.filter((track) =>
      favoriteTrackIds.includes(track.id)
    );
    setVisibleTracks(favorites);

    const timer = setTimeout(() => {
      setVisibleTracks((current) =>
        current.filter((track) => favoriteTrackIds.includes(track.id))
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [allTracks, favoriteTrackIds, delay]);

  return visibleTracks;
};
