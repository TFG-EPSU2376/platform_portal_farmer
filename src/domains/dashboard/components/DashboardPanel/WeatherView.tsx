import styled from "styled-components";
import Chart from "../../../ui/components/Chart";
import PrecipitationChart from "../../../ui/components/PrecipitationChart";
import WeatherForecastChart from "../../../ui/components/WeahterForecastChart";
import FutureAlerts from "../../../ui/components/FutureAlerts";
import WeatherStatusIndicator from "../../../ui/components/WeatherStatusIndicator";
import SummaryPrecipitationChart from "../../../ui/components/SummaryPrecipitationChart";
import WeatherForecast from "../../../ui/components/WeatherForecast";
import Card from "../../../ui/components/Card";

interface WeatherViewProps {
  weather: any;
}

const precipitationData = [
  { week: "Enero", currentYear: 20, lastYear: 30 },
  { week: "Febrero ", currentYear: 25, lastYear: 20 },
  { week: "Marzo", currentYear: 30, lastYear: 25 },
  { week: "Abril", currentYear: 35, lastYear: 30 },
  { week: "Mayo", currentYear: 40, lastYear: 35 },
  { week: "Junio", currentYear: undefined, lastYear: 40 },
  { week: "Julio", currentYear: undefined, lastYear: 45 },
  { week: "Agosto", currentYear: undefined, lastYear: 50 },
  { week: "Septiembre", currentYear: undefined, lastYear: 55 },
  { week: "Octubre", currentYear: undefined, lastYear: 60 },
  { week: "Noviembre", currentYear: undefined, lastYear: 65 },
  { week: "Diciembre", currentYear: undefined, lastYear: 70 },
];
export default function WeatherView(data: WeatherViewProps) {
  const { weather } = data;

  const forecast = weather.forecast?.data;
  const precipitationData = weather.rain?.chart?.monthlyPrecipitation;

  return (
    <GridContainer>
      <HeaderContainer title="Previsión">
        <HeaderContent>
          <WeatherStatusIndicator
            data={weather}
            level="High"
            status="Calor Extremo"
          />
          <WeaherContainer>
            <WeatherForecast forecast={forecast} />
            <SummaryPrecipitationChart data={precipitationData} />
          </WeaherContainer>
        </HeaderContent>
      </HeaderContainer>
      <EventsContainer title="Eventos / Alertas">
        <FutureAlerts alerts={weather.events.items} />
      </EventsContainer>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeaderContainer = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  flex-direction: column;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-height: 45vh;
  max-width: 85vw;
  @media (max-width: 768px) {
    height: 160vh;
    max-height: 160vh;
  }
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventsContainer = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  flex-direction: column;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  min-height: 250px;
  max-height: 450px;
  height: auto;
  overflow-y: scroll;
`;
const WeaherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 55vw;
`;
