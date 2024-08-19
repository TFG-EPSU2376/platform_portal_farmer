import styled from "styled-components";

const HistoryTable = ({ registros }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Fecha</Th>
            <Th>Tipo</Th>
            <Th>Sensor</Th>
            <Th>Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {registros.map((registro, index) => (
            <Tr key={index}>
              <Td>{registro.date}</Td>
              <Td>
                <Icon>{registro.icon}</Icon>
                {registro.type}
              </Td>
              <Td>{registro.sensor}</Td>
              <Td>
                {registro.value}
                {registro.unity}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default HistoryTable;

const TableContainer = styled.div`
  display: flex;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  width: 100%;
  min-height: 650px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead``;

const Th = styled.th`
  padding: 10px;
  text-align: center;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  margin-right: 10px;
`;
