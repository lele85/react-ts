import { counterReducer } from "./counterReducer";
import { counterInc, counterDec } from "../actions/CounterActions";
import { CounterState } from "../state/CounterState";
import { assertEquals } from "../lib/TestUtils";

it("increment", () => {
    const result = counterReducer({value:0}, counterInc({by:2}));
    assertEquals<CounterState>(result, {value:2});
});

it("decrement", () => {
    const result = counterReducer({value:0}, counterDec({by:2}));
    assertEquals<CounterState>(result, {value:-2});
});