import React, { Component } from 'react';
import axios from "axios";


class MailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            mail: ""
        };

        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handMailChange = this.handMailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstnameChange(event) {
        this.setState({firstname: event.target.value});
    }

    handleLastnameChange(event) {
        this.setState({lastname: event.target.value});
    }

    handMailChange(event) {
        this.setState({mail: event.target.value});
    }

    handleSubmit(event) {
        this.sendMail();
        event.preventDefault();
    }

    sendMail = () => {
        alert('Imię: ' + this.state.firstname + '\nNazwisko: ' + this.state.lastname +'\nMail: ' + this.state.mail);
    
        axios.post("/api/sendMail", {
            firstname: 'XD',
            lastname: this.state.lastname,
            mail: this.state.mail
        });
    };


    render() {
        return (
            <>
                <div className="MailForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p>Imię</p>
                            <p><input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input></p>
                        </label>                        
                        <label>
                            <p>Nazwisko</p>
                            <p><input type="text" value={this.state.lastname} onChange={this.handleLastnameChange}></input></p>
                        </label>
                        <label>
                            <p>Mail</p>
                            <p><input type="mail" value={this.state.mail} onChange={this.handMailChange}></input></p>
                        </label>
                        <input type="submit" value="Wyślij"></input>
                        <button onClick={() => this.sendMail()}>XDXDXDXD</button>
                    </form>
                </div>
            </>
        )
    }
}

export default MailForm;