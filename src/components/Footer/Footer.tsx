import { footerLinks } from '@constants/footerLinks';
import { images } from '@utils/images';

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
            <img src={images.modsenfy} alt="Modsenfy logo" />
            <LeftText>
              We have sounds that capture every mood and inspire every vision.
              From soothing melodies to electrifying beats.
            </LeftText>
          </LeftGroup>

          <RightGroup aria-label="Footer navigation">
            {footerLinks.map(({ title, items }) => (
              <NavList key={title}>
                <ListTitle>{title}</ListTitle>
                {items.map((item) => (
                  <ListItem key={item}>
                    <a href="#!">{item}</a>
                  </ListItem>
                ))}
              </NavList>
            ))}
          </RightGroup>
        </LeftRightWrapper>

        <FooterBottom>
          <LinkList>
            <LinkItem href="https://x.com/modsencompany" aria-label="Twitter">
              <img src={images.twt} alt="Twitter" />
            </LinkItem>
            <LinkItem
              href="https://www.facebook.com/ModsenSoftware/"
              aria-label="Facebook"
            >
              <img src={images.fb} alt="Facebook" />
            </LinkItem>
            <LinkItem
              href="https://www.instagram.com/modsencompany/"
              aria-label="Instagram"
            >
              <img src={images.inst} alt="Instagram" />
            </LinkItem>
            <LinkItem
              href="https://github.com/Mamurik/modsenfy"
              aria-label="GitHub"
            >
              <img src={images.git} alt="GitHub" />
            </LinkItem>
          </LinkList>
          <p>Modsenfy © 2000–2025, All Rights Reserved</p>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
