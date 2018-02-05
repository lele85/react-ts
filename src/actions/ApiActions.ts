import { Dispatch } from "redux";
import { get } from "../lib/Http";

export enum ApiActionsKeys {
    REQUEST = "@@api/FETCH_REQUEST",
    SUCCESS = "@@api/FETCH_SUCCESS",
    ERROR = "@@api/FETCH_ERROR",
};

type ApiRequestParams<T> = {
    [P in keyof T] : T[P]
};

export interface ApiFetchRequestAction<Tparams> {
    type: ApiActionsKeys.REQUEST,
    params: ApiRequestParams<Tparams>
};

export interface ApiFetchSuccessAction<Tparams, Tmodel> {
    type: ApiActionsKeys.SUCCESS,
    params: ApiRequestParams<Tparams>,
    model: Tmodel
};

export interface ApiFetchErrorAction<Tparams> {
    type: ApiActionsKeys.ERROR,
    params: ApiRequestParams<Tparams>
};

export function fetchApi<Tparams,Tmodel,Tactions> (uri: string, params:Tparams) {
    return (dispatch : Dispatch<Tactions>) => {
        const requestAction : ApiFetchRequestAction<Tparams> = {
            type: ApiActionsKeys.REQUEST,
            params: params
        };
        dispatch(requestAction);
        return get<Tmodel>(uri).then((model) => {
            const successAction : ApiFetchSuccessAction<Tparams,Tmodel> = {
                type: ApiActionsKeys.SUCCESS,
                params: params,
                model: model
            };
            dispatch(successAction);
        }).catch(() => {
            const errorAction : ApiFetchErrorAction<Tparams> = {
                type: ApiActionsKeys.ERROR,
                params: params
            };
            dispatch(errorAction);
        });
    }
};