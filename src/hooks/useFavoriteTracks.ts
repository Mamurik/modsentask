import { useGetTracksQuery } from '@api/Tracks.api';
import { RootState } from '@store/store';
import { ITrack } from '@types';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const ITEMS_PER_PAGE = 8;

export const useFavoriteTracks = () => {
  const favoriteTrackIds = useSelector(
    (state: RootState) => state.favorites.favoriteTrackIds
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleTracks, setVisibleTracks] = useState<ITrack[]>([]);

  const {
    data: allTracks = [],
    isLoading,
    isError,
  } = useGetTracksQuery({ page: 1, perPage: 10000000 });

  useEffect(() => {
    const favorites = allTracks.filter((track) =>
      favoriteTrackIds.includes(track.id)
    );
    setVisibleTracks(favorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTracks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleTracks((prev) =>
        prev.filter((track) => favoriteTrackIds.includes(track.id))
      );
    }, 30000);

    return () => clearTimeout(timer);
  }, [allTracks, favoriteTrackIds]);

  useEffect(() => {
    const totalPages = Math.ceil(visibleTracks.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [visibleTracks.length, currentPage]);

  const paginatedTracks = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return visibleTracks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [visibleTracks, currentPage]);

  const totalPages = Math.ceil(visibleTracks.length / ITEMS_PER_PAGE);

  return {
    isLoading,
    isError,
    paginatedTracks,
    totalPages,
    currentPage,
    setCurrentPage,
    hasFavorites: visibleTracks.length > 0,
  };
};
