import { Dispatch } from "react-redux";
import { CounterActionTypes } from "./CounterActions";
import { UserActionTypes } from "./UserActions";
import { OtherAction } from "./OtherActions";

export type AppActionTypes =
    | CounterActionTypes
    | UserActionTypes
    | OtherAction;