import React from "react";
import styled from "styled-components";
import { Thermometer, Droplet, Sprout, Star } from "lucide-react";

const GeneralStatus = ({ data }) => {
  if (!data) return null;

  const {
    estresHidrico,
    gradosDiaCrecimiento,
    indiceVigorVegetativo,
    puntuacionGeneral,
  } = data;

  const getColorForValue = (value, interpretacion) => {
    for (const [level, range] of Object.entries(interpretacion)) {
      const [min, max] = range as [number, number];
      if (value >= min && value <= max) {
        return level === "bajo"
          ? "#4CAF50"
          : level === "moderado"
          ? "#FFC107"
          : "#F44336";
      }
    }
    return "#000000";
  };

  const getColorForScore = (score) => {
    if (score >= 4.5) return "#4CAF50";
    if (score >= 3.5) return "#8BC34A";
    if (score >= 2.5) return "#FFC107";
    if (score >= 1.5) return "#FF9800";
    return "#F44336";
  };

  return (
    <CardContainer>
      <Card>
        <IconWrapper>
          <Droplet size={26} color="#3498db" />
        </IconWrapper>
        <CardTitle>Estrés Hídrico</CardTitle>
        <Value
          color={getColorForValue(
            estresHidrico.valor,
            estresHidrico.interpretacion
          )}
        >
          {estresHidrico.valor.toFixed(2) * 100}%
        </Value>
      </Card>
      <Card>
        <IconWrapper>
          <Thermometer size={26} color="#e74c3c" />
        </IconWrapper>
        <CardTitle>Grados Día de Crecimiento</CardTitle>
        <Value>
          {gradosDiaCrecimiento.valor}{" "}
          <Unit>{gradosDiaCrecimiento.unidad}</Unit>
        </Value>
      </Card>
      <Card>
        <IconWrapper>
          <Sprout size={26} color="#2ecc71" />
        </IconWrapper>
        <CardTitle>Índice de Vigor Vegetativo</CardTitle>
        <Value
          color={getColorForValue(
            indiceVigorVegetativo.valor,
            indiceVigorVegetativo.interpretacion
          )}
        >
          {indiceVigorVegetativo.valor.toFixed(2)}
        </Value>
      </Card>
      <Card>
        <SubInfo>Etapa: {gradosDiaCrecimiento.etapaFenologica}</SubInfo>
        <CardTitle>Puntuación General</CardTitle>
        <Value color={getColorForScore(puntuacionGeneral.valor)}>
          {puntuacionGeneral.valor.toFixed(1)}/5
        </Value>
      </Card>
    </CardContainer>
  );
};

export default GeneralStatus;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  max-height: 100px;
`;

const IconWrapper = styled.div`
  margin-bottom: 4px;
`;

const CardTitle = styled.h3`
  font-size: 14px;
  color: #555;
  margin-bottom: 2px;
  text-align: center;
  margin-top: 0px;
`;

const Value = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color || "#333"};
  margin-bottom: 6px;
  margin-top: 0px;
`;

const Unit = styled.span`
  font-size: 12px;
  color: #777;
  margin-top: 4px;
`;

const SubInfo = styled.span`
  font-size: 14px;
  color: #777;
  margin-top: 8px;
`;
