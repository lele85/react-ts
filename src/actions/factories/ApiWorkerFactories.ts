import { bindThunkAction } from "typescript-fsa-redux-thunk";
import { get } from "../../lib/Http";
import { AsyncActionCreators } from "typescript-fsa";

export function fetchApiWorkerFactory<TParams, TResponse, TError> (asyncCreator : AsyncActionCreators<TParams,TResponse, TError>, path: string) {
    return bindThunkAction(
        asyncCreator,
        async (params, dispatch) => {
            dispatch(asyncCreator.started(params));
            try {
                const result = await get<TResponse>(path);
                dispatch(asyncCreator.done({params,result}));
                return result;
            } catch (error) {
                dispatch(asyncCreator.failed({params, error}));
                return error;
            }
        }
    )
}