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
  constructor(props){
      super(props);

      this.state = {
        user: ''
      }
  }



  componentDidMount(){
    let user = JSON.parse(window.localStorage.getItem("loggedInUser"));

    this.setState({
      user: user
    })
  }


  render() {
    console.log("User: "  + this.state.user.username)
    return (
      <Router>
        <UserProvider
          value={this.state.user}
        >
          <div className="App" style={{ fontFamily: "Helvetica" }}>
            <Switch>
              <Route path="/" exact component={Signup} />
              <Route path="/signup" component={Signup} />
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
