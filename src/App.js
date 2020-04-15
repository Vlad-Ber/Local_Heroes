import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
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
=======

import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';
import SectionTitle from './components/SectionTitle.js';
import StatusView from './components/StatusView.js';
import ConfirmButton from './components/ConfirmButton.js';    
import TextButton from './components/TextButton.js'; 


import data from './data/data.json';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            areaId: 75232,
            activeErrands: 0,
            activeUsers: 0
        }
    }
    
    vidKnappTryck = () => {
	axios.post("/",{
	    data1: "hej",
	}).then((response) => {
            console.log("Data submitted successfully");
	}).catch((error) => {
            console.log("got errr while posting data", error);	    
	});
    }

  askForHelp = () => {
      axios.post("/",{
          data1: "I want help!",
      }).then((response)=> {
          console.log("Data submitted successfully");
      }).catch((error)=> {
          console.log("got errr while posting data", error);
      });
  }


  componentDidMount(){
    let updatedActiveUsers = data["users"].filter(user =>
      user.areaId === this.state.areaId).length;

    let updatedActiveErrands = data["errands"].filter(errand =>
      errand.areaId === this.state.areaId && errand.status !== "done").length;

    this.setState({ activeErrands: updatedActiveErrands, activeUsers: updatedActiveUsers })
  }

  render(){
    return (
      <div className="App" style={{ fontFamily: 'Inter' }}>
        <NavBar/>
        <StatusView
          areaId={this.state.areaId}
          activeUsers={this.state.activeUsers}
          activeErrands={this.state.activeErrands}
        />
        <TextButton function={this.askForHelp} description="ASK FOR HELP"/>
        <SectionTitle text="RECENT ACTIVITY"/>
        <EventItemListView errands={data["errands"]}/>

            <ConfirmButton/>
	    <button onClick={this.vidKnappTryck} id="loginKnapp" type="button" className="input">Server-TestKnapp</button>
	    </div>
>>>>>>> master
	)}

}
export default App;
