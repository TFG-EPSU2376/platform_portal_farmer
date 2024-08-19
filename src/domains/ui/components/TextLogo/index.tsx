import styled from "styled-components";
import OpenFarmLogo from "../../../../assets/of_logo.png";
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoText = styled.h1`
  font-size: 36px;
  font-weight: bold;
  background: linear-gradient(90deg, #006400, #00b140);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Arial", sans-serif;
`;

const TextLogo = () => {
  return (
    <LogoContainer>
      <ImageLogo src={OpenFarmLogo} alt="OpenFarm Logo" />
      <LogoText>Open Farm</LogoText>
    </LogoContainer>
  );
};

export default TextLogo;

const ImageLogo = styled.img`
  width: 200px;
`;
