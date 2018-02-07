import { fetchShows } from '../actions/ShowActions';
import { ShowModelBase } from '../model/IShow';
import { ApiActionStatus, FetchApiState } from '../state/FetchApiState';
import { createReducer } from './factories/fetchReducer';

const INITIAL_STATE: FetchApiState<ShowModelBase[]> = {
    status: ApiActionStatus.LOADING,
    model: null
};

export const showsReducer = createReducer<{},ShowModelBase[],{code:number}>(INITIAL_STATE,fetchShows);