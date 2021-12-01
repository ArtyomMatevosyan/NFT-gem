import React from "react";

import { Web3ReactProvider } from "@web3-react/core";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import Web3 from "web3";

import App from "./App";
import { store } from "./redux/store";
import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";
import history from "./utils/history";

function getLibrary(provider: any) {
  return new Web3(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
