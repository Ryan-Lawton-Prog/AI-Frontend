import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  BrowserRouter as Router
} from "react-router-dom";

import App from './App';
import Login from './containers/Login/Login';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


// TESTS //
it('renders root directory', () => {
  act(() => {
    render(<App />, container);
  });
  const linkElement = screen.getByText(/Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});


// Login Tests //
it('renders login screen', () => {
  act(() => {
    render(<Router><Login/></Router>, container);
  });
  const screenTitle = document.querySelector("[class=Login]");
  const loginButton = document.querySelector("[type=submit]");
  expect(screenTitle).toBeInTheDocument();
  expect(loginButton).toBeDisabled();
});
