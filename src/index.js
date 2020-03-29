import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Them } from "./them";
import GlobalStyles from "./style/globalstyles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Them}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
