import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const WeatherForecastChart = ({ data }) => (
  <ChartContainer>
    <ChartTitle>Previsión del Tiempo</ChartTitle>
    <ResponsiveContainer>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#ff7300" />
        <Bar dataKey="humidity" fill="#387908" />
        <Bar dataKey="precipitation" fill="#00bcd4" />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default WeatherForecastChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
`;

const ChartTitle = styled.h3`
  margin: 0 0 10px;
`;
