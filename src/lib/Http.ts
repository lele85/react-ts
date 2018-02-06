import Axios from "axios";

function get<T> (uri: string) : Promise<T> {
    return Axios.get(uri).then((res) => {
        const response : T = res.data;
        return response;
    });
};

export default {
    get: get
};