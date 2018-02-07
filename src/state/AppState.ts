import { CounterState } from "./CounterState";
import { UserState } from "./UserState";
import { FetchApiState } from "./FetchApiState";
import { IShow } from "../model/IShow";

export type AppState = {
    readonly counter: CounterState,
    readonly user : UserState,
    readonly shows: FetchApiState<IShow[]>
};