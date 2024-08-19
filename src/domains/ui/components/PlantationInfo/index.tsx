import styled from "styled-components";
import Map from "react-map-gl";
import Card from "../Card";

const PlantationInfo = ({
  name,
  coordinates,
  description,
  owner,
  location,
  createdAt,
  harvestStatus,
}) => (
  <InfoContainer title="Información de la Plantación">
    <InfoItem>
      <strong>Nombre:</strong> {name} ({owner})
    </InfoItem>
    <InfoItem>
      <strong>Descripción:</strong> {description}
    </InfoItem>
    <InfoItem>
      <strong>Ubicación:</strong> {location}
    </InfoItem>
    <InfoItem>
      <strong>Fecha de creación:</strong> {createdAt}
    </InfoItem>
    <InfoItem>
      <strong>Estado:</strong> {harvestStatus}
    </InfoItem>
    {coordinates && (
      <MapContainer>
        <Map
          mapboxAccessToken="***VITE_MAPBOX_ACCESS_TOKEN***"
          initialViewState={{
            ...coordinates,
            zoom: 17,
          }}
          attributionControl={false}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
        />
      </MapContainer>
    )}
  </InfoContainer>
);

export default PlantationInfo;

const InfoContainer = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 16px 30px;
  margin: 8px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  max-width: 32.5vw;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: 65vh;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 240px;
  max-width: 450px;
  margin: 20px auto 0;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }

  /* Asegúrate de que el mapa ocupe todo el espacio del contenedor */
  .mapboxgl-map {
    width: 100% !important;
    height: 100% !important;
  }
`;

const InfoItem = styled.p`
  margin: 5px 0;
  font-size: 14px;
  padding: 2px 0;
`;
