import styled from 'styled-components';

const BUTTON_WIDTH = '9.375rem';
const BUTTON_PADDING = '0.625rem';
const BORDER_COLOR = '#ccc';
const BACKGROUND_COLOR = '#fefefe';
const ARROW_MARGIN_LEFT = '0.625rem';
const SHADOW_COLOR = 'rgba(255, 214, 0, 0.3)';
const MAX_OPTIONS_HEIGHT = '9.375rem';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.5rem;
  padding: 0.625rem 0;
`;

export const SelectButton = styled.button`
  width: ${BUTTON_WIDTH};
  padding: ${BUTTON_PADDING};
  border: 1px solid ${BORDER_COLOR};
  border-radius: 0.3125rem; // 5px
  background-color: ${BACKGROUND_COLOR};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.25rem 1.25rem ${SHADOW_COLOR};
  background: ${BACKGROUND_COLOR};

  @media (max-width: 390px) {
    width: 8.125rem; // 130px
    padding: 0.5rem; // 8px
  }
`;

export const OptionsList = styled.ul`
  width: ${BUTTON_WIDTH};
  text-align: left;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 0.3125rem; // 5px
  background-color: ${BACKGROUND_COLOR};
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${MAX_OPTIONS_HEIGHT};
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 0.25rem 1.25rem ${SHADOW_COLOR};
  border-radius: 0.625rem; // 10px

  @media (max-width: 390px) {
    width: 8.125rem; // 130px
  }
`;

export const OptionItem = styled.li`
  padding: ${BUTTON_PADDING};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Arrow = styled.span`
  margin-left: ${ARROW_MARGIN_LEFT};
`;
