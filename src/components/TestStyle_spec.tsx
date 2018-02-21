import { shallow } from "enzyme";
import React from "react";
import TestStyle from "./TestStyle";

it("renders correctly", () => {
    const result = shallow(<TestStyle />);
    expect(result).toMatchSnapshot();
});
