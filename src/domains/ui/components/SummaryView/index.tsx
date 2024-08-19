import styled from "styled-components";

import GeneralStatus from "../GeneralStatus";
import WeatherForecast from "../WeatherForecast";
import NDVIViewer from "../NDVIViewer";
import SensoringSummary from "../SensoringSummary";
import Card from "../Card";
import generalStatus from "./../GeneralStatus/mock.json";
interface SummaryViewProps {
  attributes: any;
  status: any;
  forecast: any;
  weather: {
    forecast: any;
  };
  project: {
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  sensors: any;
  settings?: {
    location: {
      latitude: number;
      longitude: number;
    };
  };
  ndvi?: any;
  actions: {
    ndvi: {
      onChangeDate: (date: any) => void;
    };
  };
}

export default function SummaryView(data: SummaryViewProps) {
  const { attributes, status, weather, sensors, project, ndvi, actions } = data;
  const forecast = weather.forecast?.data?.slice(0, 3);
  const { coordinates } = project;

  const handleDateChange = async (newDate) => {
    actions.ndvi.onChangeDate(newDate);
  };

  return (
    <Container>
      <SummaryPanel title="Estado General del Cultivo">
        <GeneralStatus data={generalStatus} />
      </SummaryPanel>
      <ForecastPanel title="Previsión Meteorológica">
        <WeatherForecast forecast={forecast} />
      </ForecastPanel>
      <SensoringSummaryPanel title={sensors?.chart?.length ? "Mediciones" : ""}>
        <SensoringSummary data={sensors?.chart} />
      </SensoringSummaryPanel>
      <NDVIPanel title="NDVI">
        <NDVIViewer
          data={ndvi}
          coordinates={coordinates}
          onDateChange={handleDateChange}
        />
      </NDVIPanel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1200px) {
    flex-direction: row;
    div {
      flex: 0 0 calc(50% - 16px); /* Dos columnas en pantallas grandes */
    }
  }
`;

const Panel = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  flex-direction: column;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 300px;

  @media (max-width: 767px) {
    flex-direction: column;
    div {
      flex: 1 0 100%; /* Una columna en pantallas pequeñas */
    }
  }
`;

const SummaryPanel = styled(Panel)`
  height: 330px;
  background-color: rgba(41, 255, 255, 0.15);
  max-width: 40vw;
  @media (max-width: 1200px) {
    height: 40vh;
    max-width: 75vw;
  }

  @media (max-width: 600px) {
    max-width: 95vw;
  }
`;

const ForecastPanel = styled(SummaryPanel)`
  height: 300px;
`;

const SensoringSummaryPanel = styled(SummaryPanel)`
  height: 37vh;
  display: flex;
  background-color: rgba(0, 220, 220, 0.25);
  max-width: 35vw;
  margin-top: -10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    height: 40vh;
    max-width: 75vw;
  }

  @media (max-width: 600px) {
    max-width: 95vw;
  }
`;

const NDVIPanel = styled(SummaryPanel)`
  height: 37vh;
  max-width: 75vw;
  margin-top: -10px;
  background-color: rgba(0, 220, 220, 0.25);
`;
