import { useGetRecommendedQuery } from '@api/Tracks.api';

import Track from '@components/Track/Track';
import {
  RecommendedList,
  RecommendedText,
  RecommendedWrapper,
} from './Recommended.styled';

const Recommended = () => {
  const { data } = useGetRecommendedQuery();

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
            musicTop="135px"
            musicRight="55px"
          />
        ))}
      </RecommendedList>
    </RecommendedWrapper>
  );
};

export default Recommended;
