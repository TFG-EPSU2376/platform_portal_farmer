import { FaTint } from "react-icons/fa";
import { MdVerticalAlignTop } from "react-icons/md";

import styled from "styled-components";
import WeatherConditionIcon from "./WeatherConditionIcon";
import SolarRadiationIndex from "./SolarRadiationIndex";

const WeatherForecastItemExpanded = ({ key, forecast, radiation }) => {
  return (
    <Forecast key={key}>
      <ForecastHeader>
        <TimePeriod>{forecast.time}</TimePeriod>
        <Temperature
          style={{
            // color: "#a84032",
            color: "#339e53",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <MdVerticalAlignTop />
          {forecast.temperatureMax}°C
        </Temperature>
        <Temperature
          style={{
            color: "#00bcd4",
            fontWeight: "lighter",
            fontSize: "16px",
          }}
        >
          <MdVerticalAlignTop style={{ transform: "rotate(180deg)" }} />
          {forecast.temperatureMin}°C
        </Temperature>
        <IconContainer>
          <WeatherConditionIcon
            width={70}
            height={70}
            condition={forecast.icon}
          />
          <Label>{`${forecast.label}`}</Label>
        </IconContainer>
      </ForecastHeader>
      <MetaInfoContainer>
        {/* <Humidity>{`${forecast.humidity}% Prob`}</Humidity> */}
        <Humidity>{`${forecast.humidity}% Hum`}</Humidity>
        <Humidity>
          {`${forecast.rain ?? forecast.precipitation} mm`}
          <FaTint size={10} style={{ marginLeft: "4px" }} />
        </Humidity>
      </MetaInfoContainer>
      {/* <SolarRadiationIndex radiation={radiation} /> */}
    </Forecast>
  );
};

export default WeatherForecastItemExpanded;

const MetaInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  max-height: 30px;
  width: 80%;
  margin-bottom: 10px;
`;

const Forecast = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-style: solid;
`;

const ForecastHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
`;

const TimePeriod = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  padding: 16px 0;
`;

const Temperature = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Humidity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 8px;
  height: 10px;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
