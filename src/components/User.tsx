import React from 'react';
import { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { UserActionTypes, userSetFirstname, userSetLastname } from '../actions/UserActions';
import { AppState } from '../state/AppState';

interface OwnProps {
    age: number
};

interface StateProps {
    firstname: string,
    lastname: string,
};

interface ActionProps {
    setFirstname: (firstname: string) => void,
    setLasname: (lastname: string) => void,
};

interface Props extends OwnProps, StateProps, ActionProps {};

const mapStateToProps = (state:AppState) : StateProps => {
    return {
        firstname: state.user.firstname,
        lastname: state.user.lastname
    };
};

const mapActionsToProps = (dispatch: Dispatch<UserActionTypes>) : ActionProps => {
    return {
        setFirstname: (firstname) => { dispatch(userSetFirstname(firstname)); },
        setLasname: (lastname) => { dispatch(userSetLastname(lastname)); }
    };
};

const User: StatelessComponent<Props> = ({firstname, lastname, age, setFirstname, setLasname}) => {
    return (
        <h1>
            Hello, {firstname} {lastname}! Your age is {age}!
            <input type="text" value={firstname} onChange={({target:{value}}) => { setFirstname(value); }}/>
            <input type="text" value={lastname} onChange={({target:{value}}) => { setLasname(value); }}/>
        </h1>
    );
};

export default connect(mapStateToProps, mapActionsToProps)(User);