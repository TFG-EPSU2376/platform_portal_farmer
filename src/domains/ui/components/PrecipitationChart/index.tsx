import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const PrecipitationChart = ({ data }) => (
  <ChartContainer>
    <ChartTitle>Precipitaciones, Temperatura y Humedad</ChartTitle>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="precipitation" stroke="#00bcd4" />
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
        <Line type="monotone" dataKey="humidity" stroke="#387908" />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default PrecipitationChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
`;

const ChartTitle = styled.h3`
  margin: 0 0 10px;
`;
