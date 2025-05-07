import { theme } from '@styles/theme';
import { rem } from '@utils/rem';
import styled from 'styled-components';

export const HEADER_MARGINS = {
  left: 270,
  top: 86,
  textLeft: 56,
  mobileTop: 64,
  mobileTextLeft: 20,
};

export const HEADER_SIZES = {
  height: 230,
  mobileHeight: 180,
  font: 55,
  lineHeight: 67,
  mobileFont: 36,
  mobileLineHeight: 42,
};

export const HeaderContainer = styled.header`
  margin-left: ${rem(HEADER_MARGINS.left)};
  height: ${rem(HEADER_SIZES.height)};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${theme.colors.cyan},
      ${theme.colors.violet}
    );
    opacity: 0.6;
    z-index: 1;
  }
  @media (max-width: ${rem(480)}) {
    margin-left: 0;
    height: ${rem(HEADER_SIZES.mobileHeight)};
  }
  @media (max-width: ${rem(390)}) {
    margin-left: 0;
    height: ${rem(HEADER_SIZES.mobileHeight)};
  }
`;

export const HeaderText = styled.h2`
  margin-top: ${rem(HEADER_MARGINS.top)};
  margin-left: ${rem(HEADER_MARGINS.textLeft)};
  font-family: ${theme.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(HEADER_SIZES.font)};
  line-height: ${rem(HEADER_SIZES.lineHeight)};
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  z-index: 2;

  @media (max-width: ${rem(390)}) {
    margin-top: ${rem(HEADER_MARGINS.mobileTop)};
    margin-left: ${rem(HEADER_MARGINS.mobileTextLeft)};
    font-size: ${rem(HEADER_SIZES.mobileFont)};
    line-height: ${rem(HEADER_SIZES.mobileLineHeight)};
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 0;
`;
