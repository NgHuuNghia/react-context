import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { AuthContext } from '../contexts/authContext';
class Navbar extends Component {

    render() {
        return (
            <AuthContext.Consumer>
                { (authContext) =>
                    (
                        <ThemeContext.Consumer>
                        {(themeContext) => {
                            const { isAuthenticated, toggleAuth} = authContext;
                            const { isLightTheme, light, dark } = themeContext;
                            const theme = isLightTheme ? light : dark;
        
                            return (
                                <nav style={{ background: theme.ui, color: theme.syntax }}>
                                    <h1>Context App</h1>
                                    <h2 style={{color:"red"}} onClick={toggleAuth}> {isAuthenticated ? 'Log In' : 'Log Out'} </h2>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                            )
                        }}
                    </ThemeContext.Consumer>
                    )
                }
            </AuthContext.Consumer>
          
        )
    }

}

export default Navbar;