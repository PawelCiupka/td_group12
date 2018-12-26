import React, { Component } from 'react';
import './styles/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleLoginChange(event) {
        this.setState({login: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        alert('Login: ' + this.state.login + '\nPassword: ' + this.state.password);
        event.preventDefault();
    }


    render() {
        return (
            <>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p>Login:</p>
                            <p><input type="text" value={this.state.login} onChange={this.handleLoginChange}></input></p>
                        </label>
                        <label>
                            <p>Password:</p>
                            <p><input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input></p>
                        </label>
                        <input type="submit" value="Login"></input>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;