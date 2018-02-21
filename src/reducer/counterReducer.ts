import { reducerWithInitialState } from "typescript-fsa-reducers";

import { counterDec, counterInc } from "../actions/CounterActions";
import { CounterState } from "../state/CounterState";

const INITIAL_STATE: CounterState = {
    value: 0
};

export const counterReducer = reducerWithInitialState<CounterState>(INITIAL_STATE)
    .case(counterInc, (state, { by }) => ({ value: state.value + by }))
    .case(counterDec, (state, { by }) => ({ value: state.value - by }));
