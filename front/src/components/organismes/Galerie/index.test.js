import React from "react";
import { shallow, mount } from "enzyme";
import Galerie from "./index";
import { checkProps } from "Utils/jest";

let wrapper, props, expectedProps, id, closeLightbox;
props = {
  i: 1,
  photoIndex: 1,
  className: "name",
  photos: "test",
  getIndexPhoto: jest.fn()
};
id = 1;
it("Should render.", () => {
  expect(mount(<Galerie {...props} />)).toMatchSnapshot();
});

describe("Galerie Component", () => {
  closeLightbox = () => jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Galerie {...props} />);
  });

  it(" Checking PropTypesShould not throw a warning", () => {
    const PropsError = checkProps(wrapper, props);
    expect(PropsError).toBeUndefined();
  });

  it(" Checking PropTypes Should not throw a warning", () => {
    expectedProps = {};
    const PropsError = checkProps(Galerie, expectedProps);
    expect(PropsError).toEqual(
      "Failed props type: The props `photoIndex` is marked as required in `Galerie`, but its value is `undefined`."
    );
  });

  it(" Checking Props LightboxGalerie ", () => {
    const { photoIndex } = wrapper.find("LightboxGalerie").props();
    const { getIndexPhoto } = wrapper.find("LightboxGalerie").props();
    expect(photoIndex).toEqual(1);
    expect(getIndexPhoto).toEqual(props.getIndexPhoto);
  });

  it(" Should call closeLightbox", done => {
    const { lightboxIsOpen } = wrapper.find("LightboxGalerie").props();
    wrapper.find("LightboxGalerie").prop("closeLightbox")(false);
    setTimeout(() => {
      expect(lightboxIsOpen).toEqual(false);
      done();
    });
  });
  it(" Should call openLightbox", done => {
    wrapper
      .find(".card")
      .first()
      .prop("openLightbox")(1);
    const { lightboxIsOpen } = wrapper.find("LightboxGalerie").props();
    setTimeout(() => {
      expect(lightboxIsOpen).toEqual(true);
      done();
    });
  });
});
