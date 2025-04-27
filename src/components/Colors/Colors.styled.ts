import styled from 'styled-components';

export const ColorsWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

export const ColorsHeader = styled.div`
  height: 120px;
  width: 100%;
  background: rgba(56, 56, 56, 1);
`;

export const ColorsHeaderTitle = styled.h1`
  padding: 20px 0 20px 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 56px;
  color: #f6f9ff;
  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const ColorsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;

  > div {
    margin-bottom: 0;
  }

  h1 {
    margin-bottom: 10px;
  }
`;
