import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FavoriteIcon, HomeIcon } from '../Icons/Icons';
import {
  BrandText,
  BurgerButton,
  CloseButton,
  DiscoverTitle,
  Icon,
  ItemText,
  Logo,
  MobileHeader,
  ModsenfyWrapper,
  Nav,
  NavItem,
  NavList,
  PagesWrapper,
} from './SideBar.styled';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <MobileHeader>
        <ModsenfyWrapper>
          <Logo src="/img/logo.svg" alt="logo" />
          <BrandText>Modsenfy</BrandText>
        </ModsenfyWrapper>
        <BurgerButton onClick={toggleSidebar}>☰</BurgerButton>
      </MobileHeader>

      <Nav isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>×</CloseButton>

        <ModsenfyWrapper>
          <Logo src="/img/logo.svg" alt="logo" />
          <BrandText>Modsenfy</BrandText>
        </ModsenfyWrapper>

        <PagesWrapper>
          <DiscoverTitle>Discover</DiscoverTitle>
          <NavList>
            <li>
              <NavItem to="/" $active={location.pathname === '/'}>
                <Icon>
                  <HomeIcon
                    color={location.pathname === '/' ? '#FFFFFF' : '#999999'}
                  />
                </Icon>
                <ItemText $active={location.pathname === '/'}>Home</ItemText>
              </NavItem>
            </li>
            <li>
              <NavItem
                to="/favorite"
                $active={location.pathname === '/favorite'}
              >
                <Icon>
                  <FavoriteIcon
                    color={
                      location.pathname === '/favorite' ? '#FFFFFF' : '#999999'
                    }
                  />
                </Icon>
                <ItemText $active={location.pathname === '/favorite'}>
                  Your favorite
                </ItemText>
              </NavItem>
            </li>
          </NavList>
        </PagesWrapper>
      </Nav>
    </>
  );
};

export default SideBar;
