import { Dispatch, MiddlewareAPI } from "redux";

import { AppState } from "../state/AppState";
import { AnyAction } from "typescript-fsa";
import { Action } from "typescript-fsa";
import HttpRequests from "../lib/HttpRequests";

export const createTestMiddleware = () => {
    const middleware = ({ dispatch, getState }: MiddlewareAPI<AppState>) => (next: Dispatch<AppState>) => (
        action: Action<any>
    ) => {
        if (action.meta && action.meta.abort) {
            HttpRequests.abortHttpRequest(action.meta.token);
        }
        next(action);
    };
    return middleware;
};
