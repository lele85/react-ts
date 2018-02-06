import React from "react";
import { Counter } from "./Counter";
import { shallow } from "enzyme";

it("renders", () => {
    const result = shallow(
        <Counter
            counter={0}
            increment={() => {}}
            decrement={()=>{}}
        />
    );
    expect(result).toBeTruthy();
});

it("should have an increment and a decrement button", () => {
    const result = shallow(
        <Counter
            counter={0}
            increment={() => {}}
            decrement={()=>{}}
        />
    );
    const buttons = result.find("button");
    expect(buttons.length).toBe(2);
});