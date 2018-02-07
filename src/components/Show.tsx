import React, { Component } from "react";
import { StatelessComponent } from "react";
import { ShowModelBase } from "../model/IShow";

export class Show extends Component<{show: ShowModelBase}> {
    
    render() {
        const { show } = this.props;
        return (
            <li>{show.title}</li>
        );
    }
};