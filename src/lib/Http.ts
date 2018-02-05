import Axios from "axios";

export function get<T> (uri: string) : Promise<T> {
    return Axios.get(uri).then((res) => {
        const response : T = res.data;
        return response;
    });
};