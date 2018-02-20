import React, { Component } from "react";
import { StatelessComponent } from "react";
import { ShowModelBase } from "../model/IShow";

export class Show extends Component<{
    show: ShowModelBase,
    onSelectShow: () => void
}> {
    
    render() {
        const { show, onSelectShow } = this.props;
        return (
            <li onClick={onSelectShow}>{show.title}</li>
        );
    }
};