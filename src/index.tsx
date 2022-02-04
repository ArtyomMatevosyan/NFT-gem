import React from "react";

import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import { Router } from "react-router";

import App from "./App";
import { store } from "./redux/store";
import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";
import history from "./utils/history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <MoralisProvider
          serverUrl="https://hzb5ejpgakiv.usemoralis.com:2053/server"
          appId="YM3Ocj7NbmMRDZpgM69Mud1F49M7eW8ZfARYf945"
        >
          <App />
        </MoralisProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
