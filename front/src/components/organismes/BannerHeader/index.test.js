import React from "react";
import { shallow, mount } from "enzyme";
import BannerHeader from "./index";
import { checkProps } from "Utils/jest";
let wrapper, props;
props = {
  activeTab: jest.fn()
};

it("Should render.", () => {
  expect(mount(<BannerHeader {...props} />)).toMatchSnapshot();
});

describe("BannerHeader Component", () => {
  beforeEach(() => {
    wrapper = shallow(<BannerHeader {...props} />);
    wrapper.find(".banner-inner").simulate("click");
  });

  it(" Checking PropTypes no error", () => {
    const PropsError = checkProps(BannerHeader, props);
    expect(PropsError).toBeUndefined();
  });
  it('Should call "openLightbox" when clicking on it', () => {
    expect(props.activeTab).toHaveBeenCalled();
  });
});
