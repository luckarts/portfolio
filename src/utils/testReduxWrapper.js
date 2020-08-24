// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import configureStore from 'store/configure';

export function render(
  children,
  initialState,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},

  { store = configureStore(initialState) } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>;
      </Provider>
    );
  }
  return rtlRender(children, { wrapper: Wrapper });
}
export function renderRedux(
  children,
  initialState,

  { store = configureStore(initialState) } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(children, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
