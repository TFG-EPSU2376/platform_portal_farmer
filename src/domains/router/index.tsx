import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import ErrorPage from "../../pages/Error";
import Login from "../../pages/Login";
import ChangePassword from "../../pages/ChangePassword";
import HomePage from "../../pages/Home";
import ForecastPage from "../../pages/Forecast";
import HistoryPage from "../../pages/History";
import AlertsPage from "../../pages/Alerts";
import { NavigationItem } from "./components/NavBar";
import SatellitePage from "../../pages/Satellite";

export const app_routes = [
  {
    type: NavigationItem.Dashboard,
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    type: NavigationItem.Pronóstico,
    path: "/forecast",
    element: <ForecastPage />,
  },
  {
    type: NavigationItem.Registros,
    path: "/history",
    element: <HistoryPage />,
  },
  {
    type: NavigationItem.Satellite,
    path: "/satellite",
    element: <SatellitePage />,
  },
  {
    type: NavigationItem.Alertas,
    path: "/alerts",
    element: <AlertsPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(app_routes);

export default router;
