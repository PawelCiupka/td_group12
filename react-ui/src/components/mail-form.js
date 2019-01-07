import React, { Component } from 'react';
import axios from "axios";

import '../styles/components/mail-form.css';


class MailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            mail: "",
            message: ""
        };

        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFirstnameChange(event) {
        this.setState({firstname: event.target.value});
    }

    handleLastnameChange(event) {
        this.setState({lastname: event.target.value});
    }

    handleMailChange(event) {
        this.setState({mail: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        this.sendMail();
        event.preventDefault();
    }

    sendMail = () => {
        if(this.state.firstname === "" || this.state.lastname === "" || this.state.mail === "" || this.state.message === "") {
            alert('Uzupełnij wszystkie dane!');
        } else {
            alert(this.state.firstname + ', dziękujemy za wiadomość. W najbliższym czasie skontaktujemy się z Tobą. :)');
    
            axios.post("/api/sendMail", {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                mail: this.state.mail,
                message: this.state.message
            });
        }
    };

    // getRecaptcha =() => {
    //     axios.get('/api/getRecaptcha')
    //         .then((res) => {
    //             //let elem = <p>{res}</p>
    //             this.setState({recaptcha: res});
    //         });
    // }


    render() {
        return (
            <>
                <div className="MailForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div className="inputField" id="firstnameField">
                                <input placeholder="Imię" type="text" value={this.state.firstname} name="firstname" onChange={this.handleFirstnameChange}></input>
                            </div>
                        </label>                        
                        <label>
                            <div className="inputField" id="lastnameField">
                                <input placeholder="Nazwisko" type="text" value={this.state.lastname} name="lastname" onChange={this.handleLastnameChange}></input>
                            </div>
                        </label>
                        <label>
                            <div className="inputField">
                                <input placeholder='Email' type="text" value={this.state.mail} name="mail" onChange={this.handleMailChange}></input>
                            </div>
                        </label>
                        <label>
                            <div className="inputField">
                                <textarea placeholder="Wiadomość" type="text" value={this.state.message} name="message" onChange={this.handleMessageChange}></textarea>
                            </div>
                        </label>
                        <label>
                            <input className="SendMailButton" type="submit" value="Wyślij"></input>
                        </label>
                    </form>
                </div>
            </>
        )
    }
}

export default MailForm;