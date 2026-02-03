import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LogProvider } from "./store/logs";
import { ToastProvider } from "./store/toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
      <LogProvider>
        <App />
      </LogProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
