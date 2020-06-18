import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/AppContext';

const Cards = (props) => {

  
    const {theme} = useContext(ThemeContext);

    return (
        <div style={{color: theme.syntax, background: theme.background}} className="Cards">
            
            <h2>item: {props.thing.name}</h2>

        </div>
    )
}

export default Cards;