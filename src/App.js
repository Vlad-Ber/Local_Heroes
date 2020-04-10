import React, { Component } from 'react';
import axios from 'axios';

import EventItem from './components/EventItem.js';
import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';
import SectionTitle from './components/SectionTitle.js';
import StatusView from './components/StatusView.js';
import TextButton from './components/TextButton.js';
import ConfirmButton from './components/ConfirmButton.js';    

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
      </div>
	)}

}

export default App;
