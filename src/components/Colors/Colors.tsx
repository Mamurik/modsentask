import {
  ColorsDiv,
  ColorsHeader,
  ColorsHeaderTitle,
  ColorsWrapper,
} from './Colors.styled';
import ColorBlock from './ColorsBlock';

const Colors = () => {
  return (
    <ColorsWrapper>
      <ColorsHeader>
        <ColorsHeaderTitle>Colors</ColorsHeaderTitle>
      </ColorsHeader>
      <ColorsDiv>
        <div>
          <h1>Main</h1>
          <ColorBlock background="rgba(61, 195, 192, 1)" name="Primary" />
          <ColorBlock background="rgba(133, 104, 245, 1)" name="Secondary" />
        </div>
        <div>
          <h1>Status</h1>
          <ColorBlock background="rgba(242, 78, 30, 1)" name="active" />
        </div>
        <div>
          <h1>Greyscale</h1>
          <ColorBlock background="rgba(107, 107, 107, 1)" name="gray-500" />
          <ColorBlock background="rgba(153, 153, 153, 1)" name="gray-400" />
        </div>
        <div>
          <h1>Background</h1>
          <ColorBlock background="rgba(255, 214, 0, 0.3)" name="yellow" />
          <ColorBlock background="rgba(18, 18, 18, 0.3)" name="gray" />
        </div>
        <div>
          <h1>Others</h1>
          <ColorBlock background="rgba(18, 18, 18, 1)" name="dark" />
          <ColorBlock background="rgba(255, 255, 255, 1)" name="white" />
          <ColorBlock background="rgba(241, 121, 0, 1)" name="orange" />
          <ColorBlock background="rgba(224, 164, 73, 1)" name="Gold ochre" />
          <ColorBlock
            background="linear-gradient(90deg, #3DC3C0 0%, #8568F5 99.91%)"
            name="Gradient VioletMint"
          />
          <p>linear-gradient(90deg, #3DC3C0 0%, #8568F5 99.91%)</p>
        </div>
      </ColorsDiv>
    </ColorsWrapper>
  );
};

export default Colors;
