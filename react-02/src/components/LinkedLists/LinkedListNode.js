import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/AppContext';


const LinkedListNodeComp = ({ node }) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{color: theme.syntax, background: theme.bg}} className="Cards">
            <h2>Subject {node.subject}</h2>
            <h2>Amount {node.amount}</h2>
        </div>
    )
}

export default LinkedListNodeComp;