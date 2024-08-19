import styled from "styled-components";

const NDVIMeasurementInfo = (props) => {
  const date = props.data?.dt * 1000;
  const currentDate = new Date(date);
  const stats = props.data?.ndviStats ?? {
    max: 0,
    mean: 0,
    min: 0,
    std: 0,
  };

  return (
    <Container>
      <InfoPanel>
        <DateDisplay>{currentDate.toLocaleDateString()}</DateDisplay>
        <StatsGrid>
          <StatItem>
            <StatLabel>Max</StatLabel>
            <StatValue>{stats.max.toFixed(2)}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Mean</StatLabel>
            <StatValue>{stats.mean.toFixed(2)}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Min</StatLabel>
            <StatValue>{stats.min.toFixed(2)}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Std</StatLabel>
            <StatValue>{stats.std.toFixed(2)}</StatValue>
          </StatItem>
        </StatsGrid>
      </InfoPanel>
    </Container>
  );
};

export default NDVIMeasurementInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DateDisplay = styled.h2`
  font-size: 16px;
  text-align: center;
  color: black;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 180px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 8px;
  gap: 12px;
  margin: 18px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
