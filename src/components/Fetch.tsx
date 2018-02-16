import React, { Component } from 'react';

import { ApiActionStatus, FetchApiState } from '../state/FetchApiState';
import { FetchParams } from '../lib/Http';

export class Fetch extends Component
    <{
        fetch: (params: FetchParams) => void,
        fetchParams: FetchParams,
        fetchState: FetchApiState<any>,
        SuccessElement:JSX.Element,
        ErrorElement: JSX.Element,
        LoadingElement: JSX.Element
    }> {

    componentDidMount(){
        const { fetch, fetchParams} = this.props;
        fetch(fetchParams);
    }

    render(){
        const {
            LoadingElement,
            SuccessElement,
            ErrorElement,
            fetchState
        } = this.props
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
};