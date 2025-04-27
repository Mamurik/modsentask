import styled from 'styled-components';

export const RecommendedWrapper = styled.div`
  margin-left: 32px;
  @media (max-width: 1090px) {
    margin-left: 0px;
  }
`;

export const RecommendedText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #121212;
  margin: 40px 0px;
`;
export const RecommendedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  max-width: 1600px;
  margin: 0px auto;
  @media (max-width: 1580) {
    max-width: 1200px;
  }
  @media (max-width: 1090px) {
    max-width: 1100px;
  }
  @media (max-width: 390px) {
    padding: 0px;
    max-width: 300px;
    margin: 0px auto;
  }
`;
