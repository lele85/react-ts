import actionCreatorFactory from "typescript-fsa";

import { ShowModelBase, ShowModelDetail } from "../model/IShow";
import { fetchApiWorkerFactory } from "./factories/ApiWorkerFactories";
import { HttpResponse } from "../lib/Http";

export enum AbortTokens {
    SHOW = "show",
    SHOWS = "shows"
}

const showsActionCreator = actionCreatorFactory("@@shows");
const showActionCreator = actionCreatorFactory("@@show");

export const fetchShows = showsActionCreator.async<{}, HttpResponse<ShowModelBase[]>, { code: number }>("FETCH");
export const fetchShowsClear = showsActionCreator<{}>("FETCH_CLEAR", {
    abort: true,
    token: AbortTokens.SHOWS
});
export const fetchShowsWorker = fetchApiWorkerFactory<{}, ShowModelBase[], { code: number }>(
    fetchShows,
    "/api/shows",
    AbortTokens.SHOWS
);

export const fetchShow = showActionCreator.async<{ id: number }, HttpResponse<ShowModelDetail>, { code: number }>(
    "FETCH"
);
export const fetchShowClear = showActionCreator<{}>("FETCH_CLEAR", {
    abort: true,
    token: AbortTokens.SHOW
});
export const fetchShowWorker = fetchApiWorkerFactory<{ id: number }, ShowModelDetail | null, { code: number }>(
    fetchShow,
    "/api/shows/:id",
    AbortTokens.SHOWS
);
