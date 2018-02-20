import { Component } from 'react';
import React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AnyAction } from 'typescript-fsa';
import { $call } from 'utility-types';

import { fetchShowsClear, fetchShowsWorker } from '../actions/ShowActions';
import { AppState } from '../state/AppState';
import { Fetch } from './Fetch';
import { ShowsSuccess } from './ShowsSuccess';

const ShowsError = () => {
    return <div>Error!</div>
}

const ShowsLoading = () => {
    return <div>Loading...</div>
}

const mapStateToProps = (state: AppState) => {
    return state.shows;
};

const mapActionsToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators({
        fetchShows: fetchShowsWorker,
        fetchShowsClear: fetchShowsClear
    }, dispatch);
};

const returnOfActionProps = $call(mapActionsToProps);
const returnOfStateProps = $call(mapStateToProps);

type StateProps = typeof returnOfStateProps;
type ActionProps = typeof returnOfActionProps;
type Props = StateProps & ActionProps;

class ShowsComponent extends Component<Props> {

    render() {
        const {
            status,
            model,
            fetchShows,
            fetchShowsClear
        } = this.props;

        return (
            <Fetch
                fetch={fetchShows}
                fetchParams={{}}
                fetchClear={fetchShowsClear}
                fetchState={{status,model}}
                SuccessElement={<ShowsSuccess model={model} />}
                ErrorElement={<ShowsError />}
                LoadingElement={<ShowsLoading />}
            />
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ShowsComponent);