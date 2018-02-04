import { Reducer } from "redux";
import { combineReducers } from "redux";

type TypedReducersMapObject<S> = {
    [P in keyof S]: Reducer<S[P]>;
}

export function typedCombineReducers<S>(reducers: TypedReducersMapObject<S>): Reducer<S> {
    return combineReducers(reducers);
};