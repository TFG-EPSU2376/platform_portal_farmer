import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import Header from "../../../router/components/Header";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container>
      <Header />
      <MainContainer>{children}</MainContainer>
    </Container>
  );
};

export default PrivateRoute;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;
