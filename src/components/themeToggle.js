import React, { Component } from 'react';
import  { ThemeContext } from '../contexts/themeContext';


class ThemeToggle extends Component {
    
    static contextType = ThemeContext; // cách cơ bản (cách # là gọi consumer)

    render(){
        const {toggleTheme} = this.context;
        return (
            <button onClick={toggleTheme}>Toggle Theme</button>
        )
    }

}
export default  ThemeToggle;