import React from 'react';
import { StatelessComponent } from 'react';
import { connect } from 'react-redux';

import { counterDec, counterInc } from '../actions/CounterActions';
import { AppState } from '../state/AppState';
import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';

interface OwnProps {};

interface StateProps {
    counter: number
};

interface ActionProps {
    increment: (by: number) => void,
    decrement: (by: number) => void
};

interface Props extends OwnProps, StateProps, ActionProps {};

const mapStateToProps = (state:AppState) => {
    return {
        counter: state.counter.value
    };
}

const mapActionsToProps = (dispatch : Dispatch<AnyAction>) : ActionProps => {
    return {
        increment: (by: number) : void => { dispatch(counterInc({by:1})); },
        decrement: (by: number) : void => { dispatch(counterDec({by:1})); }
    };
}

export const Counter: StatelessComponent<Props> = ({counter, increment, decrement}) => {
    return (
        <h1>
            <div>{counter}</div>
            <button onClick={() => { increment(1); }}>+1</button>
            <button onClick={() => { decrement(1); }}>-1</button>
        </h1>
    );
}

export default connect(mapStateToProps, mapActionsToProps)(Counter);