import { images } from '@utils/images';

import { HeaderContainer, HeaderImage, HeaderText } from './styled';
const HEADER_TEXT = 'live music';
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>{HEADER_TEXT}</HeaderText>
      <HeaderImage src={images.header} alt="Header background" />
    </HeaderContainer>
  );
};

export default Header;
