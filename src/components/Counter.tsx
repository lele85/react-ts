import React from 'react';
import { StatelessComponent } from 'react';
import { connect, Dispatch } from 'react-redux';
import Promise from 'ts-promise';

import { AppState } from '../state/AppState';
import { CounterActionTypes, counterIncrement, counterDecrement, counterIncrementAsync } from '../actions/CounterActions';

interface OwnProps {};

interface StateProps {
    counter: number
};

interface ActionProps {
    increment: (by: number) => void,
    decrement: (by: number) => void,
    incrementAsync: (by: number) => Promise<number>,
};

interface Props extends OwnProps, StateProps, ActionProps {};

const mapStateToProps = (state:AppState) : StateProps => {
    return {
        counter: state.counter.value
    };
}

const mapActionsToProps = (dispatch: Dispatch<CounterActionTypes>) : ActionProps => {
    return {
        increment: (by: number) : void => { dispatch(counterIncrement(by)); },
        decrement: (by: number) : void => { dispatch(counterDecrement(by)); },
        incrementAsync: (by: number) : Promise<number> => { return dispatch(counterIncrementAsync(by)); }
    };
}

const Counter: StatelessComponent<Props> = ({counter, increment, decrement, incrementAsync}) => {
    return (
        <h1>
            <div>{counter}</div>
            <button onClick={() => { increment(1); }}>+1</button>
            <button onClick={() => { decrement(1); }}>-1</button>
            <button onClick={() => { incrementAsync(5); }}>+5 (ASYNC)</button>
        </h1>
    );
}

export default connect(mapStateToProps, mapActionsToProps)(Counter);