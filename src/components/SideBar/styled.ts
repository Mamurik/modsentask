import { theme } from '@styles/theme';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// Константы
const NAV_WIDTH = '16.875rem'; // 270px
const PADDING = '2rem'; // 32px
const ITEM_PADDING_X = '1.5rem'; // 24px
const ITEM_PADDING_Y = '1.0625rem'; // 17px
const BORDER_RADIUS = '0.75rem'; // 12px
const HEADER_PADDING_X = '1rem'; // 16px
const HEADER_PADDING_Y = '0.75rem'; // 12px
const LOGO_MARGIN_RIGHT = '0.5rem'; // 8px
const FONT_SIZE = '1.5rem'; // 24px
const ICON_SIZE = '1.25rem'; // 20px
const CLOSE_BUTTON_SIZE = '1.75rem'; // 28px
const TRANSITION_DURATION = '0.3s';
const ACTIVE_BG = theme.colors.gradient;
const INACTIVE_COLOR = '#999';
const ACTIVE_COLOR = '#fff';

export const Nav = styled.nav<{ $isOpen?: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${NAV_WIDTH};
  height: 100vh;
  padding: ${PADDING};
  background: #fff;
  box-shadow: 0px 0.25rem 1.25rem rgba(0, 0, 0, 0.12);
  transition: transform ${TRANSITION_DURATION} ease;
  z-index: 10;

  @media (max-width: 480px) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    width: 100%;
  }
`;

export const MobileHeader = styled.header`
  display: none;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: ${HEADER_PADDING_Y} ${HEADER_PADDING_X};
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: 2;

  @media (max-width: 480px) {
    display: flex;
  }
`;

export const BurgerButton = styled.button`
  font-size: 1.625rem; // 26px
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(133, 104, 245, 1);
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 1.125rem; // 18px
  right: 1.125rem; // 18px
  font-size: ${CLOSE_BUTTON_SIZE};
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(133, 104, 245, 1);

  @media (max-width: 480px) {
    display: block;
  }
`;

export const ModsenfyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${PADDING} 0;
`;

export const Logo = styled.img`
  margin-right: ${LOGO_MARGIN_RIGHT};
`;

export const BrandText = styled.h1`
  font-size: ${FONT_SIZE};
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.08em;
  background: linear-gradient(90deg, #46bbc7, #4488d8, #8768f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PagesWrapper = styled.div``;

export const DiscoverTitle = styled.h2`
  font-size: 1rem; // 16px
  font-weight: 700;
  color: #3c3e43;
  margin-bottom: 1.0625rem; // 17px
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: ${BORDER_RADIUS};
  padding: ${ITEM_PADDING_Y} ${ITEM_PADDING_X};
  margin-bottom: 0.75rem; // 12px
  text-decoration: none;
  transition:
    background ${TRANSITION_DURATION},
    color ${TRANSITION_DURATION};

  ${({ $active }) =>
    $active
      ? css`
          background: ${ACTIVE_BG};
        `
      : css`
          &:hover {
            background: rgba(133, 104, 245, 0.1);
            color: #8568f5;
          }
        `}
`;

export const Icon = styled.svg<{ $active?: boolean }>`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  margin-right: 0.75rem; // 12px
  stroke: ${({ $active }) => ($active ? ACTIVE_COLOR : INACTIVE_COLOR)};
`;

export const ItemText = styled.p<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? ACTIVE_COLOR : INACTIVE_COLOR)};
`;
