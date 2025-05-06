import styled from 'styled-components';

export const SIZES = {
  maxWidth: '81.25rem',
  gap: '1.25rem',
  marginY: '1.25rem',
  padding: '0.625rem',
  buttonPadding: '0.5rem 1rem',
  borderRadius: '0.25rem',
};

export const FONT = {
  FAMILY: "'Inter', sans-serif",
};

export const COLORS = {
  primary: '#3DC3C0',
  primaryLight: '#3DC3C01A',
  primaryLighter: '#3DC3C033',
  primaryFocus: '#3DC3C04D',
  grayDisabled: '#99999980',
};
export const PaginationWrapper = styled.nav`
  max-width: ${SIZES.maxWidth};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: ${SIZES.gap};
  margin: ${SIZES.marginY} 0;
  padding: ${SIZES.padding};

  @media (max-width: 390px) {
    justify-content: center;
    align-items: center;
  }
`;

export const PaginationButton = styled.button`
  padding: ${SIZES.buttonPadding};
  color: ${COLORS.primary};
  background-color: transparent;
  border: 1px solid ${COLORS.primary};
  border-radius: ${SIZES.borderRadius};
  cursor: pointer;
  font-family: ${FONT.FAMILY};
  transition: all 0.3s ease;
  outline: none;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    background-color: ${COLORS.primaryLight};
    box-shadow: 0 0.125rem 0.5rem ${COLORS.primaryLight};
    transform: translateY(-0.0625rem);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    background-color: ${COLORS.primaryLighter};
    box-shadow: inset 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
  }

  &:focus-visible {
    box-shadow: 0 0 0 0.1875rem ${COLORS.primaryFocus};
  }

  &:disabled {
    color: ${COLORS.grayDisabled};
    border: 1px solid ${COLORS.grayDisabled};
    background-color: transparent;
    cursor: not-allowed;
    transform: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.3125rem;
    height: 0.3125rem;
    background: ${COLORS.primaryFocus};
    opacity: 0;
    border-radius: 100%;
    transform: scale(1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20);
      opacity: 0;
    }
  }
`;
