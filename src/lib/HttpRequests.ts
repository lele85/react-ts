import { set, get } from "lodash";
import { AbortTokens } from "../actions/ShowActions";
import Axios from "axios";

const IDENTITY = (x: any) => x;

const requests = {};

const getHttpRequest = (token: AbortTokens) => {
    return get(requests, `${token}`, { cancel: IDENTITY, token: null });
};

const setHttpRequest = (token: AbortTokens) => {
    if (token) {
        const source = Axios.CancelToken.source();
        set(requests, `${token}`, source);
    }
};

const abortHttpRequest = (token: AbortTokens) => {
    getHttpRequest(token).cancel();
};

export default {
    getHttpRequest,
    setHttpRequest,
    abortHttpRequest
};
