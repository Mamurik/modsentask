import { useGetTracksQuery } from '@api/Tracks.api';
import Track from '@components/Track/Track';
import { setTracks } from '@store/Slices/TracksSlice';
import { RootState } from '@store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MusicListWrapper } from './MusicList.styled';

const MusicList = () => {
  const dispatch = useDispatch();
  const allTracks = useSelector((state: RootState) => state.tracks.tracks);
  const { isError, isLoading, data: tracksApi } = useGetTracksQuery();

  useEffect(() => {
    if (tracksApi) {
      dispatch(setTracks(tracksApi));
    }
  }, [tracksApi, dispatch]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error loading tracks</h1>;

  return (
    <MusicListWrapper>
      {allTracks.map((track) => (
        <div key={track.id}>
          <Track track={track}></Track>
        </div>
      ))}
    </MusicListWrapper>
  );
};

export default MusicList;
