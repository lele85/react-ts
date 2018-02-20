import { Dispatch, MiddlewareAPI } from 'redux';

import { AppState } from '../state/AppState';
import { AnyAction } from 'typescript-fsa';
import { Action } from 'typescript-fsa';

export const createTestMiddleware = () => {
    const middleware = ({dispatch, getState} : MiddlewareAPI<AppState>) => (next:Dispatch<AppState>) => (action:Action<any>) => {
        if(action.meta && action.meta.abort){
            console.debug(`Abort http request: ${action.type}`);
        }
        next(action);
    };
    return middleware;
}