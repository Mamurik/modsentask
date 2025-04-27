import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen?: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 270px;
  height: 100vh;
  padding: 32px 24px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  z-index: 10;

  @media (max-width: 480px) {
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    width: 100%;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 12px 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  @media (max-width: 480px) {
    display: flex;
  }
`;
export const BurgerButton = styled.button`
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(133, 104, 245, 1);
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 28px;
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
  margin-bottom: 32px;
`;

export const Logo = styled.img`
  margin-right: 8px;
`;

export const BrandText = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.08em;
  background: linear-gradient(90deg, #46bbc7, #4488d8, #8768f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PagesWrapper = styled.div``;

export const DiscoverTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #3c3e43;
  margin-bottom: 17px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 17px 24px;
  margin-bottom: 12px;
  text-decoration: none;
  transition:
    background 0.3s,
    color 0.3s;

  ${({ $active }) =>
    $active
      ? css`
          background: linear-gradient(90deg, #3dc3c0 -15.19%, #8568f5 111.92%);
        `
      : css`
          &:hover {
            background: rgba(133, 104, 245, 0.1);
            color: #8568f5;
          }
        `}
`;

export const Icon = styled.svg<{ $active?: boolean }>`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  stroke: ${({ $active }) => ($active ? '#fff' : '#999')};
`;

export const ItemText = styled.p<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? '#fff' : '#999')};
`;
