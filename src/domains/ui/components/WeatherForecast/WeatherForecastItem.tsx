import { FaTint } from "react-icons/fa";
import { MdVerticalAlignTop } from "react-icons/md";

import styled from "styled-components";
import WeatherConditionIcon from "./WeatherConditionIcon";

const WeatherForecastItem = ({ key, forecast }) => {
  const sameTemperature = forecast.temperatureMax === forecast.temperatureMin;

  return (
    <Forecast key={key}>
      <TimePeriod> {forecast.time}</TimePeriod>
      {sameTemperature ? (
        <Temperature
          style={{
            // color: "#a84032",
            color: "#339e53",
            fontWeight: "bold",
            fontSize: "16px",
            height: "45px",
          }}
        >
          {forecast.temperatureMax.toFixed(0)}°C
        </Temperature>
      ) : (
        <>
          <Temperature
            style={{
              // color: "#a84032",
              color: "#339e53",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <MdVerticalAlignTop />
            {forecast.temperatureMax.toFixed(0)}°C
          </Temperature>
          <Temperature
            style={{
              color: "#00bcd4",
              fontWeight: "lighter",
              fontSize: "12px",
            }}
          >
            <MdVerticalAlignTop style={{ transform: "rotate(180deg)" }} />
            {forecast.temperatureMin.toFixed(0)}°C
          </Temperature>
        </>
      )}
      <IconContainer>
        <WeatherConditionContainer>
          <WeatherConditionIcon condition={forecast.icon} />
          <Label>{`${forecast.label}`}</Label>
        </WeatherConditionContainer>
      </IconContainer>
      <MetaInfoContainer>
        <Humidity>{`${forecast.humidity}% Hum`}</Humidity>
        <Humidity>
          {`${forecast.precipitation} mm`}
          <FaTint size={10} style={{ marginLeft: "4px" }} />
        </Humidity>
      </MetaInfoContainer>
    </Forecast>
  );
};

export default WeatherForecastItem;

const MetaInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  max-height: 30px;
  width: 80%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherConditionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Forecast = styled.div`
  text-align: left;
  height: 190px;
  max-width: 150px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-width: 1px;
  border-style: solid;
`;

const TimePeriod = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
`;

const Temperature = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const Humidity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
