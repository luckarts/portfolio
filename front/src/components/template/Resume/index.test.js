import React from "react";
import { shallow, mount } from "enzyme";
import Resume from ".";

let props;

it("Should render.", () => {
  expect(mount(<Resume {...props} />)).toMatchSnapshot();
});
