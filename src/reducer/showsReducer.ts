import { ApiActionsKeys } from '../actions/ApiActions';
import { FetchShowsRequestActionTypes } from '../actions/ShowActions';
import { Show } from '../model/Show';
import { FetchApiState, ApiActionStatus } from '../state/FetchApiState';

type ReducerState = FetchApiState<Array<Show>>;
type ReducerActionTypes = FetchShowsRequestActionTypes;
const initialShowsState: ReducerState = {
    status: ApiActionStatus.LOADING,
    model: null
};

export const showsReducer = (s : ReducerState = initialShowsState, action: FetchShowsRequestActionTypes) : ReducerState => {
    switch (action.type) {
        case ApiActionsKeys.REQUEST:
            return {
                status: ApiActionStatus.LOADING,
                model: null
            };
        case ApiActionsKeys.SUCCESS:
            return {
                status: ApiActionStatus.SUCCESS,
                model: action.model
            };
        case ApiActionsKeys.ERROR:
            return {
                status: ApiActionStatus.ERROR,
                model: null
            };
    }
    return s;
};