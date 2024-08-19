import styled from "styled-components";

const FutureAlerts = ({ alerts }) => (
  <AlertsContainer>
    <List>
      {alerts.map((alert, index) => (
        <ListItem key={index}>
          <AlertInfo>
            <AlertReason>{alert.reason}</AlertReason>
            <AlertDate>{alert.date}</AlertDate>
          </AlertInfo>
          <Indicator color={alert.color} />
        </ListItem>
      ))}
    </List>
  </AlertsContainer>
);

export default FutureAlerts;

const AlertsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const List = styled.ul`
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
`;

const AlertDate = styled.span`
  font-size: 14px;
  color: gray;
`;

const AlertReason = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Indicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
