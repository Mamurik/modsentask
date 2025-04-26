import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 8px dotted rgba(225, 225, 225, 1);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
`;

export default () => <Loader />;
