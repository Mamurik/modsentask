// Pagination.styled.ts
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 20px;
  margin: 20px 0;
  padding: 10px;
  @media (max-width: 390px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  color: rgba(61, 195, 192, 1);
  background-color: transparent;
  border: 1px solid rgba(61, 195, 192, 1);
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  &:hover:not(:disabled) {
    background-color: rgba(61, 195, 192, 0.1);
    box-shadow: 0 2px 8px rgba(61, 195, 192, 0.2);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    background-color: rgba(61, 195, 192, 0.2);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(61, 195, 192, 0.3);
  }

  &:disabled {
    color: rgba(153, 153, 153, 0.5);
    border: 1px solid rgba(153, 153, 153, 0.5);
    background-color: transparent;
    cursor: not-allowed;
    transform: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(61, 195, 192, 0.3);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
`;
