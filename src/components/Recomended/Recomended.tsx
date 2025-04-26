import { useGetRecommendedQuery } from '@api/Tracks.api';

import Track from '@components/Track/Track';
import Loader from '@components/UI/Loader/Loader';
import {
  ErrorText,
  RecommendedList,
  RecommendedText,
  RecommendedWrapper,
} from './Recommended.styled';

const Recommended = () => {
  const { isError, isLoading, data } = useGetRecommendedQuery();

  if (isLoading) {
    return (
      <RecommendedWrapper>
        <Loader />
      </RecommendedWrapper>
    );
  }

  if (isError) {
    return (
      <RecommendedWrapper>
        <ErrorText>Something went wrong. Please try again later.</ErrorText>
      </RecommendedWrapper>
    );
  }

  return (
    <RecommendedWrapper>
      <RecommendedText>Recommended</RecommendedText>
      <RecommendedList>
        {data?.map((track) => (
          <Track
            key={track.id}
            track={track}
            imageWidth="170px"
            imageHeight="170px"
          />
        ))}
      </RecommendedList>
    </RecommendedWrapper>
  );
};

export default Recommended;
