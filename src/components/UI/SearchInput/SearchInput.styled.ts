import styled from 'styled-components';

export const MyInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const MyInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background: url('/img/search.svg') no-repeat 14px center;
  background-size: 20px 20px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border-color: #8568f5;
    box-shadow: 0 0 0 2px rgba(133, 104, 245, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 12px 10px 40px;
    background-size: 18px 18px;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 10px 12px 10px 40px;
    background-size: 16px 16px;
  }
`;
