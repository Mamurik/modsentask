import styled, { keyframes } from 'styled-components';

const COLORS = {
  error: '#ff4d4f',
};

const FONT_SIZES = {
  error: '1.875rem',
};

const SPACING = {
  padding: '1.25rem',
  gap: '0.625rem',
  errorPadding: '6.25rem',
};

const BREAKPOINTS = {
  desktopXL: '1580px',
  desktop: '1090px',
  mobileS: '390px',
};
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.25rem); /* 20px */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const NotFoundText = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #777;
  margin-top: 50px;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 390px) {
    font-size: 18px;
  }
`;
export const MusicListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${SPACING.padding};
  gap: ${SPACING.gap};
  max-width: 75rem; /* 1200px */
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.desktopXL}) {
    max-width: 75rem;
  }
  @media (max-width: ${BREAKPOINTS.desktop}) {
    max-width: 75rem;
  }
  @media (max-width: ${BREAKPOINTS.mobileS}) {
    margin: 0;
    padding: 0;
  }
`;

export const TrackItemWrapper = styled.div`
  animation: ${fadeInUp} 0.5s ease forwards;
`;

export const ErrorFindText = styled.p`
  color: ${COLORS.error};
  margin: 0.625rem 0;
  text-align: center;
  font-size: ${FONT_SIZES.error};
  padding: ${SPACING.errorPadding};
`;
