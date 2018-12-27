import React, { Component } from 'react';

class GetGame extends Component {

    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null
    };

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    };

    getDataFromDb = () => {
        fetch("/api/getData")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
    };

    render() {
        return (
            <ul>
                {this.state.data.length <= 0
                    ? "NO DB ENTRIES YET"
                    : this.state.data.map(dat => (
                        <li style={{ padding: "10px" }} key={this.state.data.message}>
                            <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                            <span style={{ color: "gray" }}> data: </span>
                            {dat.message}
                        </li>
                    ))}
            </ul>
        )
    }
}

export default GetGame;