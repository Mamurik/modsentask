import { useGetTracksQuery } from '@api/Tracks.api';
import Track from '@components/Track/Track';
import Loader from '@components/UI/Loader/Loader';
import Pagination from '@components/UI/Pagination/Pagination';
import { setTracks } from '@store/Slices/TracksSlice';
import { RootState } from '@store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorFindText, MusicListWrapper } from './MusicList.styled';

const ITEMS_PER_PAGE = 8;

interface MusicListProps {
  searchQuery?: string;
  isValid?: boolean;
}

const MusicList = ({ searchQuery = '', isValid = true }: MusicListProps) => {
  const dispatch = useDispatch();
  const allTracks = useSelector((state: RootState) => state.tracks.tracks);
  const { isError, isLoading, data: tracksApi } = useGetTracksQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTracks, setFilteredTracks] = useState(allTracks);

  useEffect(() => {
    if (tracksApi) {
      dispatch(setTracks(tracksApi));
    }
  }, [tracksApi, dispatch]);

  useEffect(() => {
    const lowercasedQuery = searchQuery.trim().toLowerCase();

    if (lowercasedQuery === '') {
      setFilteredTracks(allTracks);
      return;
    }

    const filtered = allTracks.filter(
      (track) =>
        track.title.toLowerCase().includes(lowercasedQuery) ||
        (track.user.name &&
          track.user.name.toLowerCase().includes(lowercasedQuery))
    );

    setFilteredTracks(filtered);
    setCurrentPage(1);
  }, [searchQuery, allTracks]);

  const totalPages = Math.ceil(filteredTracks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTracks = filteredTracks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if (!isValid && searchQuery) {
    return <ErrorFindText>Исправьте ошибки в поисковом запросе</ErrorFindText>;
  }
  if (isLoading) return <Loader />;
  if (isError) return <h1>Error loading tracks</h1>;

  return (
    <>
      <MusicListWrapper>
        {paginatedTracks.map((track) => (
          <div key={track.id}>
            <Track track={track}></Track>
          </div>
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
