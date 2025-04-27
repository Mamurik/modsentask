import styled from 'styled-components';

export const MusicListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  max-width: 1200px;
  margin: 0px auto;
  @media (max-width: 1580) {
    max-width: 1200px;
  }
  @media (max-width: 1090px) {
    max-width: 1200px;
  }
  @media (max-width: 390px) {
    margin: 0px;
    padding: 0px;
  }
`;
export const ErrorFindText = styled.h1`
  color: 'red';
  margin: '10px 0';
  text-align: 'center';
  fontsize: '30px';
  padding: 100px;
`;
