import styled from "styled-components";

const Card = ({
  title,
  style,
  className,
  children,
}: {
  title?: string;
  style?: React.CSSProperties;
  className?: string;
  children: any;
}) => (
  <CardContainer style={style} className={className}>
    {title && <Title>{title}</Title>}
    {children}
  </CardContainer>
);

export default Card;

const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const Title = styled.h2`
  margin: 20px 40px;
  font-size: 18px;
`;
