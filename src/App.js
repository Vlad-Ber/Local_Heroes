import React, { Component } from 'react';
import './App.css';


import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';
import EventItem from './components/EventItem.js';
import TextInput from './components/TextInput.js';


class App extends Component {

  render(){
    return (
      <div className="App" style={{ fontFamily: 'Inter' }}>
        <NavBar/>
        <EventItemListView />
      </div>
    ); 
  }
}

export default App;
