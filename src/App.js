import React, { Component } from 'react';
import './App.css';


import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';
import SectionTitle from './components/SectionTitle.js';

import errands from './data/errands.json';

class App extends Component {

  render(){
    return (
      <div className="App" style={{ fontFamily: 'Inter' }}>
        <NavBar/>
        <SectionTitle text="RECENT ACTIVITY"/>
        <EventItemListView errands={errands["errands"]}/>
      </div>
    );
  }
}

export default App;
