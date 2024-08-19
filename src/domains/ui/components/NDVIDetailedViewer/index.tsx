import styled from "styled-components";

import NDVIMeasurementInfo from "./NDVIMeasurementInfo";
import NDVIDMap from "./NDVIMap";
import NDVIMeasurementSelector from "./NDVIMeasurementSelector";
import NDVIDataChart from "./NDVIDataChart";

const NDVIDetailedViewer = (props) => {
  const data = props?.data?.ndvi;

  return (
    <Container>
      <TopSection>
        <NDVIMeasurementSelector data={props.data} />
        <NDVIDMap data={props.data} />
        <NDVIMeasurementInfo data={data} />
      </TopSection>
      <MainSection>
        <NDVIDataChart data={props.data} />
      </MainSection>
    </Container>
  );
};

export default NDVIDetailedViewer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(63, 81, 181, 0.6);
  width: 100%;
  height: 100%;
  padding-top: 40px;
`;

const TopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: flex-start;
  align-items: center;
`;
