import React from "react";
import { mount } from "enzyme";
import Notfound from ".";

let props;

it("Should render.", () => {
  expect(mount(<Notfound {...props} />)).toMatchSnapshot();
});
