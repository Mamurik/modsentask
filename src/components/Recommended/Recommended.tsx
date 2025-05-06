import { useGetRecommendedQuery } from '@api/Tracks.api';
import Loader from '@components/Loader/Loader';
import Track from '@components/Track/Track';
import { useMemo } from 'react';

import { RecommendedList, RecommendedText, RecommendedWrapper } from './styled';

const Recommended = () => {
  const { data = [], isLoading, error } = useGetRecommendedQuery();

  const tracks = useMemo(() => data, [data]);

  if (error) {
    return (
      <RecommendedWrapper>Failed to load recommendations.</RecommendedWrapper>
    );
  }

  if (isLoading) {
    return (
      <RecommendedWrapper>
        <Loader></Loader>
      </RecommendedWrapper>
    );
  }
  if (!tracks.length) {
    return <RecommendedWrapper>No recommendations found.</RecommendedWrapper>;
  }

  return (
    <RecommendedWrapper>
      <RecommendedText>Recommended</RecommendedText>
      <RecommendedList>
        {tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            imageWidth="170px"
            imageHeight="170px"
            musicTop="135px"
            musicRight="55px"
          />
        ))}
      </RecommendedList>
    </RecommendedWrapper>
  );
};

export default Recommended;
