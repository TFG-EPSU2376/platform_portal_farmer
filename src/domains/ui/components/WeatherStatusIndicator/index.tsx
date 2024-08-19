import styled from "styled-components";

import WeatherForecastItemExpanded from "../WeatherForecast/WeatherForecastItemExpanded";
import { transformWeatherItem } from "../../../dashboard/utils";
import WeatherForecastItem from "../WeatherForecast/WeatherForecastItem";

const WeatherStatusIndicator = ({ level, status, data }) => {
  let colors;
  let textColor;
  let text;

  switch (level) {
    case "Low":
      colors = "green, green";
      textColor = "green";
      text = "Bajo";
      break;
    case "Moderate":
      colors = "yellow, yellow";
      textColor = "yellow";
      text = "Moderado";
      break;
    case "High":
      colors = "red, red";
      textColor = "red";
      text = "Alto";
      break;
    default:
      colors = "grey, grey";
      textColor = "grey";
      text = "Desconocido";
      break;
  }
  const index = 0;
  const period = {
    time: "3h",
    temperatureMax: 25,
    temperatureMin: 17,
    humidity: 60,
    precipitation: 0,
    condition: "Soleado",
  };

  const { radiation } = data ?? {
    radiation: {
      index: "Alto",
      ghi: 550,
      colorCode: "#F85900",
      date: "2023-06-21T14:30:00Z",
    },
  };

  const currentDate = new Date();
  const formattedTime = currentDate
    .toLocaleString()
    .slice(0, 16)
    ?.replace("T", " ");

  const currentWeather = transformWeatherItem({
    ...data?.current,
    time: formattedTime,
  });
  return (
    <IndicatorContainer>
      {/* <GaugeContainer>
        <Needle level={level} />
        <Circle colors={colors}>
          <CenterText textColor={textColor}>{text}</CenterText>
        </Circle>
      </GaugeContainer>
      <StatusText>{status}</StatusText> */}
      <WeatherForecastItemExpanded
        key={index}
        radiation={radiation}
        forecast={{ ...currentWeather, condition: currentWeather.icon }}
      />
    </IndicatorContainer>
  );
};

export default WeatherStatusIndicator;

const IndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16vw;
  height: 35vh;
  // background-color: rgba(255, 255, 255, 0.15);
`;
