import React from "react";
import { Counter } from "./Counter";
import { shallow } from "enzyme";

it("renders correctly", () => {
    const result = shallow(
        <Counter
            counter={0}
            increment={() => {}}
            decrement={()=>{}}
        />
    );
    expect(result).toMatchSnapshot();
});