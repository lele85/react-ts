import actionCreatorFactory from 'typescript-fsa';

import { IShow } from '../model/IShow';
import { fetchApiWorkerFactory } from './factories/ApiWorkerFactories';


const actionCreator = actionCreatorFactory("@@shows");

export const fetchShows = actionCreator.async<{},IShow[],{code:number}>('FETCH');
export const fetchShowsWorker = fetchApiWorkerFactory<{},IShow[],{code:number}>(fetchShows, "/api/shows");