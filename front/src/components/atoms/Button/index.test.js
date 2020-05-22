import React from "react";
import { shallow, mount } from "enzyme";
import { Button } from ".";
import { checkProps } from "Utils/jest";
let wrapper, props;
props = {
  children: "test"
};

it("Should render.", () => {
  expect(mount(<Button {...props} />)).toMatchSnapshot();
});

describe("Galerie Component with children props", () => {
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it("renders children when passed in", () => {
    expect(wrapper.find(".btn").text()).toEqual(props.children);
  });
  it(" Checking PropTypes no error", () => {
    const PropsError = checkProps(Button, props);
    expect(PropsError).toBeUndefined();
  });
});

describe("Galerie Component with onClick() props", () => {
  props = {
    children: "test",
    onClick: jest.fn()
  };
  it("Should render.", () => {
    expect(mount(<Button {...props} />)).toMatchSnapshot();
  });
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
    wrapper.find(".btn").simulate("click");
  });
  it(" Checking PropTypes no error", () => {
    const PropsError = checkProps(Button, props);
    expect(PropsError).toBeUndefined();
  });

  it("call function onClick callback", () => {
    expect(props.onClick).toHaveBeenCalled();
  });
});
