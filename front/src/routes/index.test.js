import React from "react";

import { mount } from "enzyme";
import Routes from ".";
import { Provider } from "react-redux";
import Tabs from "../components/template/Tabs";
import { NotFound } from "components/pages/Notfound";
import { MemoryRouter, Route } from "react-router-dom";
import { testStore } from "Utils/jest";

let initialState = {};
describe("Routes", () => {
  const store = testStore(initialState);
  it("renders App if path is /", () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find(Tabs).length).toBe(1);
  });
});
