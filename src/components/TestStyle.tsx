import React from 'react';
import { StatelessComponent } from "react";
import styles from './TestStyle.scss';
import colors from '../styles/colors.scss';

export const TestStyle: StatelessComponent<{}> = () => {
    return (
        <div className={styles.componentBorder}>
            <h1>Colors from SCSS variables:</h1>
            <ul>
               <li style={{backgroundColor:colors.accentColor, color:"white"}}>{colors.accentColor}</li>
               <li style={{backgroundColor:colors.errorColor, color:"white"}}>{colors.errorColor}</li> 
               <li style={{backgroundColor:colors.warningColor, color:"white"}}>{colors.warningColor}</li> 
               <li style={{backgroundColor:colors.infoColor, color:"white"}}>{colors.infoColor}</li>  
            </ul>
        </div>
        
    );
}

export default TestStyle;