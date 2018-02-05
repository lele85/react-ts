import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import { CounterState } from '../state/CounterState';
import { counterInc, counterDec } from '../actions/CounterActions';

const initialCounterState: CounterState = {
    value: 0
};

export const counterReducer = (state: CounterState = initialCounterState, action: Action): CounterState => {
    if (isType(action, counterInc)) {
        return {
            value: state.value + action.payload.by
        };
    }
    if(isType(action, counterDec)) {
        return {
            value: state.value - action.payload.by
        };
    }
    return state;
};