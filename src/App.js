import React from 'react';
import './App.css';

import EventItem from './components/EventItem.js';

function App() {
  return (
    <div className="App">
      Hello FESS
      <EventItem title="Event" description="I want to help you"/>
    </div>
  );
}

export default App;
