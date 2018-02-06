import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { userSetFirstname, userSetLastname } from '../actions/UserActions';
import { UserState } from '../state/UserState';

const INITIAL_STATE : UserState = {
    firstname : "",
    lastname: ""
};

export const userReducer = reducerWithInitialState<UserState>(INITIAL_STATE)
    .case(userSetFirstname, (state, {firstname}) => ({...state, firstname:firstname}))
    .case(userSetLastname, (state, {lastname}) => ({...state, lastname:lastname}));