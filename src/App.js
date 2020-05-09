import React, { Component } from "react";

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
    super(props)
    this.state = {
      fetchLoggedInUser: JSON.parse(
        window.localStorage.getItem("loggedInUser")
      ),
    };
  }
  setLoggedInUser = (user) => {
    this.setState({
      fetchLoggedInUser: user,
    });
  };

  render() {
    return (
      <Router>
        {/* READ ME: 
        
          EXPERIMENTING WITH CONTEXT, NEEDS REFACTORING IN CONJUNCTION WITH LOGIN etc.  

          UserProvider value should be fetched from login-state 

          Break out login from Signup and handle login right here in root? 
        
        */}
        <UserProvider
          value={{
            ...this.state.fetchLoggedInUser,
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
              />
            </Switch>
          </div>
        </UserProvider>
      </Router>
    );
  }
}

export default App;
