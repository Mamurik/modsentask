import styled from 'styled-components';

const SPACING = {
  marginTopDesktop: '9.375rem',
  marginBottomDesktop: '25rem',
  marginTopTablet: '5rem',
  marginBottomTablet: '18.75rem',
  marginTopMobile: '2.5rem',
  marginBottomMobile: '15.625rem',
  paddingX: '1rem',
};

const FONT_SIZES = {
  notFoundDesktop: '2.75rem',
  notFoundTablet: '2rem',
  notFoundMobile: '1.625rem',
};

const COLORS = {
  textPrimary: '#121212',
};
export const NotFoundWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${SPACING.marginTopDesktop};
  margin-bottom: ${SPACING.marginBottomDesktop};
  padding: 0 ${SPACING.paddingX};
  text-align: center;

  @media (max-width: 480px) {
    margin-top: ${SPACING.marginTopTablet};
    margin-bottom: ${SPACING.marginBottomTablet};
  }

  @media (max-width: 390px) {
    margin-top: ${SPACING.marginTopMobile};
    margin-bottom: ${SPACING.marginBottomMobile};
  }
`;

export const NotFoundText = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: ${FONT_SIZES.notFoundDesktop};
  line-height: 1.2;
  color: ${COLORS.textPrimary};

  @media (max-width: 480px) {
    font-size: ${FONT_SIZES.notFoundTablet};
  }

  @media (max-width: 390px) {
    font-size: ${FONT_SIZES.notFoundMobile};
  }
`;
