import { FaCloudRain, FaCloudSun, FaSun, FaTint } from "react-icons/fa";
import styled from "styled-components";

const WeatherConditionIcon = ({
  condition,
  height = 50,
  width = 50,
  ...props
}) => {
  const ConditionIcon = (condition: string, props: any) => {
    const imageUrl = `/weather_conditions/${condition}.png`;
    return (
      <WeatherConditionContainer>
        <img src={imageUrl} width={width} height={height} />
      </WeatherConditionContainer>
    );
    switch (condition) {
      case "Soleado":
        return <FaSun {...props} />;
      case "Nublado":
        return <FaCloudSun {...props} />;
      case "Lluvia":
        return <FaCloudRain {...props} />;
      case "Calor Extremo":
        return <FaSun {...props} />;
      case "Tormenta":
        return <FaCloudRain {...props} />;

      default:
        return <></>;
    }
  };

  return ConditionIcon(condition, props);
};

export default WeatherConditionIcon;

const WeatherConditionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 26px;
`;
