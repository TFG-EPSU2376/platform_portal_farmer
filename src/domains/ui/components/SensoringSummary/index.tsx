import styled from "styled-components";
import { BiSolidInbox } from "react-icons/bi";

import SensorChart from "../SensorChart";

const SensoringSummary = ({ data }) => {
  const emptyData = data?.length === 0;
  return (
    <Container>
      {emptyData ? (
        <EmptyContainer>
          <EmptyText>No hay datos recientes</EmptyText>
          <BiSolidInbox size={100} />
        </EmptyContainer>
      ) : (
        <SensorChart data={data} />
      )}
    </Container>
  );
};

export default SensoringSummary;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const EmptyText = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`;
