import { fetchShows, fetchShowsClear } from "../actions/ShowActions";
import { ShowModelBase } from "../model/IShow";
import { ApiActionStatus, FetchApiState } from "../state/FetchApiState";
import { createFetchReducer } from "./factories/fetchReducer";

const INITIAL_STATE: FetchApiState<ShowModelBase[]> = {
    status: ApiActionStatus.LOADING,
    model: null
};

export const showsReducer = createFetchReducer<{}, ShowModelBase[] | null, { code: number }>(
    INITIAL_STATE,
    fetchShows,
    fetchShowsClear
);
