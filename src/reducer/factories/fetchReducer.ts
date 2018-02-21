import { reducerWithInitialState } from "typescript-fsa-reducers/dist";
import { FetchApiState, ApiActionStatus } from "../../state/FetchApiState";
import { AsyncActionCreators } from "typescript-fsa";
import { ActionCreator } from "typescript-fsa";
import { HttpResponse } from "../../lib/Http";

export function createFetchReducer<TParams, TResponse, TError>(
    INITIAL_STATE: FetchApiState<TResponse>,
    fetch: AsyncActionCreators<TParams, HttpResponse<TResponse>, TError>,
    fetchClear: ActionCreator<any>
) {
    return reducerWithInitialState(INITIAL_STATE)
        .case(fetch.started, () => ({
            status: ApiActionStatus.LOADING,
            model: null
        }))
        .case(
            fetch.done,
            (state, { result: { canceled, model } }) =>
                canceled ? INITIAL_STATE : { status: ApiActionStatus.SUCCESS, model: model }
        )
        .case(fetch.failed, () => ({ status: ApiActionStatus.ERROR, model: null }))
        .case(fetchClear, () => INITIAL_STATE);
}
