import React from 'react';
import { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { AnyAction } from 'typescript-fsa';
import { $call } from 'utility-types';

import { counterDec, counterInc } from '../actions/CounterActions';
import { AppState } from '../state/AppState';
import styles from './Counter.module.css';

const mapStateToProps = (state:AppState) => {
    return {
        counter: state.counter.value
    };
}

const mapActionsToProps = (dispatch : Dispatch<AnyAction>) => {
    return bindActionCreators({
        increment: counterInc,
        decrement: counterDec
    }, dispatch);
}

const returnOfActionProps = $call(mapActionsToProps);
const returnOfStateProps = $call(mapStateToProps);
type ActionProps = typeof returnOfActionProps;
type StateProps = typeof returnOfStateProps;
type Props = StateProps & ActionProps;

export const Counter: StatelessComponent<Props> = ({counter, increment, decrement}) => {
    return (
        <h1 className={styles.counter}>
            <div>{counter}</div>
            <button onClick={() => { increment({by:1}); }}>+1</button>
            <button onClick={() => { decrement({by:1}); }}>-1</button>
        </h1>
    );
}

export default connect(mapStateToProps, mapActionsToProps)(Counter);