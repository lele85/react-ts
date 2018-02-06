import actionCreatorFactory from 'typescript-fsa';
import { bindThunkAction } from 'typescript-fsa-redux-thunk';

import { get } from '../lib/Http';
import { Show } from '../model/Show';

const actionCreator = actionCreatorFactory("@@shows");

export const fetchShows = actionCreator.async<{},Show[],{code:number}>('FETCH');
export const fetchShowsWorker = bindThunkAction(
    fetchShows,
    async (params, dispatch) => {
        dispatch(fetchShows.started(params));
        try {
            const result = await get<Show[]>("/api/shows");
            dispatch(fetchShows.done({params: params,result: result}));
            return result;
        } catch(e) {
            dispatch(fetchShows.failed({params:params,error:{code:0}}));
            return e;
        }
    }
);