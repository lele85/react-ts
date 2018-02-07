import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { fetchShows } from '../actions/ShowActions';
import { ApiActionStatus, FetchApiState } from '../state/FetchApiState';
import { IShow } from '../model/IShow';


const INITIAL_STATE: FetchApiState<IShow[]> = {
    status: ApiActionStatus.LOADING,
    model: null
};

export const showsReducer = reducerWithInitialState(INITIAL_STATE)
    .case(fetchShows.started, () => ({status: ApiActionStatus.LOADING, model:null}))
    .case(fetchShows.done, (state,{result}) => ({status: ApiActionStatus.SUCCESS, model:result}))
    .case(fetchShows.failed, () => ({status: ApiActionStatus.ERROR, model:null}))