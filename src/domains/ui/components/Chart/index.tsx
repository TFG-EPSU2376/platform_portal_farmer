import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
`;

const ChartTitle = styled.h3`
  margin: 0 0 10px;
`;

const Chart = ({ data, dataKeyX, dataKeyY, title }: any) => (
  <ChartContainer>
    <ChartTitle>{title}</ChartTitle>
    <ResponsiveContainer>
      <LineChart data={data}>
        <Line type="monotone" dataKey={dataKeyY} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default Chart;
