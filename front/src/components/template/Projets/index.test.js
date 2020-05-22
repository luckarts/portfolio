import React from "react";
import { mount } from "enzyme";
import Projets from ".";

let props;

it("Should render.", () => {
  expect(mount(<Projets {...props} />)).toMatchSnapshot();
});
