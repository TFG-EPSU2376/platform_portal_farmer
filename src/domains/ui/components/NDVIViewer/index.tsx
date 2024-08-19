import React, { useState } from "react";
import styled from "styled-components";
import Map, { Source, Layer } from "react-map-gl";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NDVIViewer = ({ coordinates, data, onDateChange }) => {
  if (!data?.polygonData) return null;
  const { metadata, ndviImageUrl, polygonData, ndviStats } = data;
  const currentDate = new Date(metadata?.dt * 1000);
  const minLon = Math.min(...polygonData.coordinates.map((coord) => coord[0]));
  const maxLon = Math.max(...polygonData.coordinates.map((coord) => coord[0]));
  const minLat = Math.min(...polygonData.coordinates.map((coord) => coord[1]));
  const maxLat = Math.max(...polygonData.coordinates.map((coord) => coord[1]));

  const imageCoordinates = [
    [minLon, maxLat],
    [maxLon, maxLat],
    [maxLon, minLat],
    [minLon, minLat],
  ];

  const handlePrevDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 14);
    onDateChange(newDate);
  };

  return coordinates?.latitude && coordinates?.longitude ? (
    <NDVIContainer>
      <MapContainer>
        <Map
          mapboxAccessToken="***VITE_MAPBOX_ACCESS_TOKEN***"
          initialViewState={{
            latitude: polygonData.center[1],
            longitude: polygonData.center[0],
            zoom: 16,
          }}
          attributionControl={false}
          style={{
            width: "40vw",
            height: "32.5vh",
          }}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
        >
          <Source
            id="ndvi-image"
            type="image"
            url={ndviImageUrl}
            coordinates={imageCoordinates}
          >
            <Layer
              id="ndvi-layer"
              type="raster"
              paint={{
                "raster-opacity": 0.7,
              }}
            />
          </Source>
          <Source
            id="polygon-data"
            type="geojson"
            data={{
              properties: {},
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [polygonData.coordinates],
              },
            }}
          >
            <Layer
              id="polygon-outline"
              type="line"
              paint={{
                "line-color": "#ffffff",
                "line-width": 2,
              }}
            />
          </Source>
        </Map>
        <DateNavigation>
          <NavButton onClick={handlePrevDate}>
            <FaChevronLeft />
          </NavButton>
          <DateDisplay>{currentDate.toLocaleDateString()}</DateDisplay>
          <NavButton onClick={handleNextDate}>
            <FaChevronRight />
          </NavButton>
        </DateNavigation>
      </MapContainer>
      <NDVIInfoBox>
        <StatsGrid>
          <StatItem>
            <StatLabel>Min</StatLabel>
            <StatValue>{ndviStats.min.toFixed(2)}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Media</StatLabel>
            <StatValue>{ndviStats.mean.toFixed(2)}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Max</StatLabel>
            <StatValue>{ndviStats.max.toFixed(2)}</StatValue>
          </StatItem>
        </StatsGrid>
      </NDVIInfoBox>
    </NDVIContainer>
  ) : null;
};

export default NDVIViewer;

const NDVIContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 45vw;
  margin-top: -10px;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  margin-top: -14vh;
`;

const NDVIInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  background-color: #f5f5f5;
  padding: 0 20px;
  max-width: 60px;
  max-height: 30vh;
  margin-left: 8px;
`;

const DateNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 28px;
  background-color: #f5f5f5;
  width: 100%;
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  z-index: 1;
  height: 44px;
  width: 24px;
`;

const DateDisplay = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 12px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 60px;
  max-height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 2px;
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
