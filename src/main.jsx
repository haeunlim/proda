import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@assets/scss/style.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "@style/theme";
// css

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div id="wrap">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </div>
  </BrowserRouter>
);
