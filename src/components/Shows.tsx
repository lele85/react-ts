import { Component } from 'react';
import React from 'react';
import { connect, Dispatch, StatelessComponent } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AnyAction } from 'typescript-fsa';
import { $call } from 'utility-types';

import { fetchShowsWorker } from '../actions/ShowActions';
import { ShowModelBase } from '../model/IShow';
import { AppState } from '../state/AppState';
import { Fetch } from './Fetch';
import { Show } from './Show';

const mapStateToProps = (state: AppState) => {
    return state.shows;
};

const mapActionsToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators({
        fetchShows: fetchShowsWorker
    }, dispatch);
};

const returnOfActionProps = $call(mapActionsToProps);
const returnOfStateProps = $call(mapStateToProps);

type StateProps = typeof returnOfStateProps;
type ActionProps = typeof returnOfActionProps;
type Props = StateProps & ActionProps;

const SuccessComponent : StatelessComponent<{model: ShowModelBase[] | null}> = ({model}) => {
    if (!model) { return null; }
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
            fetchShows
        } = this.props;

        return (
            <Fetch
                fetch={fetchShows}
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