import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-left: 270px;
  height: 230px;
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
      rgba(61, 195, 192, 1) 0%,
      rgba(133, 104, 245, 1) 50%
    );
    opacity: 0.6;
    z-index: 1;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    height: 180px;
  }
`;

export const HeaderText = styled.h1`
  margin-top: 86px;
  margin-left: 56px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 55px;
  line-height: 67px;
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  z-index: 2;

  @media (max-width: 480px) {
    margin-top: 64px;
    margin-left: 20px;
    font-size: 36px;
    line-height: 42px;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 0;
`;
