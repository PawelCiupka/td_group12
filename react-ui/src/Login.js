import React, { Component } from 'react';
import axios from "axios";
import './styles/style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            gameTitle: 'TD_GROUP12'
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
            <section className="Login">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h1>{this.state.gameTitle}</h1>
                    <h2>Zaloguj się</h2>
                    <label>
                        <input type="text" placeholder="Login" value={this.state.login} onChange={this.handleLoginChange}></input>
                    </label>
                    <label>
                        <input type="password" placeholder="Hasło" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    </label>
                    <input className="LoginButton" type="submit" value="Login"></input>
                </form>
            </section>
        )
    }
}

export default Login;