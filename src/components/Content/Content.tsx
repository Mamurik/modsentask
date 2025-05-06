import React, { FC } from 'react';

import { StyledContent } from './styled';

interface ContentProps {
  children: React.ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
