import React from "react";
import styled from "styled-components";

const AlertsContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0 0 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const Alerts = ({ alerts }: { alerts: any[] }) => (
  <AlertsContainer>
    <Title>Alertas</Title>
    <List>
      {alerts.map((alert, index) => (
        <ListItem key={index}>
          <strong>{alert.message}</strong> - {alert.date}
        </ListItem>
      ))}
    </List>
  </AlertsContainer>
);

export default Alerts;
