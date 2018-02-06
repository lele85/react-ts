import { counterDec, counterInc } from '../actions/CounterActions';
import { assertEquals } from '../lib/TestUtils';
import { CounterState } from '../state/CounterState';
import { counterReducer } from './counterReducer';

it("increment", () => {
    const result = counterReducer({value:0}, counterInc({by:2}));
    assertEquals<CounterState>(result, {value:2});
});

it("decrement", () => {
    const result = counterReducer({value:0}, counterDec({by:2}));
    assertEquals<CounterState>(result, {value:-2});
});