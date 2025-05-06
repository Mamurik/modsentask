import { theme } from '@styles/theme';
import { images } from '@utils/images';
import { rem } from '@utils/rem';
import styled from 'styled-components';

const BREAKPOINTS = {
  mobile: 390,
  tablet: 768,
};

const MARGINS = {
  large: 32,
  medium: 24,
  small: 16,
};

const SIZES = {
  musicImageHeight: {
    default: '16em',
    tablet: '14em',
    mobile: '20em',
  },
};

export const HomeWrapper = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  padding: 0 ${rem(MARGINS.large)};
  margin-bottom: ${rem(20)};

  @media (max-width: ${rem(BREAKPOINTS.tablet)}) {
    padding: 0 ${rem(MARGINS.medium)};
  }

  @media (max-width: ${rem(BREAKPOINTS.mobile)}) {
    padding: 0 ${rem(MARGINS.small)};
    margin-bottom: ${rem(16)};
  }
`;

export const ResultText = styled.h2`
  font-family: ${theme.fontFamily};
  font-weight: 500;
  font-size: ${rem(24)};
  line-height: ${rem(29)};
  color: ${theme.colors.black};
  padding: ${rem(25)} ${rem(MARGINS.large)} 0;
  margin-top: ${rem(30)};

  @media (max-width: ${rem(BREAKPOINTS.tablet)}) {
    font-size: ${rem(22)};
    padding: ${rem(20)} ${rem(MARGINS.medium)} 0;
    margin-top: ${rem(25)};
  }

  @media (max-width: ${rem(BREAKPOINTS.mobile)}) {
    font-size: ${rem(20)};
    padding: ${rem(16)} ${rem(MARGINS.small)} 0;
    margin-top: ${rem(20)};
  }
`;

export const MusicPlayerWrapper = styled.div`
  position: absolute;
  top: 70%;
  right: ${rem(60)};
  width: ${rem(500)};
  transform: translateY(-50%);

  @media (max-width: ${rem(1200)}) {
    width: ${rem(450)};
    right: ${rem(50)};
  }

  @media (max-width: ${rem(1024)}) {
    width: ${rem(400)};
    right: ${rem(40)};
  }

  @media (max-width: ${rem(900)}) {
    width: ${rem(350)};
    right: ${rem(35)};
  }

  @media (max-width: ${rem(768)}) {
    width: ${rem(320)};
    right: ${rem(30)};
  }

  @media (max-width: ${rem(640)}) {
    width: ${rem(280)};
    right: ${rem(25)};
  }

  @media (max-width: ${rem(540)}) {
    width: ${rem(240)};
    right: ${rem(20)};
  }

  @media (max-width: ${rem(480)}) {
    width: ${rem(220)};
    right: ${rem(15)};
  }

  @media (max-width: ${rem(BREAKPOINTS.mobile)}) {
    width: calc(100% - ${rem(32)});
    right: ${rem(16)};
    left: ${rem(16)};
    top: auto;
    bottom: ${rem(16)};
    transform: none;
  }
`;
export const ImagePlayerWrapper = styled.div`
  position: relative;
  margin: ${rem(20)} ${rem(MARGINS.large)};
  min-height: ${SIZES.musicImageHeight.default};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${images.home});
    background-size: cover;
    background-position: center;
    opacity: 0.35;
    z-index: 0;
  }

  @media (max-width: ${rem(BREAKPOINTS.tablet)}) {
    margin: ${rem(20)} ${rem(MARGINS.medium)} 0;
    min-height: ${SIZES.musicImageHeight.tablet};
  }

  @media (max-width: ${rem(BREAKPOINTS.mobile)}) {
    margin: ${rem(16)} 0 0;
    min-height: ${SIZES.musicImageHeight.mobile};
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  position: absolute;
  top: ${rem(15)};
  right: ${rem(40)};
  text-align: center;
  margin-bottom: ${rem(10)};
`;

export const SelectTitle = styled.p`
  font-family: ${theme.fontFamily};
  font-style: italic;
  font-weight: 300;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: black;
  margin-top: ${rem(20)};
`;
