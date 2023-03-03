import * as React from "react";
import { shallow } from "enzyme";
import { About } from "../About";

describe("About", () => {
  test("Should be able to render", () => {
    const dom = shallow(<About />);
    expect(dom.html()).toMatchSnapshot("Render HTML correctly");
  });
});
