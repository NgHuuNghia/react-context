import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AutherContextProvider extends Component {
    
    state = {
        isAuthenticated : true,
        toggleAuth : () => { 
            this.setState({
                isAuthenticated: !this.state.isAuthenticated
            });
        }
    }

    render(){
        return (
            <AuthContext.Provider value = {{...this.state}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AutherContextProvider;