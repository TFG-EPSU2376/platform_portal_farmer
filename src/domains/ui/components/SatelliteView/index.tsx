import styled from "styled-components";

export default function SatelliteView(data) {
  return <Container></Container>;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    div {
      flex: 0 0 calc(50% - 16px); /* Dos columnas en pantallas grandes */
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    div {
      flex: 1 0 100%; /* Una columna en pantallas pequeñas */
    }
  }
`;
