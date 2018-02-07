import { CounterState } from "./CounterState";
import { UserState } from "./UserState";
import { FetchApiState } from "./FetchApiState";
import { ShowModelBase, ShowModelDetail } from "../model/IShow";

export type AppState = {
    readonly counter: CounterState,
    readonly user : UserState,
    readonly shows: FetchApiState<ShowModelBase[]>
    readonly show: FetchApiState<ShowModelDetail>
};