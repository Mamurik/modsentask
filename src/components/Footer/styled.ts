import { theme } from '@styles/theme';
import styled from 'styled-components';

const SPACING = {
  padding: '2.5rem 1.25rem',
  gapLarge: '2.5rem',
  gapMedium: '1.5rem',
  gapSmall: '1rem',
};

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${theme.colors.gradient};
  padding: ${SPACING.padding};
  position: relative;
  z-index: 12;
`;

export const FooterInner = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const LeftRightWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACING.gapLarge};
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 64rem) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 24.375rem) {
    align-items: flex-start;
    text-align: left;
    padding-left: 0.625rem;
    gap: ${SPACING.gapSmall};
  }
`;

export const LeftGroup = styled.div`
  max-width: 20rem;
  margin-right: 6.25rem;

  @media (max-width: 64rem) {
    margin-right: 0;
  }

  @media (max-width: 24.375rem) {
    margin: 0;
  }
`;

export const LeftText = styled.p`
  font-size: 0.875rem;
  line-height: 1.57;
  color: ${theme.colors.white};
  margin-top: 1.5rem;
`;

export const RightGroup = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9.375rem;

  @media (max-width: 75rem) {
    gap: 3.75rem;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  @media (max-width: 24.375rem) {
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${SPACING.gapSmall};
    padding-left: 0.625rem;
  }
`;

export const NavList = styled.ul`
  min-width: 8.75rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 24.375rem) {
    li:not(:first-child) {
      display: none;
    }
  }
`;

export const ListTitle = styled.li`
  font-size: 1.125rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  margin-bottom: 1.125rem;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.4;
  color: ${theme.colors.white};
  margin-bottom: 0.625rem;

  a {
    color: inherit;
    text-decoration: none;
    transition:
      color 0.3s ease,
      text-decoration 0.3s ease;

    &:hover {
      color: ${theme.colors.orange};
      text-decoration: underline;
    }

    &:active {
      color: ${theme.colors.orangeDark};
    }
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 66.25rem;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.625rem 0;

  p {
    color: ${theme.colors.white};
    font-size: 0.875rem;
    margin: 0.625rem 0;
  }

  img {
    margin-bottom: 0;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    text-align: center;
    margin: 0 auto;

    p {
      margin-top: 0.9375rem;
    }
  }

  @media (max-width: 24.375rem) {
    align-items: flex-start;
    text-align: left;
    padding-left: 0.625rem;

    p {
      margin-top: 0.3125rem;
    }
  }
`;

export const LinkList = styled.div`
  display: flex;
  gap: 0.9375rem;
  flex-wrap: wrap;

  @media (max-width: 48rem) {
    justify-content: center;
  }

  @media (max-width: 24.375rem) {
    justify-content: flex-start;
    margin-bottom: 1.25rem;
    padding-left: 0.625rem;
  }
`;

export const LinkItem = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  img {
    width: 1.25rem;
    height: 1.25rem;
    transition: filter 0.3s ease;
  }

  &:hover {
    background: ${theme.colors.orange};

    img {
      filter: brightness(0) invert(1);
    }
  }
`;
