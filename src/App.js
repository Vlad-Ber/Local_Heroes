import React from 'react';
import './App.css';


import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';
import EventItem from './components/EventItem.js';
import TextInput from './components/TextInput.js';


function App() {
  return (
    <div className="App" style={{ fontFamily: 'Inter' }}>
      <NavBar/>
      <EventItemListView />
    </div>
  );
}

export default App;
