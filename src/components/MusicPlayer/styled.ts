import AudioPlayer from 'react-h5-audio-player';
import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;

  .rhap_additional-controls .rhap_repeat-button {
    display: none;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 390px) {
  }
`;

export const StyledAudioPlayer = styled(AudioPlayer)`
  border-radius: 20px;
  overflow: hidden;
`;

export const TrackTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #121212;
  height: 29px;
  margin-bottom: 13px;
  @media (max-width: 390px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;
