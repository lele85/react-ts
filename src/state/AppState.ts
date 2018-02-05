import { CounterState } from "./CounterState";
import { UserState } from "./UserState";
import { Show } from "../model/Show";
import { FetchApiState } from "./FetchApiState";

export type AppState = {
    readonly counter: CounterState,
    readonly user : UserState,
    readonly shows: FetchApiState<Array<Show>>
};