import { useEffect, useState } from "react";
import styled from "styled-components";

import AppBar from "../../../router/components/AppBar";
import GlobalStyles from "../../../ui/GlobalStyles";
import Navbar, { NavigationItem } from "../../../router/components/NavBar";

import { useAuth } from "../../../auth/hooks/useAuth";
import { useLocation } from "react-router-dom";
import { app_routes } from "../..";

const Header = ({}) => {
  const [activeSection, setActiveSection] = useState(NavigationItem.Dashboard);
  const { logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const route = app_routes.find((route) => route.path === pathname);
    if (route?.type) {
      setActiveSection(route.type);
    }
  }, [location.pathname]);

  return (
    <Container>
      <GlobalStyles />
      <HeaderContainer>
        <AppBar title="" onLogout={logout} />
        <Navbar active={activeSection} />
      </HeaderContainer>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 78px;
  background-color: red;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #3f51b5;
`;
