import styled from "styled-components";

const SensorChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const temperatureData = payload.filter((p) =>
      p.name.includes("temperature")
    );
    const humidityData = payload.filter((p) => p.name.includes("humidity"));
    const rainfallData = payload.filter((p) => p.name.includes("rainfall"));

    return (
      <TooltipContainer>
        <TooltipTitle>{`Hora: ${label}`}</TooltipTitle>
        {[
          {
            name: "Temperatura",
            data: temperatureData,
            unit: "°C",
            color: "#8884d8",
          },
          { name: "Humedad", data: humidityData, unit: "%", color: "#82ca9d" },
          { name: "Lluvia", data: rainfallData, unit: "mm", color: "#ffc658" },
        ].map(({ name, data, unit, color }) => (
          <div key={name}>
            <TooltipContent style={{ color }}>
              <TooltipLabel>{name}:</TooltipLabel>
              <TooltipValue>
                {`${data
                  .find((d) => d.name.includes("Avg"))
                  .value.toFixed(2)} ${unit}`}
                {` (${data
                  .find((d) => d.name.includes("Min"))
                  .value.toFixed(2)} - ${data
                  .find((d) => d.name.includes("Max"))
                  .value.toFixed(2)})`}
              </TooltipValue>
            </TooltipContent>
          </div>
        ))}
      </TooltipContainer>
    );
  }
  return null;
};

export default SensorChartTooltip;

const TooltipContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TooltipTitle = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
  color: black;
`;

const TooltipContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
`;

const TooltipLabel = styled.span`
  font-weight: 500;
  margin-right: 8px;
`;

const TooltipValue = styled.span`
  font-weight: 300;
`;
