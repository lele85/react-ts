import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';
import { typedCombineReducers } from '../utils/typedCombineReducers';
import { AppState } from '../state/AppState';

export const appReducer  = typedCombineReducers<AppState>({
    counter: counterReducer,
    user: userReducer
});