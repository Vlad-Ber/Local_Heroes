import React from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Inter' }}>
      <NavBar/>
      <EventItemListView />
    </div>
  );
}

export default App;
