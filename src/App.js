import React, { Component } from 'react';
import axios from 'axios';

import Home from './pages/Home.js'; 
import HelpRequest from './pages/HelpRequest.js';

class App extends Component {

  askForHelp = () => {
      axios.post("/",{
          data1: "I want help!",
      }).then((response)=> {
          console.log("Data submitted successfully");
      }).catch((error)=> {
          console.log("got errr while posting data", error);
      });
  }

  render(){
    return (
      <div className="App" style={{ fontFamily: 'Inter' }}>
        <Home/>
      </div>
	)}
}

export default App;
