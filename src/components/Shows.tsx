import React from 'react';
import { Component } from 'react';
import { connect, Dispatch, StatelessComponent } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AnyAction } from 'typescript-fsa';

import { fetchShowsWorker } from '../actions/ShowActions';
import { ShowModelBase } from '../model/IShow';
import { AppState } from '../state/AppState';
import { ApiActionStatus } from '../state/FetchApiState';
import { Fetch } from './Fetch';
import { Show } from './Show';

const actionProps = {
    fetch: fetchShowsWorker
};

type StateProps = { status: ApiActionStatus, model: Array<ShowModelBase> };
type ActionProps = typeof actionProps;
type Props = StateProps & ActionProps;

const mapStateToProps = (state: AppState) => {
    return state.shows;
};

const mapActionsToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators(actionProps, dispatch);
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