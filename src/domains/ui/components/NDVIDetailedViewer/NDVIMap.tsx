import styled from "styled-components";
import Map, { Source, Layer } from "react-map-gl";

const NDVIDMap = (props) => {
  const data = props?.data?.ndvi;
  if (!data?.polygonData) return <div>No data available</div>;

  const { polygonData } = data;

  const imageCoordinates = [
    [
      Math.min(...polygonData.coordinates.map((c) => c[0])),
      Math.max(...polygonData.coordinates.map((c) => c[1])),
    ],
    [
      Math.max(...polygonData.coordinates.map((c) => c[0])),
      Math.max(...polygonData.coordinates.map((c) => c[1])),
    ],
    [
      Math.max(...polygonData.coordinates.map((c) => c[0])),
      Math.min(...polygonData.coordinates.map((c) => c[1])),
    ],
    [
      Math.min(...polygonData.coordinates.map((c) => c[0])),
      Math.min(...polygonData.coordinates.map((c) => c[1])),
    ],
  ];

  const imageUrl = data?.ndviImageUrl
    ? data?.ndviImageUrl?.replace("http://", "https://")
    : undefined;

  return (
    <MapContainer>
      <Map
        mapboxAccessToken="***VITE_MAPBOX_ACCESS_TOKEN***"
        initialViewState={{
          latitude: polygonData.center[1],
          longitude: polygonData.center[0],
          zoom: 15.5,
        }}
        attributionControl={false}
        style={{ width: 800, height: 370 }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
      >
        {imageUrl ? (
          <Source
            id="ndvi-image"
            type="image"
            url={imageUrl}
            coordinates={imageCoordinates}
          >
            <Layer
              id="ndvi-layer"
              type="raster"
              paint={{ "raster-opacity": 0.7 }}
            />
          </Source>
        ) : (
          <></>
        )}
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
    </MapContainer>
  );
};

export default NDVIDMap;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
