import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

import styled from "styled-components";

const CustomXAxisTick = (props) => {
  const { x, y, payload, index } = props;
  return (
    <text x={x} y={y} dy={20} textAnchor="middle" fill="#666" fontSize={10}>
      {index % 2 === 0 ? payload.value : ""}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Fecha: ${label}`}</p>
        {payload.map((data, index) => (
          <p key={index} className="intro">{`${data.name}: ${data.value} ${
            data.name === "temperature"
              ? "°C"
              : data.name === "humidity"
              ? "%"
              : "mm"
          }`}</p>
        ))}
      </div>
    );
  }

  return null;
};

const AdvancedSensorsChart = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer aspect={1.75}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={<CustomXAxisTick />} />
          <YAxis yAxisId="left" domain={[-10, 40]} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
          <Tooltip content={CustomTooltip} />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            dot={{ r: 3 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="humidity"
            stroke="#82ca9d"
            dot={{ r: 3 }}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="rainfall"
            stroke="#8884d8"
            fillOpacity={0.3}
            fill="#8884d8"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default AdvancedSensorsChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }

  @media (max-width: 320px) {
    height: 120px;
  }
`;
