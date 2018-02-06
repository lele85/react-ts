import { bindThunkAction } from "typescript-fsa-redux-thunk";
import Http from "../../lib/Http";
import { AsyncActionCreators } from "typescript-fsa";

export function fetchApiWorkerFactory<TParams, TResponse, TError> (asyncCreator : AsyncActionCreators<TParams,TResponse, TError>, path: string) {
    return bindThunkAction(
        asyncCreator,
        async (params, dispatch) => {
            const result = await Http.get<TResponse>(path);
            return result;
        }
    )
}