import { images } from '@utils/images';

import { HeaderContainer, HeaderImage, HeaderText } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>live music</HeaderText>
      <HeaderImage src={images.header} alt="" />
    </HeaderContainer>
  );
};

export default Header;
