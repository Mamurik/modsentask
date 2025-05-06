import { theme } from '@styles/theme';
import styled from 'styled-components';

const RECOMMENDED_TEXT_MARGIN = '2.5rem 0';
const MAX_WIDTH_DESKTOP = '100rem';
const MAX_WIDTH_TABLET = '75rem';
const MAX_WIDTH_MOBILE = '18.75rem';
const GAP = '0.625rem';
const PADDING = '1.25rem';

export const RecommendedWrapper = styled.section`
  margin-left: 2rem;

  @media (max-width: 68.125rem) {
    margin-left: 0;
  }
`;

export const RecommendedText = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  color: ${theme.colors.black};
  margin: ${RECOMMENDED_TEXT_MARGIN};
`;

export const RecommendedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${PADDING};
  gap: ${GAP};
  max-width: ${MAX_WIDTH_DESKTOP};
  margin: 0 auto;

  @media (max-width: 98.75rem) {
    max-width: ${MAX_WIDTH_TABLET};
  }

  @media (max-width: 68.125rem) {
    max-width: ${MAX_WIDTH_TABLET};
  }

  @media (max-width: 24.375rem) {
    padding: 0;
    max-width: ${MAX_WIDTH_MOBILE};
    margin: 0 auto;
  }
`;
