import { images } from '@utils/images';
import { rem } from '@utils/rem';
import styled from 'styled-components';

const COLORS = {
  textPrimary: 'rgba(18, 18, 18, 1)',
};

const SPACING = {
  desktop: '2rem',
  tablet: '1.5rem',
  mobile: '1rem',
};

const IMAGE_HEIGHT = {
  desktop: '16rem',
  tablet: '14rem',
  mobile: '12rem',
};
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
export const FavoriteWrapper = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const HomeMusicImage = styled.img`
  width: 100%;
  height: ${IMAGE_HEIGHT.desktop};
  object-fit: cover;
  margin: 0;

  @media (max-width: 768px) {
    height: ${IMAGE_HEIGHT.tablet};
  }

  @media (max-width: 390px) {
    height: ${IMAGE_HEIGHT.mobile};
    border-radius: 0.5rem;
  }
`;

export const ResultText = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: ${COLORS.textPrimary};
  padding: 1.5rem ${SPACING.desktop} 0;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.375rem;
    padding: 1.25rem ${SPACING.tablet} 0;
    margin-top: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 1.25rem;
    padding: 1rem ${SPACING.mobile} 0;
    margin-top: 1.25rem;
  }
`;

export const MusicPlayerWrapper = styled.div`
  position: absolute;
  top: 70%;
  right: 3.75rem;
  width: 31.25rem;
  transform: translateY(-50%);

  @media (max-width: 1200px) {
    width: 28.125rem;
    right: 3.125rem;
  }

  @media (max-width: 1024px) {
    width: 25rem;
    right: 2.5rem;
  }

  @media (max-width: 900px) {
    width: 21.875rem;
    right: 2.1875rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
    right: 1.875rem;
  }

  @media (max-width: 640px) {
    width: 17.5rem;
    right: 1.5625rem;
  }

  @media (max-width: 540px) {
    width: 15rem;
    right: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 13.75rem;
    right: 0.9375rem;
  }

  @media (max-width: 390px) {
    width: calc(100% - 2rem);
    right: 1rem;
    left: 1rem;
    top: auto;
    bottom: 1rem;
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
