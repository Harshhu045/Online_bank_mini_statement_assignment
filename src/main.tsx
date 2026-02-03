import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LogProvider } from "./store/logs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LogProvider>
        <App />
      </LogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
