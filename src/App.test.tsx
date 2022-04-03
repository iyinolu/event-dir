import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

test("renders login form", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const loginTitle = screen.getByText(/Sign in to your account/i);
  expect(loginTitle).toBeInTheDocument();
});
