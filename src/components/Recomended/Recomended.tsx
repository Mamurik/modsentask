import { useGetRecommendedQuery } from '@api/Tracks.api';
import Track from '@components/Track/Track';
import { useMemo } from 'react';
import {
  RecommendedList,
  RecommendedText,
  RecommendedWrapper,
} from './Recommended.styled';

const Recommended = () => {
  const { data = [], isLoading, error } = useGetRecommendedQuery();

  const tracks = useMemo(() => data, [data]);

  if (isLoading) {
    return <RecommendedWrapper>Loading...</RecommendedWrapper>;
  }

  if (error) {
    return (
      <RecommendedWrapper>Failed to load recommendations.</RecommendedWrapper>
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
