import React, {Component} from 'react';
import '../styles/components/calendar.css';

class CalendarComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarTitle: props.title
        }

        this.handleHourChoice = this.handleHourChoice.bind(this);
    }

    handleHourChoice(event) {
        alert('Chcesz zarezerwować salkę ' + this.state.calendarTitle + ' na godzinę 8:00?'); 
    }

    render() {
        return(
            <section id="calend">                
                <aside className="calend-days">
                    <ul>
                        <li>
                            <button className="calend-day-but">                            
                                <p className="calend-day-num">1</p>
                                <p className="calend-day-day">PON</p>
                            </button>
                        </li>
                        <li>
                            <button className="calend-day-but">                            
                                <p className="calend-day-num">2</p>
                                <p className="calend-day-day">WT</p>
                            </button>
                        </li>
                        <li>
                            <button className="calend-day-but">                            
                                <p className="calend-day-num">3</p>
                                <p className="calend-day-day">ŚR</p>
                            </button>
                        </li>
                        <li>
                            <button className="calend-day-but">                            
                                <p className="calend-day-num">4</p>
                                <p className="calend-day-day">CZW</p>
                            </button>
                        </li>
                        <li>
                            <button className="calend-day-but">                            
                                <p className="calend-day-num">5</p>
                                <p className="calend-day-day">PT</p>
                            </button>
                        </li>
                        <li>
                            <button className="calend-day-but">                            
                                <p className="calend-day-num">6</p>
                                <p className="calend-day-day">SOB</p>
                            </button>
                        </li>
                        <li>
                            <button className="calend-day-but">                            
                                <p className="calend-day-num">7</p>
                                <p className="calend-day-day">ND</p>
                            </button>
                        </li>
                    </ul>
                </aside>
                <section className="calend-main">
                    <header className="calend-head">
                        <h3>{this.state.calendarTitle}</h3>
                    </header>
                    <div className="calend-content">
                        <ul>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li><li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                            <li onClick={this.handleHourChoice}>
                                <span className="calend-hour">8:00</span>
                                <span className="calend-user">711</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        );
    }

}

export default CalendarComp;