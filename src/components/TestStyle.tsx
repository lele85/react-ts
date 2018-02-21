import React from "react";
import { StatelessComponent } from "react";
import styles from "./TestStyle.scss";

export const TestStyle: StatelessComponent<{}> = () => {
    return (
        <div className={styles.componentBorder}>
            <h1>Colors from SCSS variables:</h1>
            <ul>
                <li style={{ backgroundColor: styles.accentColor, color: "white" }}>{styles.accentColor}</li>
                <li style={{ backgroundColor: styles.errorColor, color: "white" }}>{styles.errorColor}</li>
                <li style={{ backgroundColor: styles.warningColor, color: "white" }}>{styles.warningColor}</li>
                <li style={{ backgroundColor: styles.infoColor, color: "white" }}>{styles.infoColor}</li>
            </ul>
        </div>
    );
};

export default TestStyle;
