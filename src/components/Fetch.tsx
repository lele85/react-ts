import { isEqual } from "lodash";
import React, { Component } from "react";

import { FetchParams } from "../lib/Http";
import { ApiActionStatus, FetchApiState } from "../state/FetchApiState";

type Props = {
    fetch: (params: any) => void;
    fetchClear: (params: any) => void;
    fetchParams: FetchParams;
    fetchState: FetchApiState<any>;
    SuccessElement: JSX.Element;
    ErrorElement: JSX.Element;
    LoadingElement: JSX.Element;
};
export class Fetch extends Component<Props> {
    componentDidMount() {
        const { fetch, fetchParams, fetchClear } = this.props;
        fetchClear({});
        fetch(fetchParams);
    }

    componentWillReceiveProps({ fetch, fetchParams: newFetchParams, fetchClear }: Props) {
        const { fetchParams: oldFetchParams } = this.props;
        if (!isEqual(newFetchParams, oldFetchParams)) {
            fetchClear({});
            fetch(newFetchParams);
        }
    }

    componentWillUnmount() {
        const { fetchClear } = this.props;
        fetchClear({});
    }

    render() {
        const { LoadingElement, SuccessElement, ErrorElement, fetchState } = this.props;
        //Fetch request is running
        if (fetchState.status === ApiActionStatus.LOADING) {
            return LoadingElement;
        }
        //Fetch request failed
        if (fetchState.status === ApiActionStatus.ERROR) {
            return ErrorElement;
        }
        //Fetch request succeded and the model was properly setted in state
        if (fetchState.status === ApiActionStatus.SUCCESS && fetchState.model) {
            return SuccessElement;
        }
        return null;
    }
}
