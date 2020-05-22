import React from "react";
import { mount } from "enzyme";
import Home from ".";

let props;

it("Should render.", () => {
  expect(mount(<Home {...props} />)).toMatchSnapshot();
});
