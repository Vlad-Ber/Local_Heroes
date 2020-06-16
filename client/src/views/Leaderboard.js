import React, { Component } from 'react';
//import axios from 'axios';
//import { config } from "../config"

import NavBar from '../components/NavBar.js';

class Leaderboard extends Component {
    constructor(props){
        super(props);

        this.state = {
	    
        }
    }
    render(){
	return(
		<div>
		<NavBar
	    leftButtonType="back"
            leftButtonLink="/home"
		/>
		</div>
	);
    }
}

export default Leaderboard;
