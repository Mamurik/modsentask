import Loader from '@components/Loader/Loader';
import Pagination from '@components/Pagination/Pagination';
import Track from '@components/Track/Track';
import { useFavoriteTracks } from '@hooks/useFavoriteTracks';
import { memo, useCallback } from 'react';

import { FavoriteListWrapper, FavoriteNullText } from './styled';

const FavoriteList = () => {
  const {
    isLoading,
    isError,
    paginatedTracks,
    totalPages,
    currentPage,
    setCurrentPage,
    hasFavorites,
  } = useFavoriteTracks();

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  if (isLoading) {
    return (
      <FavoriteListWrapper>
        <Loader />
      </FavoriteListWrapper>
    );
  }

  if (isError) {
    return <div>Error loading tracks</div>;
  }

  if (!hasFavorites) {
    return <FavoriteNullText>No favorite tracks</FavoriteNullText>;
  }

  return (
    <>
      <FavoriteListWrapper>
        {paginatedTracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            imageWidth="13.125rem"
            imageHeight="13.125rem"
            musicTop="60%"
            musicRight="10%"
            isFixedSize
            fixedImageHeight
          />
        ))}
      </FavoriteListWrapper>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          hasMore={currentPage < totalPages}
        />
      )}
    </>
  );
};

export default memo(FavoriteList);
