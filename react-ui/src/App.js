import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Pages
import Home from './Home';
import Login from './Login';
import Calendar from './Calendar';
import Gameplay from './Gameplay';
import DaysApp from './DaysApp';


// Routing class
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/calendar" component={Calendar}/>
          <Route path="/gameplay" component={Gameplay}/>
          <Route path="/days" component={DaysApp}/>

        </>
      </Router>
    );
  }
}

export default App;