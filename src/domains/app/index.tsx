import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../auth/hooks/useAuth";
import Loading from "./components/Loading";
import router from "../router";
import Header from "../router/components/Header";

export const App = () => {
  const dispatch = useDispatch();
  const { loadSession, loadState } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const isLoaded = useSelector(
    (state: { user: { isLoaded: boolean } }) => state.user.isLoaded
  );

  useEffect(() => {
    if (isLoaded == false && isLoading == false) {
      try {
        setIsLoading(true);
        loadState();
      } catch (error) {
        setIsLoading(false);
      }
    }
  }, [dispatch, loadState, loadSession, isLoading, isLoaded]);

  if (isLoaded === false) {
    return <Loading />;
  }

  return (
    <AppContainer>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default App;
