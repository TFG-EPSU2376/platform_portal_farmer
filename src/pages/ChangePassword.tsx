import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../domains/auth/hooks/useAuth";
import styled from "styled-components";
import { toast } from "react-toastify";
import TextLogo from "../domains/ui/components/TextLogo";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordTwo, setNewPasswordTwo] = useState("");

  const navigate = useNavigate();
  const { completeNewPasswordChallenge } = useAuth();
  const username = useSelector<{ user: { username: string } }>(
    (state) => state.user.username
  ) as string;

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      if (newPassword !== newPasswordTwo) {
        toast(`Las contraseñas no coinciden`);
        return;
      }
      completeNewPasswordChallenge(newPassword);
      navigate("/");
    } catch (error) {
      console.log("Error changing password:", error);
    }
  };

  return (
    <Container>
      <TextLogo />
      <Title>Bienvenido, {username}</Title>
      <Subtitle>Por favor, cambie su contraseña</Subtitle>

      <Form onSubmit={handleOnSubmit}>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <Input
          type="passwordTwo"
          value={newPasswordTwo}
          onChange={(e) => setNewPasswordTwo(e.target.value)}
          placeholder="Confirm New Password"
          required
        />
        <Button type="submit">Change Password</Button>
      </Form>
    </Container>
  );
};

export default ChangePassword;

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

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10px;
`;

const Subtitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 12px;
`;
