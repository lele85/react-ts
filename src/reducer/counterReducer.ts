import { CounterState } from '../state/CounterState';
import { CounterActionsKeys, CounterActionTypes } from '../actions/CounterActions';


const initialCounterState: CounterState = {
	value: 0
};

export const counterReducer = (s : CounterState = initialCounterState, action: CounterActionTypes) : CounterState => {
	switch (action.type) {
		case CounterActionsKeys.INC:
			return {
				...s,
				value: s.value + action.by
			};
		case CounterActionsKeys.DEC:
			return {
				...s,
				value: s.value - action.by
			};
	}
	return s;
};