import { useGetTracksQuery } from '@api/Tracks.api';
import Loader from '@components/Loader/Loader';
import Pagination from '@components/Pagination/Pagination';
import Track from '@components/Track/Track';
import { setTracks } from '@store/Slices/TracksSlice';
import { RootState } from '@store/store';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ErrorFindText,
  MusicListWrapper,
  NotFoundText,
  TrackItemWrapper,
} from './styled';

interface MusicListProps {
  searchQuery?: string;
  isValid?: boolean;
  sortType?: string;
}

const MusicList = ({
  searchQuery = '',
  isValid = true,
  sortType = 'relevance',
}: MusicListProps) => {
  const dispatch = useDispatch();
  const { isLoading, isError, data: tracksApi } = useGetTracksQuery();
  const allTracks = useSelector((state: RootState) => state.tracks.tracks);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  useEffect(() => {
    if (tracksApi) {
      dispatch(setTracks(tracksApi));
    }
  }, [tracksApi, dispatch]);

  const filteredTracks = useMemo(() => {
    const lowercasedQuery = searchQuery.trim().toLowerCase();
    let filtered = allTracks;

    if (lowercasedQuery) {
      filtered = allTracks.filter(
        (track) =>
          track.title.toLowerCase().includes(lowercasedQuery) ||
          (track.user.name &&
            track.user.name.toLowerCase().includes(lowercasedQuery))
      );
    }

    switch (sortType) {
      case 'popular':
        return [...filtered].sort(
          (a, b) => b.favorite_count - a.favorite_count
        );
      case 'recent':
        return [...filtered].sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
      default:
        return filtered;
    }
  }, [searchQuery, allTracks, sortType]);

  const totalPages = Math.ceil(filteredTracks.length / ITEMS_PER_PAGE);

  const paginatedTracks = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTracks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTracks, currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!isValid && searchQuery) {
    return (
      <ErrorFindText>Correct the errors in your search query</ErrorFindText>
    );
  }
  if (filteredTracks.length === 0) {
    return (
      <MusicListWrapper>
        <NotFoundText>Tracks not found</NotFoundText>
      </MusicListWrapper>
    );
  }
  if (isLoading)
    return (
      <MusicListWrapper>
        <Loader />
      </MusicListWrapper>
    );

  if (isError) return <p>Error loading tracks</p>;

  return (
    <>
      <MusicListWrapper>
        {paginatedTracks.map((track) => (
          <TrackItemWrapper key={track.id}>
            <Track track={track} />
          </TrackItemWrapper>
        ))}
      </MusicListWrapper>
      {filteredTracks.length > ITEMS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default MusicList;
