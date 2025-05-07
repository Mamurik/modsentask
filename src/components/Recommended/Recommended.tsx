import { useGetRecommendedQuery } from '@api/Tracks.api';
import Loader from '@components/Loader/Loader';
import Track from '@components/Track/Track';
import { useMemo } from 'react';

import {
  LoaderWrapper,
  RecommendedList,
  RecommendedText,
  RecommendedWrapper,
} from './styled';

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
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  if (!tracks.length) {
    return <RecommendedWrapper>No recommendations found.</RecommendedWrapper>;
  }

  return (
    <RecommendedWrapper>
      <RecommendedText as="h2">Recommended</RecommendedText>
      <RecommendedList>
        {tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            imageWidth="13.125rem"
            imageHeight="13.125rem"
            musicTop="55%"
            musicRight="15%"
            isFixedSize
            fixedImageHeight
          />
        ))}
      </RecommendedList>
    </RecommendedWrapper>
  );
};

export default Recommended;
