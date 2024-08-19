import styled from "styled-components";
import HistoryTable from "../../../ui/components/HistoryTable";
import AdvancedSensorsChart from "../../../ui/components/AdvancedSensorsChart";
import Card from "../../../ui/components/Card";

interface HistoryViewProps {
  chart: any;
  history: any;
}

export default function HistoryView({ chart, history }) {
  return (
    <ContentContainer>
      <SummaryContainer>
        <AdvancedSensorsChart data={chart} />
      </SummaryContainer>
      <HistorialContainer title="Historial">
        <HistoryTable registros={history} />
      </HistorialContainer>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SummaryContainer = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  flex-direction: column;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  min-height: 250px;
  max-height: 450px;
  height: auto;
  overflow-y: scroll;
`;

const HistorialContainer = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  flex-direction: column;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  min-height: 250px;
  max-height: 450px;
  height: auto;
  overflow-y: scroll;
`;
