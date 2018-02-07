import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';
import { typedCombineReducers } from '../utils/typedCombineReducers';
import { AppState } from '../state/AppState';
import { showsReducer } from './showsReducer';
import { showReducer } from './showReducer';

export const appReducer  = typedCombineReducers<AppState>({
    counter: counterReducer,
    user: userReducer,
    shows: showsReducer,
    show: showReducer
});