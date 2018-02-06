import React from 'react';
import { Component } from 'react';
import { connect, Dispatch } from 'react-redux';

import { fetchShowsWorker } from '../actions/ShowActions';
import { Show } from '../model/Show';
import { AppState } from '../state/AppState';
import { ApiActionStatus } from '../state/FetchApiState';
import { AnyAction } from 'typescript-fsa';


const mapStateToProps = (state: AppState) => {
    return {
        status: state.shows.status,
        model: state.shows.model
    };
}

const mapActionsToProps = (dispatch: Dispatch<AnyAction>) : ActionProps => {
    return {
        fetch: () => { dispatch(fetchShowsWorker()); }
    };
}

interface StateProps {
    status: ApiActionStatus
    model: Array<Show>
}

interface ActionProps {
    fetch: () => void
}

interface Props extends StateProps, ActionProps {};

class ShowsComponent extends Component<Props> {

    componentDidMount() {
        const { fetch } = this.props;
        fetch();
    }

    render() {
        const {status, model} = this.props;

        switch (status) {
            case ApiActionStatus.LOADING:
                return <div>Loading...</div>;
            case ApiActionStatus.ERROR:
                return <div>Error!</div>;
            case ApiActionStatus.SUCCESS:
                return (
                    <ul>
                        {
                            model.map((show) => {
                                return <li key={show.id}>{show.title}</li>
                            })
                        }
                    </ul>
                );

        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ShowsComponent);