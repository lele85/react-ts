import { ApiFetchRequestAction, ApiFetchSuccessAction, ApiFetchErrorAction, ApiActionsKeys } from "./ApiActions";
import { ShowsParams, Show } from "../model/Show";
import { OtherAction } from "./OtherActions";
import { Dispatch } from "redux";
import { get } from "../lib/Http";


export type FetchShowsRequestActionTypes =
   | ApiFetchRequestAction<ShowsParams>
   | ApiFetchSuccessAction<ShowsParams, Array<Show>>
   | ApiFetchErrorAction<ShowsParams>
   | OtherAction;

export const fetchShows = () => {
    return (dispatch : Dispatch<FetchShowsRequestActionTypes>) => {
        const requestAction : ApiFetchRequestAction<ShowsParams> = {
            type: ApiActionsKeys.REQUEST,
            params: {}
        };
        dispatch(requestAction);
        return get<Array<Show>>("/api/shows").then((shows) => {
            const successAction : ApiFetchSuccessAction<ShowsParams,Array<Show>> = {
                type: ApiActionsKeys.SUCCESS,
                params: {},
                model: shows
            };
            dispatch(successAction)
        }).catch(() => {
            const errorAction : ApiFetchErrorAction<ShowsParams> = {
                type: ApiActionsKeys.ERROR,
                params: {}
            };
            dispatch(errorAction);
        });
    }
}