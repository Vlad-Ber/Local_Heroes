import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';
import EventItem from './components/EventItem.js';
import TextInput from './components/TextInput.js';

class App extends Component {
    constructor(props){
	super(props);
	this.state= {
	    name: 'hejsan',
	    data1: "boll",
	};

    }
    vidKnappTryck = () => {
	axios.post("/",{
	    data1: "hej",
	}).then((response)=> {
	    console.log("Data submitted successfully");
	}).catch((error)=> {
	    console.log("got errr while posting data", error);	    
	});
    }
		 
    render(){
	return (
	    <div className="App" style={{ fontFamily: 'Inter' }}>
            <NavBar/>
            <EventItemListView />
	    <button onClick={this.vidKnappTryck} id="loginKnapp" type="button" className="input">Server-TestKnapp</button>
	    </div>
	    
    ); 
  }
}

export default App;
