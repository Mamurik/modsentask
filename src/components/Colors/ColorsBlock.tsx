import styled from 'styled-components';

const StyledColorBlock = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  background-color: ${({ background }) => background};
  margin: 10px 0;
  border: 1px solid #ccc;
  color: #000;
  width: 200px;
  height: 60px;
  border-radius: 0px 20px 20px 20px;
`;

const ColorName = styled.div`
  margin-top: 5px;
  text-align: center;
`;

const ColorBlock: React.FC<{ background: string; name: string }> = ({
  background,
  name,
}) => {
  return (
    <StyledColorBlock background={background}>
      <ColorName>{name}</ColorName>
    </StyledColorBlock>
  );
};

export default ColorBlock;
