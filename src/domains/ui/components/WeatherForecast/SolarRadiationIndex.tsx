import React from "react";
import styled from "styled-components";

interface RadiationData {
  index: string;
  ghi: number;
  colorCode: string;
  date: string;
}

interface SolarRadiationIndexProps {
  radiation: RadiationData;
}

const SolarRadiationIndex: React.FC<SolarRadiationIndexProps> = ({
  radiation,
}) => {
  const { index, ghi, colorCode, date } = radiation;

  const getIndexNumber = (index: string): number => {
    switch (index) {
      case "Bajo":
        return 2;
      case "Moderado":
        return 4;
      case "Alto":
        return 6;
      case "Muy alto":
        return 8;
      case "Extremo":
        return 10;
      default:
        return 0;
    }
  };

  const indexNumber = getIndexNumber(index);

  return (
    <Container>
      <Label>Índice de Radiación Solar</Label>
      <ProgressBarContainer>
        <ProgressBar index={indexNumber} color={colorCode} />
      </ProgressBarContainer>
      <LabelsContainer>
        <IndexValue color={colorCode}>{index}</IndexValue>
        <GHIValue>{ghi} W/m²</GHIValue>
      </LabelsContainer>
      <DateValue>{new Date(date).toLocaleString()}</DateValue>
      {ghi > 600 && (
        <WarningMessage>Precaución: Alta radiación solar</WarningMessage>
      )}
    </Container>
  );
};

export default SolarRadiationIndex;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90px;
  max-height: 100px;
  max-width: 280px;
  margin: 10px 0;
  margin-top: 40px;
  padding: 12px 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 6px;
  color: #333;
`;

const LabelsContainer = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  justify-items: center;
  gap: 10px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 4px;
  max-width: 15vw;
`;

const ProgressBar = styled.div<{ index: number; color: string }>`
  width: ${(props) => props.index * 10}%;
  height: 20px;
  background-color: ${(props) => props.color};
  transition: width 0.3s ease-in-out;
`;

const IndexValue = styled.div<{ color: string }>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const GHIValue = styled.div`
  font-size: 12px;
  color: #666;
`;

const DateValue = styled.div`
  font-size: 11px;
  margin-top: 4px;
  color: #888;
`;

const WarningMessage = styled.div`
  margin-top: 15px;
  padding: 10px;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 5px;
  color: #856404;
  font-size: 14px;
`;
