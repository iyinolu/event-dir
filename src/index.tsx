/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./tailwind.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import interceptor from "./utils/axios-config";
import { BrowserRouter } from "react-router-dom";

interceptor(axios);

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <React.StrictMode>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </MuiPickersUtilsProvider>
    </React.StrictMode>
  </PersistGate>,
  document.getElementById("root")
);
