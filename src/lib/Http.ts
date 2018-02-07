import Axios from "axios";

export function buildUri (url:string, params: any) {
    let remainingParams = {
        ...params
    };

    const tokens = url.split("/").map((token) => {
        if (!token.startsWith(":")){
            return token;
        }
        const key = token.substr(1);
        if(params[key]){
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

function get<TResponse, TParams> (uriPlaceholder: string, allParams:TParams) : Promise<TResponse> {
    
    const {
        uri,
        params
    } = buildUri(uriPlaceholder,allParams);

    return Axios.get(uri, {params}).then((res) => {
        const response : TResponse = res.data;
        return response;
    });
};

export default {
    get: get
};