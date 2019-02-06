import React, { Component } from 'react';
import axios from "axios";
import './styles/style.css';

class HoursApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            room: '',
            hours: [],
            intervalIsSet: false
        };   

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getAllHoursFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getAllDaysFromDb, 10000);
            this.setState({ intervalIsSet: interval });
        }
    };

    handleTextChange(e) {
        if (e.target.name === "value") {
          this.setState({
            value: e.target.value
          });
        }
        if (e.target.name === "room") {
          this.setState({
            room: e.target.room
          });
        }
      }

    handleSubmit(event) {
        this.insertNewHour();
        event.preventDefault();
      }

    insertNewHour = () => {
        axios.post("/api/hour/create", {
            value: this.state.value,
            room: this.state.room
        });
        this.getAllHoursFromDb();
    }

    getAllHoursFromDb = () => {
        axios.get("/api/hour/getAll")
        .then(res => {
            this.setState({ hours: res.data})
        });
    };

    render() {
        return(
            <>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Dodaj godzinę</h2>
                        <label>
                            <input type="text" placeholder="Godzina" name="value" value={this.state.value} onChange={this.handleTextChange}></input>
                        </label>
                        <label>
                            <input type="text" placeholder="Pokój" name="room" value={this.state.room} onChange={this.handleTextChange}></input>
                        </label>
                        <input type="submit" value="Go"></input>
                    </form>
                </div>
                <h2>Lista wszystkich godzin w bazie</h2>
                <ul>
                    {this.state.hours.length <= 0
                        ? "Brak godzin w bazie danych."
                        : this.state.hours.map(hour => (
                            <li key={hour._id}>
                                <span><strong>{hour._id}</strong></span>-
                                <span>{hour.value}</span>-
                                <span>{hour.room}</span> <br/>

                            </li>
                        ))}
                </ul>
            </>
        );
    }
}

export default HoursApp;