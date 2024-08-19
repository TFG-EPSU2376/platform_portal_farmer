import {
  LineChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;
`;

const ChartTitle = styled.h3`
  margin: 0 0 10px;
`;

const CustomXAxisTick = (props) => {
  const { x, y, payload, index } = props;
  return (
    <text x={x} y={y} dy={20} textAnchor="middle" fill="#666" fontSize={10}>
      {index % 2 === 0 ? payload.value : ""}
    </text>
  );
};

const AdvancedChart = ({ data }) => (
  <ChartContainer>
    <ResponsiveContainer aspect={1.75}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 5" />
        <XAxis dataKey="date" tick={<CustomXAxisTick />} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="precipitation"
          barSize={4}
          fill="#00bcd4"
          name="Lluvias"
        />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#ff7300"
          name="Temperatura"
        />
        <Line
          type="monotone"
          dataKey="humidity"
          stroke="#387908"
          name="Humedad"
        />
      </ComposedChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default AdvancedChart;
