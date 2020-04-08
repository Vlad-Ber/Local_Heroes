import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';

import errands from './data/errands.json';

class App extends Component {

  render(){
    return (
      <div className="App" style={{ fontFamily: 'Inter' }}>
        <NavBar/>
        <EventItemListView errands={errands["errands"]}/>
      </div>
    ); 
  }
}

export default App;
