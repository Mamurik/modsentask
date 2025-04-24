import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  padding: 0 16px;
  text-align: center;

  @media (max-width: 480px) {
    margin-top: 80px;
  }

  @media (max-width: 390px) {
    margin-top: 40px;
  }
`;

export const NotFoundText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 53px;
  color: #121212;

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (max-width: 390px) {
    font-size: 26px;
    line-height: 32px;
  }
`;
