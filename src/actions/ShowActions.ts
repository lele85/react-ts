import actionCreatorFactory from 'typescript-fsa';

import { Show } from '../model/Show';
import { fetchApiWorkerFactory } from './factories/ApiWorkerFactories';

const actionCreator = actionCreatorFactory("@@shows");

export const fetchShows = actionCreator.async<{},Show[],{code:number}>('FETCH');
export const fetchShowsWorker = fetchApiWorkerFactory<{},Show[],{code:number}>(fetchShows, "/api/shows");