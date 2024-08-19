// src/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import ChangePassword from "../../pages/ChangePassword";
import ErrorPage from "../../pages/Error";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector<{
    user: {
      isAuthenticated: boolean;
    };
  }>((state) => state.user.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const isAuthenticated = useSelector<{
    user: {
      isAuthenticated: boolean;
    };
  }>((state) => state.user.isAuthenticated);
  const statet = useSelector((state) => state);

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
