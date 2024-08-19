import React from "react";
import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa";

const AppBar = ({
  title,
  onLogout,
}: {
  title: string;
  onLogout: () => void;
}) => {
  return (
    <AppBarContainer>
      <HeaderContainer>
        <LogoContainer>OF</LogoContainer>
        <LogoutContainer onClick={onLogout}>
          <FaPowerOff size={14} />
        </LogoutContainer>
      </HeaderContainer>
    </AppBarContainer>
  );
};

const AppBarContainer = styled.header`
  color: white;
  background-color: #3f51b5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.header`
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(90deg, #00a140, #00b140);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Arial", sans-serif;
  cursor: pointer;
`;

const LogoutContainer = styled.div`
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ff4081;
  }

  svg {
    font-size: 20px;
  }
`;

export default AppBar;
