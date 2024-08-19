import { useState } from "react";
import styled from "styled-components";
import TextLogo from "../../../ui/components/TextLogo";

type LoginFormParams = {
  username: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: (data: LoginFormParams) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      onSubmit({ username, password });
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };
  return (
    <Container>
      <TextLogo />
      <Form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 12px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid gray;
  min-width: 200px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
