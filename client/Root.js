import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import App from "./components/App";

const Root = props => (
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>
);

export default Root;
