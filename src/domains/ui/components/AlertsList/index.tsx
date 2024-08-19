import styled from "styled-components";

const AlertList = ({ alerts }) => (
  <Container>
    {alerts.map((alert, index) => (
      <ListItem key={index}>
        <IndicatorContainer>
          <Indicator color={alert.color} />
        </IndicatorContainer>
        <AlertInfo>
          <AlertMessage>
            <AlertReason>{alert.reason}</AlertReason>
            <AlertDescription>{alert.description}</AlertDescription>
          </AlertMessage>
          <AlertMessage>
            <AlertDate>{alert.date}</AlertDate>
            <AlertDate>{alert.source}</AlertDate>
          </AlertMessage>
        </AlertInfo>
      </ListItem>
    ))}
  </Container>
);

export default AlertList;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.008);
  padding: 20px;
  margin: 20px 0;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
`;

const AlertInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AlertDate = styled.span`
  font-size: 14px;
  color: gray;
`;

const AlertMessage = styled.div`
  display: flex;
  flex: 1;
  align-items: space-between;
  font-size: 14px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 2px;
  padding-left: 0;
`;

const AlertReason = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const AlertDescription = styled.span`
  font-size: 14px;
  color: #ccc;
`;

const Indicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;
