import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders login form", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const loginTitle = screen.getByText(/Have an account?/i);
  expect(loginTitle).toBeInTheDocument();
});
