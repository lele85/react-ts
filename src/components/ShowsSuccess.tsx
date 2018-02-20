import React, { Component } from "react";
import { ShowModelBase } from "../model/IShow";
import { Show } from "./Show";

type ShowsSuccessProps = {model: ShowModelBase[] | null};
type ShowsSuccessState = {selected: number | null};

export class ShowsSuccess extends Component<ShowsSuccessProps, ShowsSuccessState> {

    state = {
        selected: null
    }

    constructor(props:ShowsSuccessProps) {
        super(props);
    }

    onSelectShow(id:number) {
        this.setState({
            selected: id
        });
    }

    render() {
        const {model} = this.props;
        const {selected} = this.state;
        if (!model) { return null; }
        return (
            <div>
                <ul>
                    {
                        model.map((show) => {
                            return <Show onSelectShow={this.onSelectShow.bind(this, show.id)} key={show.id} show={show} />;
                        })
                    }
                </ul>
                <div>
                    {selected}
                </div>
            </div>
        )
    }
    
};