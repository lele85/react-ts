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