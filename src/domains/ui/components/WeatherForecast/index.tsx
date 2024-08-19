import styled from "styled-components";
import WeatherForecastItem from "./WeatherForecastItem";

const WeatherForecast = ({ forecast }) => {
  return (
    <WeatherContainer>
      <ForecastsContainer>
        {forecast.map((period, index) => (
          <WeatherForecastItem key={index} forecast={period} />
        ))}
      </ForecastsContainer>
    </WeatherContainer>
  );
};

export default WeatherForecast;

const WeatherContainer = styled.div`+
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
 `;

const ForecastsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
