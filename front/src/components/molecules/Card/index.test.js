import React from "react";
import { shallow, mount } from "enzyme";
import Card from "./index";
import { checkProps } from "Utils/jest";

let wrapper, props;
let openLightbox = jest.fn();
props = {
  className: "test",
  i: 1,
  photos: "test",
  openLightbox: () => openLightbox(1)
};

it("Should render.", () => {
  expect(mount(<Card {...props} />)).toMatchSnapshot();
});

describe("Galerie Component with children props", () => {
  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
    wrapper.find("img").simulate("click");
  });

  it(" Checking PropTypes no error", () => {
    const PropsError = checkProps(Card, props);
    expect(PropsError).toBeUndefined();
  });
  it('Should call "openLightbox" when clicking on it', () => {
    expect(openLightbox).toHaveBeenCalled();
  });
});
