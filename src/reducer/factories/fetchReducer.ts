import { reducerWithInitialState } from "typescript-fsa-reducers/dist";
import { FetchApiState, ApiActionStatus } from "../../state/FetchApiState";
import { AsyncActionCreators } from "typescript-fsa";

export function createFetchReducer<TParams, TResponse, TError> (INITIAL_STATE: FetchApiState<TResponse>, fetch:AsyncActionCreators<TParams, TResponse, TError>) {
    return reducerWithInitialState(INITIAL_STATE)
        .case(fetch.started, () => ({status: ApiActionStatus.LOADING, model:null}))
        .case(fetch.done, (state,{result}) => ({status: ApiActionStatus.SUCCESS, model:result}))
        .case(fetch.failed, () => ({status: ApiActionStatus.ERROR, model:null}))
};