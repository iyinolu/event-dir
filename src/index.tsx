/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import interceptor from "./utils/axios-config";

interceptor(axios);

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <React.StrictMode>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiPickersUtilsProvider>
    </React.StrictMode>
  </PersistGate>,
  document.getElementById("root")
);
