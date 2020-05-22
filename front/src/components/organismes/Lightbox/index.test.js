import React from "react";
import { shallow, mount } from "enzyme";
import LightboxComponent from ".";
import { checkProps } from "Utils/jest";
import Lightbox from "react-image-lightbox";
let wrapper, props, expectedProps, id, photo, closeLightbox;
const photos = [
  {
    src: "/img/copper_study.jpg",
    width: 4,
    height: 3
  }
];
props = {
  lightboxIsOpen: true,
  photoIndex: 0,
  closeLightbox: jest.fn(),
  getIndexPhoto: jest.fn()
};

it("Should render.", () => {
  expect(mount(<LightboxComponent {...props} />)).toMatchSnapshot();
});

describe("Galerie Component", () => {
  beforeEach(() => {
    wrapper = shallow(<LightboxComponent {...props} />);
  });
  it(" Should call closeLightbox", () => {
    wrapper.find(Lightbox).prop("onCloseRequest")(false);
    expect(props.closeLightbox).toHaveBeenCalledWith(false);
  });
  it(" Should call onMoveNextRequest", () => {
    wrapper.find(Lightbox).prop("onMoveNextRequest")(props.photoIndex);
    expect(props.getIndexPhoto).toHaveBeenCalledWith(1);
  });
  it(" Should call onMoveNextRequest", () => {
    wrapper.find(Lightbox).prop("onMoveNextRequest")(props.photoIndex);
    expect(props.getIndexPhoto).toHaveBeenCalledWith(1);
  });
  it(" Should have props mainSrc ", () => {
    wrapper.find(Lightbox).prop("mainSrc");
    expect(wrapper.find(Lightbox).prop("mainSrc")).toEqual(
      "/img/copper_study.jpg"
    );
  });
});
