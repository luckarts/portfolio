import React from "react";
import { shallow, mount } from "enzyme";
import MainHeader from ".";

import Projets from "../../../db/projets";

let wrapper;

it("Should render.", () => {
  expect(mount(<MainHeader />)).toMatchSnapshot();
});

describe("Galerie Component", () => {
  beforeEach(() => {
    wrapper = shallow(<MainHeader />);
  });
  it(" Should call closeLightbox", () => {
    expect(
      wrapper
        .find("CardProject")
        .first()
        .props()
    ).toEqual({
      image: Projets[0].image,
      title: Projets[0].title,
      detail: Projets[0].detail,
      techno: Projets[0].techno,
      value: Projets[0].id,
      link: Projets[0].link
    });
  });
});
