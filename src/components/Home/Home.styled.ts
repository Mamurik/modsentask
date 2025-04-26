import styled from 'styled-components';

export const HomeWrapper = styled.section`
  margin: 0px;
`;
export const HomeMusicImage = styled.img`
  width: 100%;
  height: 16em;
  margin: 0px 32px;
  margin-right: 200px;
  @media (max-width: 390px) {
    height: 10em;
    margin: 0px;
  }
`;
export const InputWrapper = styled.div`
  padding: 0px 32px;
  @media (max-width: 390px) {
    padding: 0px 20px;
  }
`;
export const ResultText = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #121212;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 25px;
  margin-top: 46px;
  margin-left: 17px;
`;
export const MusicPlayerWrapper = styled.div`
  position: absolute;
  top: 135px;
  right: 60px;
  width: 500px;
  @media (max-width: 390px) {
    max-width: 360px;
  }
`;
export const ImagePlayerWrapper = styled.div`
  position: relative;
`;
