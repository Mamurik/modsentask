import AudioPlayer from 'react-h5-audio-player';
import styled from 'styled-components';

const FONT_SIZES = {
  desktop: '1.5rem',
  mobile: '1.25rem',
};

const COLORS = {
  textPrimary: '#121212',
};
export const PlayerWrapper = styled.section`
  position: relative;
  border-radius: 0.625rem;
  box-sizing: border-box;

  .rhap_additional-controls .rhap_repeat-button {
    display: none;
  }
`;

export const StyledAudioPlayer = styled(AudioPlayer)`
  border-radius: 1.25rem;
  overflow: hidden;
`;

export const TrackTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: ${FONT_SIZES.desktop};
  line-height: 1.2;
  color: ${COLORS.textPrimary};
  margin-bottom: 0.8rem;

  @media (max-width: 390px) {
    font-size: ${FONT_SIZES.mobile};
    margin-bottom: 0.5rem;
  }
`;
