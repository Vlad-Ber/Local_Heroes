import React from 'react';
import './App.css';

import EventItem from './components/EventItem.js';
import ConfirmButton from './components/ConfirmButton.js';
function App() {
  return (
    <div className="App">
      Hello FESS
          <EventItem/>
          <ConfirmButton/>
      
    </div>
  );
}

export default App;
