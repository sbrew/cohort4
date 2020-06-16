import React from 'react';
import { ThemeContext } from './AppContext';


class Settings extends React.Component {
    static contextType = ThemeContext;
    render() {
        // console.log(this.context);

        return (
            <ThemeContext.Consumer>{(context) => {
                const { themeChange, isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;

                return (
                    <div >
                    <h1>Settings Page</h1>
                        <div  style={{ background: theme.ui, color: theme.syntax }}>
                            <button 
                                onClick={themeChange}
                                style={{ background: theme.bg }}>
                                Night or day viewer
                        </button>
                        </div>
                    </div>

                )
            }}
            </ThemeContext.Consumer>

        )
    }
}

export default Settings;