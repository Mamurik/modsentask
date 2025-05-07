import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderSpan = styled.span`
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid transparent;
    animation: ${spin} 1s linear infinite;
  }

  &::before {
    border-top-color: #4ade80;
    animation-duration: 1.2s;
  }

  &::after {
    border-bottom-color: #22d3ee;
    animation-duration: 0.8s;
  }
`;
