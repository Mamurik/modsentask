import Track from '@components/Track/Track';
import Pagination from '@components/UI/Pagination/Pagination';
import { RootState } from '@store/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FavoriteListWrapper, FavoriteNullText } from './FavoriteList.styled';

const FavoriteList = () => {
  const favoriteTrackIds = useSelector(
    (state: RootState) => state.favorites.favoriteTrackIds
  );
  const tracks = useSelector((state: RootState) => state.tracks.tracks);

  const favoriteTracks = tracks.filter((track) =>
    favoriteTrackIds.includes(track.id)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const tracksPerPage = 8;

  const totalPages = Math.ceil(favoriteTracks.length / tracksPerPage);

  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = favoriteTracks.slice(
    indexOfFirstTrack,
    indexOfLastTrack
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (favoriteTracks.length === 0) {
    return <FavoriteNullText>Нет избранных треков</FavoriteNullText>;
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

export default FavoriteList;
