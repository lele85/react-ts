import React from "React";
import { StatelessComponent } from "react";
import { IShow } from "../model/IShow";

export const Show : StatelessComponent<{show: IShow}> = ({show}) => {
    return (
        <li>{show.title}</li>
    );
};