import React, { Component } from 'react';
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: 'TD_GROUP12'
    };
  }


  render() {
    return (
      <div className="App">

        <div className="row first">

          <div className="row gameTitle">
            <div className="col-sm-12">
              <h1>{this.state.gameTitle}</h1>
            </div>
          </div>

        </div>


        <div className="row second">          
          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-8">
              <div className="sectionTitle">
                <h2>Walka</h2>
              </div>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>

      </div>
  
      
    )}
}

export default App;
