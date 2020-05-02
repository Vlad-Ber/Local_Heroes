import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { WithUserContext, UserProvider } from './components/UserContext.js'

import Home from './pages/Home.js';
import HelpRequest from './pages/HelpRequest.js';
import Signup from './pages/Signup.js';
import ProfilePage from './pages/ProfilePage.js';
import ProfileCreation from './pages/ProfileCreation.js';
import ResidenceInfo from './pages/ResidenceInfo.js';
import InsertImage from './pages/InsertImage.js';
import ZipCode from './pages/ZipCode.js'

class App extends Component {
  
  render(){
    return (
      <Router>
        {/* EXPERIMENTING WITH CONTEXT, NEEDS REFACTORING IN CONJUNCTION WITH LOGIN etc.  */}
        <UserProvider value={
          {
            _id: "5ea067e7331fa10de7cc0644",
            username: "ZiggyStardust",
            password: "secret",
            email: "davidbowie@localhero.com",
            name: "David Bowie",
            age: "68",
            adress: "David Bowie Street",
            description: "David Bowie was a legend", 
            virtuePoints: "784",
            areaID: "1111",
            mobile: "123456789",
            city: "Mars",
          }
        }>
          <div className="App" style={{ fontFamily: 'Helvetica' }}>
            <Switch>
                <Route path="/" exact component={Signup}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/home" component={WithUserContext(Home)} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/help-request" component={WithUserContext(HelpRequest)}/>
                <Route path="/profile-creation" component={ProfileCreation}/>
                <Route path="/residence-info" component={ResidenceInfo}/>
                <Route path="/insert-image" component={InsertImage}/>
                <Route path="/zipcode" component={WithUserContext(ZipCode)}/>
          </Switch>
          </div>
        </UserProvider>
      </Router>
	)}

};

export default App;
