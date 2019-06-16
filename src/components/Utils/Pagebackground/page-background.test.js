import React from "react";
import { shallow } from "enzyme";
import Pagebackground from "./page-background.component";

import "@testSetup";

const setup = () => shallow(<Pagebackground />);

describe("Pagebackground", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
