import styled from "styled-components";

const SoilContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
`;

const Attribute = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const AttributeLabel = styled.span`
  flex: 1;
  font-size: 16px;
`;

const AttributeValue = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const AttributeIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
`;

const SoilAttributes = ({ attributes }) => (
  <SoilContainer>
    <h3>Atributos del Suelo</h3>
    {attributes.map((attr, index) => (
      <Attribute key={index}>
        <AttributeLabel>{attr.label}</AttributeLabel>
        <AttributeValue>{attr.value}</AttributeValue>
        <AttributeIndicator color={attr.color} />
      </Attribute>
    ))}
  </SoilContainer>
);

export default SoilAttributes;
