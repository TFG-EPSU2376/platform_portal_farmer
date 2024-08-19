import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import SensorChartTooltip from "./SensorChartTooltip";

const SensorChart = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            content={(props) => (
              <SensorChartTooltip
                {...props}
                active={props.active}
                payload={props.payload}
                label={props.label}
              />
            )}
          />
          <Legend />

          <Area
            yAxisId="left"
            type="monotone"
            dataKey="temperatureMin"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="temperatureMax"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="temperatureAvg"
            stroke="#8884d8"
            dot={false}
          />

          <Area
            yAxisId="right"
            type="monotone"
            dataKey="humidityMin"
            stackId="2"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="humidityMax"
            stackId="2"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="humidityAvg"
            stroke="#82ca9d"
            dot={false}
          />

          <Area
            yAxisId="right"
            type="monotone"
            dataKey="rainfallMin"
            stackId="3"
            stroke="#ffc658"
            fill="#ffc658"
            fillOpacity={0.3}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="rainfallMax"
            stackId="3"
            stroke="#ffc658"
            fill="#ffc658"
            fillOpacity={0.3}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="rainfallAvg"
            stroke="#ffc658"
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default SensorChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;
`;

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
