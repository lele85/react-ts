import { counterReducer } from "./counterReducer";
import { counterInc, counterDec } from "../actions/CounterActions";

it("increment", () => {
    const result = counterReducer({value:0}, counterInc({by:2}));
    expect(result).toEqual({value:2});
});

it("decrement", () => {
    const result = counterReducer({value:0}, counterDec({by:2}));
    expect(result).toEqual({value:-2});
});