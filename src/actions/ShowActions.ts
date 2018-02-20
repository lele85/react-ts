import actionCreatorFactory from 'typescript-fsa';

import { ShowModelBase, ShowModelDetail } from '../model/IShow';
import { fetchApiWorkerFactory } from './factories/ApiWorkerFactories';
import { FetchParams } from '../lib/Http';


const showsActionCreator = actionCreatorFactory("@@shows");
const showActionCreator = actionCreatorFactory("@@show");

export const fetchShows = showsActionCreator.async<{},ShowModelBase[],{code:number}>('FETCH');
export const fetchShowsWorker = fetchApiWorkerFactory<{},ShowModelBase[],{code:number}>(fetchShows, "/api/shows");

export interface FetchShowParams extends FetchParams {id: number};
export const fetchShow = showActionCreator.async<FetchShowParams,ShowModelDetail,{code:number}>('FETCH');
export const fetchShowWorker = fetchApiWorkerFactory<FetchShowParams,ShowModelDetail,{code:number}>(fetchShow, "/api/shows/:id");