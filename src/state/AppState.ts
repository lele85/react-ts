import { CounterState } from "./CounterState";
import { UserState } from "./UserState";

export type AppState = {
    readonly counter: CounterState,
    readonly user : UserState
};