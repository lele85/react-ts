import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';
import { typedCombineReducers } from '../utils/typedCombineReducers';
import { AppState } from '../state/AppState';
import { showsReducer } from './showsReducer';

export const appReducer  = typedCombineReducers<AppState>({
    counter: counterReducer,
    user: userReducer,
    shows: showsReducer
});