import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default Root;
