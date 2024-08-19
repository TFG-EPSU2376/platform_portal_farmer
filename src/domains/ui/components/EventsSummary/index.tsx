import styled from "styled-components";

const WeatherContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  text-align: center;
`;

const WeatherTitle = styled.h3`
  margin: 0 0 20px;
`;

const Forecast = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

const ForecastItem = styled.div`
  text-align: center;
`;

const Temperature = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Condition = styled.div`
  font-size: 16px;
`;

const EventsSummary = ({ events }) => (
  <WeatherContainer>
    <WeatherTitle>Previsión Básica del Tiempo</WeatherTitle>
    {events.map((day, index) => (
      <Forecast key={index}>
        <ForecastItem>
          <div>{day.day}</div>
          <Temperature>{day.temperature}°C</Temperature>
          <Condition>{day.condition}</Condition>
        </ForecastItem>
      </Forecast>
    ))}
  </WeatherContainer>
);

export default EventsSummary;
