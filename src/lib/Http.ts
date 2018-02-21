import Axios from "axios";
import { isNullOrUndefined } from "util";
import { AbortTokens } from "../actions/ShowActions";
import HttpRequests from "./HttpRequests";

export type FetchParams = {
    [key: string]: string | number;
};

export type HttpResponse<T> = { canceled: boolean; model: T | null };

export function buildUri(url: string, params: FetchParams) {
    let remainingParams = {
        ...params
    };

    const tokens = url.split("/").map(token => {
        if (!token.startsWith(":")) {
            return token;
        }
        const key = token.substr(1);
        if (!isNullOrUndefined(params[key])) {
            delete remainingParams[key];
            return params[key];
        }
        return token;
    });

    return {
        uri: tokens.join("/"),
        params: remainingParams
    };
}

function get<TResponse, TParams extends FetchParams>(
    uriPlaceholder: string,
    allParams: TParams,
    abortToken: AbortTokens
): Promise<HttpResponse<TResponse>> {
    const { uri, params } = buildUri(uriPlaceholder, allParams);

    HttpRequests.abortHttpRequest(abortToken);
    HttpRequests.setHttpRequest(abortToken);
    const request = HttpRequests.getHttpRequest(abortToken);

    return Axios.get(uri, { ...params, cancelToken: request.token })
        .then(res => {
            const response: TResponse = res.data;
            return {
                canceled: false,
                model: response
            };
        })
        .catch(e => {
            if (Axios.isCancel(e)) {
                return Promise.resolve({
                    canceled: true,
                    model: null
                });
            } else {
                return Promise.reject(e);
            }
        });
}

export default {
    get: get
};
