import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./providers/cart/cart.provider.jsx";
import { GlobalProvider } from "./providers/GlobalState";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <GlobalProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </GlobalProvider>,
  document.getElementById("root")
);
