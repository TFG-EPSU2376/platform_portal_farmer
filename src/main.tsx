import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import * as amplify_auth from "./domains/auth/amplify";
import store from "./domains/store/index.ts";
import { ToastContainer } from "react-toastify";
import { App } from "./domains/app/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
