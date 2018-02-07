import React from 'react';
import { Component } from 'react';
import { connect, Dispatch, StatelessComponent } from 'react-redux';
import { AnyAction } from 'typescript-fsa';

import { fetchShowsWorker } from '../actions/ShowActions';
import { AppState } from '../state/AppState';
import { ApiActionStatus, FetchApiState } from '../state/FetchApiState';
import { Fetch } from './Fetch';
import { ShowModelBase } from '../model/IShow';
import { Show } from "./Show";

interface StateProps { status: ApiActionStatus, model: Array<ShowModelBase> };
interface ActionProps { fetch: (params: any) => void };
interface Props extends StateProps, ActionProps {};

const mapStateToProps = (state: AppState) : FetchApiState<ShowModelBase[]> => {
    return {
        status: state.shows.status,
        model: state.shows.model
    };
};

const mapActionsToProps = (dispatch: Dispatch<AnyAction>) : ActionProps => {
    return {
        fetch: () => { dispatch(fetchShowsWorker()); }
    };
};

const SuccessComponent : StatelessComponent<{model: ShowModelBase[]}> = ({model}) => {
    return (
        <ul>
            {
                model.map((show) => {
                    return <Show key={show.id} show={show} />;
                })
            }
        </ul>
    )
};

const ErrorComponent = () => {
    return <div>Error!</div>
}

const LoadingComponent = () => {
    return <div>Loading...</div>
}

class ShowsComponent extends Component<Props> {

    render() {
        const {
            status,
            model,
            fetch
        } = this.props;

        return (
            <Fetch
                fetch={fetch}
                fetchParams={{}}
                fetchState={{status,model}}
                SuccessElement={<SuccessComponent model={model} />}
                ErrorElement={<ErrorComponent />}
                LoadingElement={<LoadingComponent />}
            />
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ShowsComponent);