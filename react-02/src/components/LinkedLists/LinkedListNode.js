import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/AppContext';


const LinkedListNodeComp = ({ node }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{color: theme.syntax, background: theme.background}} className="Cards">
        {/* <div  className="Cards"> */}
            <h2>Subject {node.subject}</h2>
            <h2>Amount {node.amount}</h2>
        </div>
    )
}

export default LinkedListNodeComp;