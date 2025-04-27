import React, { FC } from 'react';
import styled from 'styled-components';

interface ContentProps {
  children: React.ReactNode;
}

const StyledContent = styled.div`
  margin: 39px 0px 39px 270px;
  position: relative;
  overflow: hidden;
  height: auto;

  @media (max-width: 480px) {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    height: auto;
  }
`;

const Content: FC<ContentProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
