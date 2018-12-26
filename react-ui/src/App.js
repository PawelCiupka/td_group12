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

// Routing class
class App extends Component {
  render() {
    return (
      <Router>
        <>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/getgame" component={GetGame} />

        </>
      </Router>
    );
  }
}

export default App;