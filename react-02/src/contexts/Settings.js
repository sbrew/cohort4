import React from 'react';
import { ThemeContext } from './AppContext';


class Settings extends React.Component {
    static contextType = ThemeContext;
    render() {
        const { theme, themeChange } = this.context;

        return (
            <div>
                <h1>Settings Page</h1>
                <div>
                    <button
                        onClick={themeChange}
                        style={{ background: theme.background }} >
                        Night or Day viewer

                        </button><br />
                        <h3>Currently: {theme.name}</h3>
                </div>
            </div>
        )
    }
}

export default Settings;