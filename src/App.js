import React from 'react';

import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WithUserContext, UserProvider } from './components/UserContext.js'
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

import Home from './pages/Home.js';
import NavBar from './components/NavBar.js';
import Profile from "./components/Profile";
import HelpRequest from './pages/HelpRequest.js';
import HelpNotice from './pages/HelpNotice.js';
import Signup from './pages/Signup.js';
import ProfilePage from './pages/ProfilePage.js';
import ProfileCreation from './pages/ProfileCreation.js';
import ResidenceInfo from './pages/ResidenceInfo.js';
import InsertImage from './pages/InsertImage.js';
import ZipCode from './pages/ZipCode.js'

const App = () => {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="App" style={{ fontFamily: 'Helvetica' }}>
      <Router history={history}>
          <header>
            <NavBar/>
          </header>
          <div>
            Landing page
          </div>
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
              areaID: "99999",
              mobile: "123456789",
              city: "Mars",
            }
          }>
            <Switch>
                <Route path="/" exact/>
                <PrivateRoute path="/profile" component={Profile}/>
                <PrivateRoute path="/home" component={WithUserContext(Home)} />
                <PrivateRoute path="/profile-page" component={ProfilePage} />
                <PrivateRoute path="/help-request" component={WithUserContext(HelpRequest)}/>
                <PrivateRoute path="/help-notice" component={WithUserContext(HelpNotice)}/>
                <PrivateRoute path="/zipcode" component={WithUserContext(ZipCode)}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/profile-creation" component={ProfileCreation}/>
                <Route path="/residence-info" component={ResidenceInfo}/>
                <Route path="/insert-image" component={InsertImage}/>
          </Switch>
        </UserProvider>
      </Router>
    </div>
	);

};

export default App;
