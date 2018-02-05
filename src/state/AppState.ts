import { CounterState } from "./CounterState";
import { UserState } from "./UserState";
import { Show } from "../model/Show";

export enum ApiActionStatus {
    LOADING="LOADING",
    SUCCESS="SUCCESS",
    ERROR="ERROR"
};

export type FetchApiState<Tmodel> = {
    status: ApiActionStatus,
    model : Tmodel | null
};

export type AppState = {
    readonly counter: CounterState,
    readonly user : UserState,
    readonly shows: FetchApiState<Array<Show>>
};