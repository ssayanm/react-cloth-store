import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { GlobalProvider } from "./context/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
