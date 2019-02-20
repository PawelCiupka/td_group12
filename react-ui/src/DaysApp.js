import React, { Component } from 'react';
import axios from "axios";
import './styles/style.css';

class DaysApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            year: '',
            month: '',
            day: '',
            days: [],
            singleDay: '',
            intervalIsSet: false
        };   

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getAllDaysFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getAllDaysFromDb, 10000);
            this.setState({ intervalIsSet: interval });
        }
    };

    handleTextChange(e) {
        if (e.target.name === "id") {
            this.setState({
              id: e.target.value
            });
          }
        if (e.target.name === "year") {
          this.setState({
            year: e.target.value
          });
        }
        if (e.target.name === "month") {
          this.setState({
            month: e.target.value
          });
        }
        if (e.target.name === "day") {
            this.setState({
              day: e.target.value
            });
          }
      }

    handleSubmit(event) {
        this.insertNewDay();
        event.preventDefault();
    }

    handleGetSingleDay(event) {
        this.getSingleDayFromDb();
        event.preventDefault();
    }

    insertNewDay = () => {
        axios.post("/api/day/create", {
            year: this.state.year,
            month: this.state.month,
            day: this.state.day
        });
        this.getAllDaysFromDb();
    }

    getAllDaysFromDb = () => {
        axios.get("/api/day/getAll")
        .then(res => {
            this.setState({ days: res.data})
        });
    };

    getSingleDayFromDb = () => {
        axios.get("/api/day/getSingle", {
            params: {
                id: this.state.id
            }
        }).then(res => {
            this.setState({ singleDay: res.data})
        });
    }

    render() {
        return(
            <>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Dodaj dzień</h2>
                        <label>
                            <input type="text" placeholder="Rok" name="year" value={this.state.year} onChange={this.handleTextChange}></input>
                        </label>
                        <label>
                            <input type="text" placeholder="Miesiąc" name="month" value={this.state.month} onChange={this.handleTextChange}></input>
                        </label>
                        <label>
                            <input type="text" placeholder="Dzień" name="day" value={this.state.day} onChange={this.handleTextChange}></input>
                        </label>
                        <input type="submit" value="Go"></input>
                    </form>
                </div>
                <div>
                    <form onSubmit={this.handleGetSingleDay}>
                        <h2>Zwróć dzień</h2>
                        <label>
                            <input type="text" placeholder="ID" name="id" value={this.state.id} onChange={this.handleTextChange}></input>
                        </label>
                        <input type="submit" value="Go"></input>
                    </form>
                </div>

                <h2>Pojedynczy dzien</h2>
                
                    {this.state.singleDay == null
                    ? "Nie wybrano dnia."
                    :   <div>
                            <p>{this.state.singleDay._id}</p>
                            <p>{this.state.singleDay.day}</p>
                            <p>{this.state.singleDay.month}</p>
                            <p>{this.state.singleDay.year}</p>
                            <p>{this.state.singleDay.hours}</p>
                        </div>
                    }

                <h2>Lista wszystkich dni w bazie</h2>
                <ul>
                    {this.state.days.length <= 0
                        ? "Brak dni w bazie danych."
                        : this.state.days.map(day => (
                            <li key={day._id}>
                                <span><strong>{day._id}</strong></span>-
                                <span>{day.day}.{day.month}.{day.year} </span>-
                                <span>{day.dayOfWeek}</span> <br/>

                            </li>
                        ))}
                </ul>
            </>
        );
    }
}

export default DaysApp;