import { ApiFetchRequestAction, ApiFetchSuccessAction, ApiFetchErrorAction, ApiActionsKeys, fetchApi } from "./ApiActions";
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
    return fetchApi<ShowsParams, Show[], FetchShowsRequestActionTypes>("/api/shows", {});
};