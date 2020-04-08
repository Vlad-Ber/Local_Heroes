import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';

import data from './data/data.json';

class App extends Component {

  render(){
    return (
      <div className="App" style={{ fontFamily: 'Inter' }}>
        <NavBar/>
        <EventItemListView errands={data["errands"]}/>
      </div>
    ); 
  }
}

export default App;
