import { UserState } from '../state/UserState';
import { isType } from 'typescript-fsa';
import { Action } from 'redux';
import { userSetFirstname, userSetLastname } from '../actions/UserActions';

const initialUserState : UserState = {
    firstname : "",
    lastname: ""
};

export const userReducer = (state: UserState = initialUserState, action: Action): UserState => {
    if (isType(action, userSetFirstname)) {
        return {
            ...state,
            firstname: action.payload.firstname
        };
    }
    if(isType(action, userSetLastname)) {
        return {
            ...state,
            lastname: action.payload.lastname
        };
    }
    return state;
};