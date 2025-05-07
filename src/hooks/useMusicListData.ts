import { useGetTracksBySearchQuery, useGetTracksQuery } from '@api/Tracks.api';
import { useCallback, useMemo, useState } from 'react';

const ITEMS_PER_PAGE = 8;

export const useMusicListData = (searchQuery: string, sortType: string) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPaginating, setIsPaginating] = useState(false);

  const {
    isLoading: isTracksLoading,
    isError: isTracksError,
    data: defaultTracks = [],
  } = useGetTracksQuery(
    { page: currentPage, perPage: ITEMS_PER_PAGE },
    { skip: !!searchQuery }
  );

  const {
    isLoading: isSearchLoading,
    isError: isSearchError,
    data: searchResults = [],
  } = useGetTracksBySearchQuery(
    { searchQuery, page: currentPage, perPage: ITEMS_PER_PAGE },
    { skip: !searchQuery }
  );

  const tracksToDisplay = searchQuery ? searchResults : defaultTracks;

  const sortedTracks = useMemo(() => {
    const tracks = [...tracksToDisplay];

    switch (sortType) {
      case 'popular':
        return tracks.sort((a, b) => b.favorite_count - a.favorite_count);
      case 'recent':
        return tracks.sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
      default:
        return tracks;
    }
  }, [tracksToDisplay, sortType]);

  const handlePageChange = useCallback(async (page: number) => {
    setIsPaginating(true);
    setCurrentPage(page);
    await new Promise((res) => setTimeout(res, 1000));
    setIsPaginating(false);
  }, []);

  const isLoading = isTracksLoading || isSearchLoading;
  const isError = isTracksError || isSearchError;

  return {
    sortedTracks,
    isLoading,
    isError,
    isPaginating,
    currentPage,
    handlePageChange,
    hasMore: tracksToDisplay.length === ITEMS_PER_PAGE,
    hasNoResults: tracksToDisplay.length === 0,
  };
};
