import React from 'react';

export const AppTheme = {
    light: {
        name: 'Day Theme',
        syntax: '#555',
        ui: '#ddd',
        background: '#eee'
    },
    dark: {
        name: 'Night Theme',
        syntax: '#ddd',
        ui: '#333',
        background: '#555'
    }
}

export const ThemeContext = React.createContext({
    theme: AppTheme.light,
    themeChange: () => {}
});

// class ThemeContextProvider extends Component {
//     state = {
//         isLightTheme: true,
//         light: { syntax: '#555', ui: '#ddd', background: '#eee' },
//         dark: { syntax: '#ddd', ui: '#333', background: '#555' }
//     }

//     themeChange = () => {
//         this.setState({ isLightTheme: !this.state.isLightTheme });
//     }
//     render() {
//         return (
//             <ThemeContext.Provider value={{ ...this.state,  themeChange: this.themeChange }}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         );
//     }
// }

// export default ThemeContextProvider;