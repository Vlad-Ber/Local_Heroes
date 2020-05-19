import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { WithUserContext, UserProvider } from "./components/UserContext.js";

import Home from "./pages/Home.js";
import HelpRequest from "./pages/HelpRequest.js";
import HelpNotice from "./pages/HelpNotice.js";
import Signup from "./pages/Signup.js";
import ProfilePage from "./pages/ProfilePage.js";
import ProfileCreation from "./pages/ProfileCreation.js";
import ResidenceInfo from "./pages/ResidenceInfo.js";
import InsertImage from "./pages/InsertImage.js";
import ZipCode from "./pages/ZipCode.js";

import uploadImage from './components/uploadImage'

class App extends Component {

  constructor(props) {

    super(props);
    
    this.state = {
      fetchLoggedInUser: {},
      userData: {},
    };

    this.updateUserContext = this.updateUserContext.bind(this);
    this.setLoggedInUser = this.setLoggedInUser.bind(this);
    this.checkInitialLogin = this.checkInitialLogin.bind(this);

  };

  // setLoggedInUser 
  // accessed via prop onSetLoggedInUser in UserContext
  // PARAM: user object to update state with  
  setLoggedInUser = (user) => { 
    console.log("setLoggedInUser in App.js")
    this.setState({ userData: user }) 
  };

  // When App mounts (e.g. on refresh), fetches logged in user from localStorage and updates state and context
  checkInitialLogin = async () => {
    console.log("checkInitialLogin in App.js")
    let fetchedUser = await JSON.parse(window.localStorage.getItem("loggedInUser"));
    await this.setState({ fetchLoggedInUser: fetchedUser });
    fetchedUser !== null ? this.updateUserContext() : console.log("No user logged in")
  }

  // Gets the latest data from db for the logged in user as fetched by checkInitialLogin
  updateUserContext = () => {
    axios.post("/getUser", {
      username: this.state.fetchLoggedInUser.username
    }).then((response) => {
      console.log("User context updated successfully!", response);
      this.setState({ userData: response.data });
    }).catch((error) => {
      console.log("Got error while updating user data", error);
    });
  }
  
  componentDidMount(){
    console.log("---------- APP.JS DID MOUNT --------------")
    this.checkInitialLogin();
  }
  
  render() {
    return (
      <Router>
        <UserProvider
          value={{
            ...this.state.userData,
            onSetLoggedInUser: this.setLoggedInUser,
          }}
        >
          <div className="App" style={{ fontFamily: "Helvetica" }}>
            <Switch>
              <Route path="/" exact component={WithUserContext(Signup)} />
              <Route path="/signup" component={WithUserContext(Signup)} />
              <Route path="/home" component={WithUserContext(Home)} />
              <Route
                path="/profile-page"
                component={WithUserContext(ProfilePage)}
              />
              <Route
                path="/help-request"
                component={WithUserContext(HelpRequest)}
              />
              <Route
                path="/help-notice"
                component={WithUserContext(HelpNotice)}
              />
              <Route path="/profile-creation" component={ProfileCreation} />
              <Route path="/residence-info" component={ResidenceInfo} />
              <Route path="/insert-image" component={InsertImage} />
              <Route path="/zipcode" component={WithUserContext(ZipCode)} />
            </Switch>
          </div>
        </UserProvider>
      </Router>
    );
  }
}

export default App;
