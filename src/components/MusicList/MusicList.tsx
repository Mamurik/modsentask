import Loader from '@components/Loader/Loader';
import Pagination from '@components/Pagination/Pagination';
import Track from '@components/Track/Track';
import { useMusicListData } from '@hooks/useMusicListData';

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
  const {
    sortedTracks,
    isLoading,
    isError,
    isPaginating,
    currentPage,
    handlePageChange,
    hasMore,
    hasNoResults,
  } = useMusicListData(searchQuery, sortType);

  if (!isValid && searchQuery) {
    return (
      <ErrorFindText>Correct the errors in your search query</ErrorFindText>
    );
  }

  if (hasNoResults && !isLoading && !isPaginating) {
    return (
      <MusicListWrapper>
        <NotFoundText>Tracks not found</NotFoundText>
      </MusicListWrapper>
    );
  }

  if (isLoading || isPaginating) {
    return (
      <MusicListWrapper>
        <Loader />
      </MusicListWrapper>
    );
  }

  if (isError) return <p>Error loading tracks</p>;

  return (
    <>
      <MusicListWrapper>
        {sortedTracks.map((track) => (
          <TrackItemWrapper key={track.id}>
            <Track track={track} />
          </TrackItemWrapper>
        ))}
      </MusicListWrapper>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        hasMore={hasMore}
      />
    </>
  );
};

export default MusicList;
