import actionCreatorFactory from 'typescript-fsa';

import { ShowModelBase, ShowModelDetail } from '../model/IShow';
import { fetchApiWorkerFactory } from './factories/ApiWorkerFactories';


const showsActionCreator = actionCreatorFactory("@@shows");
const showActionCreator = actionCreatorFactory("@@show");

export const fetchShows = showsActionCreator.async<{},ShowModelBase[],{code:number}>('FETCH');
export const fetchShowsClear = showsActionCreator<{}>('FETCH_CLEAR', {abort:true, request: "shows"})
export const fetchShowsWorker = fetchApiWorkerFactory<{},ShowModelBase[],{code:number}>(fetchShows, "/api/shows");

export const fetchShow = showActionCreator.async<{id:number},ShowModelDetail,{code:number}>('FETCH');
export const fetchShowClear = showActionCreator<{}>('FETCH_CLEAR', {abort:true, request: "show"});
export const fetchShowWorker = fetchApiWorkerFactory<{id:number},ShowModelDetail,{code:number}>(fetchShow, "/api/shows/:id");