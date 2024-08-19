import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "../domains/auth/components/LoginForm";
import { useAuth } from "../domains/auth/hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleOnSubmit = async (data) => {
    const result = await login(data);
    if (result && result.newPasswordRequired) {
      navigate("/change-password");
    } else if (result) {
      navigate("/");
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleOnSubmit} />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
