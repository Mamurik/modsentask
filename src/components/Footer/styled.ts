import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background: linear-gradient(90deg, #3dc3c0 25.6%, #8568f5 100%);
  padding: 40px 20px;
  position: relative;
  z-index: 12;
`;

export const FooterInner = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const LeftRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 390px) {
    align-items: flex-start;
    text-align: left;
    padding-left: 10px;
    gap: 20px;
  }
`;

export const LeftGroup = styled.div`
  max-width: 320px;
  margin-right: 100px;

  @media (max-width: 1024px) {
    margin-right: 0;
  }

  @media (max-width: 390px) {
    margin: 0;
  }
`;

export const LeftText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 25px;
`;

export const RightGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 150px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  @media (max-width: 390px) {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    padding-left: 10px;
  }
`;

export const NavList = styled.ul`
  min-width: 140px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 390px) {
    li:not(:first-child) {
      display: none;
    }
  }
`;

export const ListTitle = styled.li`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 18px;
`;
export const ListItem = styled.li`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  color: #ffffff;
  margin-bottom: 10px;

  a {
    color: inherit;
    text-decoration: none;
    transition:
      color 0.3s ease,
      text-decoration 0.3s ease;
  }

  a:hover {
    color: orange;
    text-decoration: underline;
  }

  a:active {
    color: #ff6600;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 1060px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0px;

  p {
    color: #fff;
    font-size: 14px;
    margin: 10px 0;
  }

  img {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;

    p {
      margin-top: 15px;
    }
  }

  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding-left: 10px;
    margin: 0;

    p {
      margin-top: 5px;
    }
  }
`;

export const LinkList = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 390px) {
    justify-content: flex-start;
    margin-bottom: 20px;
    padding-left: 10px;
  }
`;

export const LinkItem = styled.a`
  width: 40px;
  height: 40px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  img {
    width: 20px;
    height: 20px;
    transition: filter 0.3s ease;
  }

  &:hover {
    background: orange;

    img {
      filter: brightness(0) invert(1);
    }
  }
`;
