import React, { StatelessComponent } from 'react';
import { ShowModelBase, ShowModelDetail } from '../model/IShow';
import { Fetch } from './Fetch';
import { FetchApiState } from '../state/FetchApiState';
import { AppState } from '../state/AppState';
import { $call } from 'utility-types';
import { fetchShowWorker } from '../actions/ShowActions';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';
import { connect } from 'react-redux';
import { FetchParams } from '../lib/Http';

const mapStateToProps = (state: AppState) => {
    return {
        model: state.show.model,
        status: state.show.status
    }
};

const mapActionsToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators({
        fetchShow: fetchShowWorker
    }, dispatch);
}

type OwnProps = { showId : number };
const statePropsReturn = $call(mapStateToProps);
const actionsPropsReturn = $call(mapActionsToProps);

type Props =
    & OwnProps
    & typeof statePropsReturn
    & typeof actionsPropsReturn;

const ShowDetailedSuccess : StatelessComponent<{model: ShowModelDetail | null}> = ({model}) => {
    if(!model) { return null; }
    return (
        <div>
            <h1>{model.title}</h1>
            <img src={model.image_url} />
        </div>);
}

const ShowDetailed : StatelessComponent<Props> = ({showId, model, status, fetchShow}) => {
    return (
        <Fetch
            fetch={fetchShow}
            fetchParams={{id:showId}}
            fetchState={{model,status}}
            SuccessElement={<ShowDetailedSuccess model={model} />}
            ErrorElement={<div>ERROR</div>}
            LoadingElement={<div>LOADING...</div>}
        />
    )
}

export default connect(mapStateToProps, mapActionsToProps)(ShowDetailed);