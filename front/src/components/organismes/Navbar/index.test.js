import React from "react";
import { shallow, mount } from "enzyme";
import Navbar from ".";
import { checkProps } from "Utils/jest";
// refactoring
let wrap, props, id, expectedProps, PropsError;
props = {
  current_tabs: 1,
  activeTab: jest.fn()
};

it("Should render.", () => {
  expect(mount(<Navbar {...props} />)).toMatchSnapshot();
});

describe("Galerie Component", () => {
  id = 1;
  beforeEach(() => {
    props = {
      current_tabs: 1,
      activeTab: jest.fn()
    };
    wrap = shallow(<Navbar {...props} />);
  });
  it("renders correctly", () => {
    expect(wrap).toMatchSnapshot();
  });
  it(" Checking PropTypes no error", () => {
    PropsError = checkProps(Navbar, props);
    expect(PropsError).toBeUndefined();
  });
  it(" Checking PropTypes Should not throw a warning", () => {
    expectedProps = {};
    PropsError = checkProps(Navbar, expectedProps);
    expect(PropsError).toEqual(
      "Failed props type: The props `current_tabs` is marked as required in `Navbar`, but its value is `undefined`."
    );
  });
  describe("Galerie Component", () => {
    beforeEach(() => {
      wrap.find(".active").simulate("click");
    });
    it("renders properly", () => {
      expect(props.activeTab).toHaveBeenCalledWith(id);
    });
  });
});
