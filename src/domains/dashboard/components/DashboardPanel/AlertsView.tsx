import { useSelector } from "react-redux";
import styled from "styled-components";

import AlertList from "../../../ui/components/AlertsList";
import Recommendations from "../../../ui/components/Recommendations";
import PlantationInfo from "../../../ui/components/PlantationInfo";
import Card from "../../../ui/components/Card";
interface AlertsViewProps {
  alerts: any;
  recommendations: any;
  plantationInfo: {
    name: string;
    location: string;
    seasonStart: string;
    harvestStatus: string;
    weeks: number;
  };
}

export default function AlertsView(data: AlertsViewProps) {
  const { alerts, recommendations } = data ?? {
    alerts: [],
    recommendations: [],
  };

  const proejctSettingData = useSelector<{
    api: {
      queries: {
        project_settings: () => any;
      };
    };
  }>((state) => state.api.queries["project_settings({})"]?.data) as {
    name: string;
    location: {
      street: string;
      city: string;
      country: string;
      latitude: number;
      longitude: number;
    };
    status: string;
    createdAt: string;
    owner: string;
    description: string;
  };

  const name = proejctSettingData?.name ?? "";
  const location = proejctSettingData?.location ?? undefined;
  const status = proejctSettingData?.status ?? "";
  const createdAt = proejctSettingData?.createdAt ?? "";
  const owner = proejctSettingData?.owner ?? "";
  const description = proejctSettingData?.description ?? "";

  const plantationInfoData = {
    name,
    description,
    owner,
    location: location
      ? `${location.street}, ${location.city}, ${location.country}`
      : "",
    harvestStatus: status === "active" ? "Activo" : "Inactivo",
    createdAt: createdAt ? new Date(createdAt).toLocaleString() : "",
    coordinates:
      location && location.latitude && location.longitude
        ? { latitude: location.latitude, longitude: location.longitude }
        : undefined,
  };

  return (
    <Container>
      <Header>
        <PlantationInfo {...plantationInfoData} />
        <Recommendations recommendations={recommendations} />
      </Header>
      <AlertListContainer title="Alertas">
        <AlertList alerts={alerts} />
      </AlertListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  justify-items: flex-start;
  flex-direction: row;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const AlertListContainer = styled(Card)`
  min-height: 27.5vh;
  margin-top: 18px;
  margin-bottom: 18px;
  flex-direction: column;
  padding: 0;
`;
