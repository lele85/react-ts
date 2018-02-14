import React from 'react';
import { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';
import { $call } from 'utility-types';

import { userSetFirstname, userSetLastname } from '../actions/UserActions';
import { AppState } from '../state/AppState';


const mapStateToProps = (state:AppState) => {
    return {
        firstname: state.user.firstname,
        lastname: state.user.lastname
    };
};

const mapActionsToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators({
        setFirstname: userSetFirstname,
        setLastname: userSetLastname
    }, dispatch);
};

const statePropsResult = $call(mapStateToProps);
const actionPropsResult = $call(mapActionsToProps);
type Props =
    & { age: number }
    & typeof statePropsResult
    & typeof actionPropsResult;

const User: StatelessComponent<Props> = ({firstname, lastname, age, setFirstname, setLastname}) => {
    return (
        <h1>
            Hello, {firstname} {lastname}! Your age is {age}!
            <input type="text" value={firstname} onChange={({target:{value}}) => { setFirstname({firstname: value}); }}/>
            <input type="text" value={lastname} onChange={({target:{value}}) => { setLastname({lastname: value}); }}/>
        </h1>
    );
};

export default connect(mapStateToProps, mapActionsToProps)(User);