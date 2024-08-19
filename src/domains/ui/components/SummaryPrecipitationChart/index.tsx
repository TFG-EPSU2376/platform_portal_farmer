import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styled from "styled-components";

const SummaryPrecipitationChart = ({ data }) => {
  const screenWidth = window.innerWidth;
  const width = Math.min(Math.max(screenWidth * 0.35, 300), 700);

  const chartData = data?.map((item) => ({
    date: new Date(item.date).toLocaleDateString(),
    precipitation: item.precipitation,
  }));
  return (
    <ChartContainer>
      <ChartTitle>Precipitaciones Semanales</ChartTitle>
      <ResponsiveContainer width={width} aspect={3.75}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="precipitation" fill="#8884d8" name="Precipitación" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default SummaryPrecipitationChart;

const ChartContainer = styled.div``;

const ChartTitle = styled.h3`
  margin: 0 0 10px;
  text-align: center;
  font-size: 16px;
`;
