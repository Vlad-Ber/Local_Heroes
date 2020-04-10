import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home.js'; 
import HelpRequest from './pages/HelpRequest.js';

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App" style={{ fontFamily: 'Inter' }}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/help-request" component={HelpRequest}/>
          </Switch>
        </div>
      </Router>
	)}
}

export default App;
