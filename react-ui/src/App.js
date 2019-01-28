import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Pages
import Home from './Home';
import Login from './Login';
import GetGame from './GetGame';
import Calendar from './Calendar';
import Gameplay from './Gameplay';


// Routing class
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/getgame" component={GetGame} />
          <Route path="/calendar" component={Calendar}/>
          <Route path="/gameplay" component={Gameplay}/>

        </>
      </Router>
    );
  }
}

export default App;