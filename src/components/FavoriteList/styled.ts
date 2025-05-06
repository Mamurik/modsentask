import styled from 'styled-components';

const COLORS = {
  textPrimary: 'rgba(18, 18, 18, 1)',
};

const SPACING = {
  padding: '2rem',
  marginY: '12.5rem',
};

const WIDTHS = {
  maxDefault: '100rem',
  maxLarge: '75rem',
  maxMedium: '68.75rem',
  maxMobile: '18.75rem',
};

export const FavoriteListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${SPACING.padding};
  gap: 0.625rem; // 10px
  max-width: ${WIDTHS.maxDefault};
  margin: 0 auto;

  @media (max-width: 1580px) {
    max-width: ${WIDTHS.maxLarge};
  }

  @media (max-width: 1090px) {
    max-width: ${WIDTHS.maxMedium};
  }

  @media (max-width: 390px) {
    padding: 0;
    max-width: ${WIDTHS.maxMobile};
    margin: 0 auto;
  }
`;

export const FavoriteNullText = styled.h2`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.75rem; // 44px
  line-height: 3.3125rem; // 53px
  color: ${COLORS.textPrimary};
  margin: ${SPACING.marginY} 0;
`;
