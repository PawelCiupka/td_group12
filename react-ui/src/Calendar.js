import React, { Component } from 'react';
import axios from "axios";
import './styles/style.css';
import './components/calendar-comp';
import CalendarComp from './components/calendar-comp';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };   
    }

    render() {
        return(
            <CalendarComp title="Siłownia" />
        );
    }
}

export default Calendar;