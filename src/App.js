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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetchLoggedInUser: {},
      userData: {},
      startRoute: WithUserContext(Signup)
    };

    this.updateUserContext = this.updateUserContext.bind(this);
    this.setLoggedInUser = this.setLoggedInUser.bind(this);

  };

  setLoggedInUser = (user) => { 
    this.setState({ userData: user }) 
  };

  updateUserContext = () => {
    axios.post("/getUser", {
        username: this.state.fetchLoggedInUser.username
    }).then((response) => {
      console.log("User updated successfully!", response);
      this.setState({ userData: response.data });
    }).catch((error) => {
        console.log("Got error while updating user data", error);
    });
  }

  componentDidMount(){
    console.log("---------- APP.JS DID MOUNT --------------")
    this.setState({ fetchLoggedInUser: JSON.parse(window.localStorage.getItem("loggedInUser")) });
    if(this.state.fetchLoggedInUser){
      this.updateUserContext()
    }
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
              <Route path="/" exact component={this.state.startRoute} />
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
