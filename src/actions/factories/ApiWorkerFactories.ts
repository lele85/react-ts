import { bindThunkAction } from "typescript-fsa-redux-thunk";
import Http, { FetchParams, HttpResponse } from "../../lib/Http";
import { AsyncActionCreators } from "typescript-fsa";
import { AbortTokens } from "../ShowActions";

export function fetchApiWorkerFactory<TParams extends FetchParams, TResponse, TError>(
    asyncCreator: AsyncActionCreators<TParams, HttpResponse<TResponse>, TError>,
    path: string,
    token: AbortTokens
) {
    return bindThunkAction(asyncCreator, async (params, dispatch) => {
        const result = await Http.get<TResponse, TParams>(path, params, token);
        return result;
    });
}
