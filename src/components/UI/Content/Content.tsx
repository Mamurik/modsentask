import React, { FC } from 'react';
import styled from 'styled-components';

interface ContentProps {
  children: React.ReactNode;
}

const StyledContent = styled.div`
  margin: 39px 0px 39px 270px;
  position: relative;
  overflow: hidden;
  height: 800px;

  @media (max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
    padding: 16px;
    height: auto; /* или адаптируй по ситуации */
  }
`;

const Content: FC<ContentProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
