import { fetchShow } from '../actions/ShowActions';
import { ShowModelDetail } from '../model/IShow';
import { ApiActionStatus, FetchApiState } from '../state/FetchApiState';
import { createReducer } from './factories/fetchReducer';

const INITIAL_STATE: FetchApiState<ShowModelDetail> = {
    status: ApiActionStatus.LOADING,
    model: null
};

export const showReducer = createReducer<{id:number},ShowModelDetail,{code:number}>(INITIAL_STATE,fetchShow);