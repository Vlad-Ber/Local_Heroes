import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home.js';
import HelpRequest from './pages/HelpRequest.js';
import Signup from './pages/Signup.js';

import ProfileCreation from './pages/ProfileCreation.js';
import ResidenceInfo from './pages/ResidenceInfo.js';

import ZipCode from './pages/ZipCode.js'



class App extends Component {

  render(){
    return (
      <Router>
        <div className="App" style={{ fontFamily: 'Inter' }}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/help-request" component={HelpRequest}/>
            <Route path="/signup" component={Signup}/>

            <Route path="/residence-info" component={ResidenceInfo}/>
            <Route path="/profile-info" component={ProfileCreation}/>

            <Route path="/zipcode" component={ZipCode}/>
            <Route path="/profile-creation" component={ProfileCreation}/>
            <Route path="/profile-creation" component={ProfileCreation}/>
          </Switch>
        </div>
      </Router>
	)}

}
export default App;
