import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const NDVIDataChart = (props) => {
  const data = props?.data?.ndvi;
  const { chartData } = data;

  return (
    <Container>
      <ChartContainer>
        <ResponsiveContainer width={900} height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis domain={[0, 1]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="max" stroke="#8884d8" />
            <Line type="monotone" dataKey="mean" stroke="#82ca9d" />
            <Line type="monotone" dataKey="min" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default NDVIDataChart;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.5);
  padding: 20px;
`;
