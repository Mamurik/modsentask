import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px 0;
`;

export const SelectButton = styled.button`
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefefe;
  box-shadow: 0px 4px 20px rgba(255, 214, 0, 0.3);
`;

export const OptionsList = styled.ul`
  width: 150px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
  background: #fefefe;
  box-shadow: 0px 4px 20px rgba(255, 214, 0, 0.3);
  border-radius: 10px;
`;

export const OptionItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Arrow = styled.span`
  margin-left: 10px;
`;
