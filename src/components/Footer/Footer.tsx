import {
  FooterBottom,
  FooterInner,
  FooterWrapper,
  LeftGroup,
  LeftRightWrapper,
  LeftText,
  LinkItem,
  LinkList,
  ListItem,
  ListTitle,
  NavList,
  RightGroup,
} from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <LeftRightWrapper>
          <LeftGroup>
            <img src="img/footer/modsenfy.png" alt="Modsenfy logo" />
            <LeftText>
              We have sounds that capture every mood and inspire every vision.
              From soothing melodies to electrifying beats.
            </LeftText>
          </LeftGroup>
          <RightGroup>
            <NavList>
              <ListTitle>COMPANY</ListTitle>
              <ListItem>
                <a href="#!">About</a>
              </ListItem>
              <ListItem>
                <a href="#!">Features</a>
              </ListItem>
            </NavList>
            <NavList>
              <ListTitle>HELP</ListTitle>
              <ListItem>
                <a href="#!">Customer Support</a>
              </ListItem>
              <ListItem>
                <a href="#!">Delivery Details</a>
              </ListItem>
            </NavList>
            <NavList>
              <ListTitle>FAQ</ListTitle>
              <ListItem>
                <a href="#!">Account</a>
              </ListItem>
              <ListItem>
                <a href="#!">Manage Deliveries</a>
              </ListItem>
            </NavList>
            <NavList>
              <ListTitle>Resources</ListTitle>
              <ListItem>
                <a href="#!">Free eBooks</a>
              </ListItem>
              <ListItem>
                <a href="#!">Development Tutorial</a>
              </ListItem>
            </NavList>
          </RightGroup>
        </LeftRightWrapper>
        <FooterBottom>
          <LinkList>
            <LinkItem href="https://x.com/modsencompany">
              <img src="img/footer/twt.svg" alt="twt" />
            </LinkItem>
            <LinkItem href="https://www.facebook.com/ModsenSoftware/?locale=ru_RU">
              <img src="img/footer/fb.svg" alt="Facebook" />
            </LinkItem>
            <LinkItem href="https://www.instagram.com/modsencompany/">
              <img src="img/footer/inst.svg" alt="Instagram" />
            </LinkItem>
            <LinkItem href="https://github.com/Mamurik/modsenfy">
              <img src="img/footer/git.svg" alt="GitHub" />
            </LinkItem>
          </LinkList>
          <p>Modsenfy © 2000–2025, All Rights Reserved</p>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
