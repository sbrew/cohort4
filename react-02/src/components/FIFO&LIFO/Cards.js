import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/AppContext';

const Cards = (props) => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div style={{color: theme.syntax, background: theme.bg}} className="Cards">
            
            <h2>item: {props.thing.name}</h2>

        </div>
    )
}

export default Cards;