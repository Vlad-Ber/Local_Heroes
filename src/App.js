import React from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import EventItem from './components/EventItem.js';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Inter' }}>
      <NavBar/>
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
    </div>
  );
}

export default App;
