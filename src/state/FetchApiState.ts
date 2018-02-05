export enum ApiActionStatus {
    LOADING="LOADING",
    SUCCESS="SUCCESS",
    ERROR="ERROR"
};

export type FetchApiState<Tmodel> = {
    status: ApiActionStatus,
    model : Tmodel | null
};