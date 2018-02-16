import React from 'react';
import { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';
import { $call } from 'utility-types';

import { counterDec, counterInc } from '../actions/CounterActions';
import { AppState } from '../state/AppState';
import styles from './Counter.module.css';
import colors from '../styles/colors.css';

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
        <div>
            <h1 className={styles.counter}>
                <div>{counter}</div>
                <button onClick={() => { increment({by:1}); }}>+1</button>
                <button onClick={() => { decrement({by:1}); }}>-1</button>
            </h1>
            <div>
                Inline style with color
                &nbsp;
                <span
                    style={{
                        backgroundColor:colors.counterColor,
                        color: "white"
                    }}
                >
                    {colors.counterColor}
                </span>
                &nbsp;
                taken from CSS variable.
            </div>
        </div>
        
    );
}

export default connect(mapStateToProps, mapActionsToProps)(Counter);