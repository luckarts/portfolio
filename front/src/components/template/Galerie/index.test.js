import React from "react";
import { shallow, mount } from "enzyme";
import Galerie, { mapStateToProps } from ".";
import { checkProps, testStore, findByTestAtrr } from "Utils/jest";

let wrapper, initialState, props, propTypes;
props = {
  getIndexPhoto: jest.fn(),
  photoIndex: 0
};

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Galerie store={store} {...props} />)
    .childAt(0)
    .dive();

  return wrapper;
};
describe("BannerHeader Component", () => {
  beforeEach(() => {
    (initialState = {
      GetIndex: {
        photoIndex: 0
      }
    }),
      (wrapper = setUp(initialState));
  });
  it("Should renderss.", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
describe("maps", () => {
  it("mapStateToProps", () => {
    expect(mapStateToProps(initialState)).toEqual(initialState.GetIndex);
  });
});
