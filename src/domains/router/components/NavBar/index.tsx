import React from "react";
import styled from "styled-components";
import {
  FaHome,
  FaBook,
  FaCloudSun,
  FaBell,
  FaSatellite,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export enum NavigationItem {
  Dashboard = "Resumen",
  Pronóstico = "Pronóstico",
  Registros = "Registros",
  Satellite = "Satellite",
  Alertas = "Alertas",
}

const menuItems = [
  { key: NavigationItem.Dashboard, Icon: FaHome, action: "/" },
  { key: NavigationItem.Pronóstico, Icon: FaCloudSun, action: "/forecast" },
  { key: NavigationItem.Registros, Icon: FaBook, action: "/history" },
  {
    key: NavigationItem.Satellite,
    Icon: FaSatellite,
    action: "/satellite",
  },
  { key: NavigationItem.Alertas, Icon: FaBell, action: "/alerts" },
];

const Navbar = ({ active }: { active: string }) => {
  const navigate = useNavigate();

  const handleOnNavItemClick = (item: NavigationItem) => {
    const action = menuItems.find((i) => i.key === item)?.action;
    if (!action) return;
    navigate(action);
  };

  return (
    <NavbarContainer>
      {menuItems.map((item) => (
        <NavItem
          key={item.key}
          isActive={item.key === active}
          onClick={() => handleOnNavItemClick(item.key)}
        >
          <item.Icon size={16} />
          <NavText>{item.key}</NavText>
        </NavItem>
      ))}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: #3f51b5;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4px;
`;

const NavItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  `}

  svg {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

const NavText = styled.span`
  font-size: 12px;
  text-align: center;
`;

export default Navbar;
