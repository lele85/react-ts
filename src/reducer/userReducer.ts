import { UserState } from '../state/UserState';
import { UserActionTypes, UserActionKeys } from '../actions/UserActions';

const initialUserState : UserState = {
    firstname : "",
    lastname: ""
};

export const userReducer = (s: UserState = initialUserState, action: UserActionTypes) : UserState => {
    switch (action.type) {
        case UserActionKeys.SET_NAME:
            return {...s, firstname: action.name};
        case UserActionKeys.SET_SURNAME: {
            return {...s, lastname: action.surname};
        }
    }
    return s;
}