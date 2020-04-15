import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home.js'; 
import HelpRequest from './pages/HelpRequest.js';
import Signup from './pages/Signup.js';

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App" style={{ fontFamily: 'Inter' }}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/help-request" component={HelpRequest}/>
            <Route path="/signup" component={Signup}/>
          </Switch>
        </div>
      </Router>
	)}

}
export default App;
