import React from 'react';
import './App.css';

import EventItem from './components/EventItem.js';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Inter' }}>
      Hello FESS
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
      <EventItem title="Event" description="Maria helped Lisa carry a sofa"/>
    </div>
  );
}

export default App;
