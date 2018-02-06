import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { fetchShows } from '../actions/ShowActions';
import { Show } from '../model/Show';
import { ApiActionStatus, FetchApiState } from '../state/FetchApiState';


const INITIAL_STATE: FetchApiState<Show[]> = {
    status: ApiActionStatus.LOADING,
    model: null
};

export const showsReducer = reducerWithInitialState(INITIAL_STATE)
    .case(fetchShows.started, () => ({status: ApiActionStatus.LOADING, model:null}))
    .case(fetchShows.done, (state,{result}) => ({status: ApiActionStatus.SUCCESS, model:result}))
    .case(fetchShows.started, () => ({status: ApiActionStatus.ERROR, model:null}))