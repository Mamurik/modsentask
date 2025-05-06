import Pagination from '@components/Pagination/Pagination';
import Track from '@components/Track/Track';
import { RootState } from '@store/store';
import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { FavoriteListWrapper, FavoriteNullText } from './styled';

const tracksPerPage = 8;

const FavoriteList = () => {
  const favoriteTrackIds = useSelector(
    (state: RootState) => state.favorites.favoriteTrackIds
  );
  const tracks = useSelector((state: RootState) => state.tracks.tracks);

  const [currentPage, setCurrentPage] = useState(1);

  const favoriteTracks = useMemo(() => {
    return tracks.filter((track) => favoriteTrackIds.includes(track.id));
  }, [favoriteTrackIds, tracks]);

  const totalPages = useMemo(() => {
    return Math.ceil(favoriteTracks.length / tracksPerPage);
  }, [favoriteTracks.length]);

  const currentTracks = useMemo(() => {
    const indexOfLastTrack = currentPage * tracksPerPage;
    const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
    return favoriteTracks.slice(indexOfFirstTrack, indexOfLastTrack);
  }, [currentPage, favoriteTracks]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  if (favoriteTracks.length === 0) {
    return <FavoriteNullText>No favorites tracks</FavoriteNullText>;
  }

  return (
    <>
      <FavoriteListWrapper>
        {currentTracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            imageWidth="170px"
            imageHeight="170px"
            musicTop="135px"
            musicRight="55px"
          />
        ))}
      </FavoriteListWrapper>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default memo(FavoriteList);
