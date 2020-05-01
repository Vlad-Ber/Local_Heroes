import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserProvider } from './components/UserContext.js'

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
      <UserProvider value={{userID: "test123456789", areaID: "99999"}}>
        <Router>
          <div className="App" style={{ fontFamily: 'Helvetica' }}>
            <Switch>
              <Route path="/" exact component={Signup}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/home" component={Home} />
              <Route path="/profile-page" component={ProfilePage} />
              <Route path="/help-request" component={HelpRequest}/>
              <Route path="/profile-creation" component={ProfileCreation}/>
              <Route path="/residence-info" component={ResidenceInfo}/>
              <Route path="/insert-image" component={InsertImage}/>
              <Route path="/zipcode" component={ZipCode}/>
          </Switch>
          </div>
        </Router>
      </UserProvider>
	)}

};

export default App;
