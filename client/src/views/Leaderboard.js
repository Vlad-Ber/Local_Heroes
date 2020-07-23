import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';
import Top10 from '../components/Top10.js';
import MyRanking from '../components/MyRanking.js';
import axios from "axios";
import { config } from "../config";

class Leaderboard extends Component {
    constructor(props){
        super(props);
        this.state = {
	    activeUser: this.props.activeUser,
	}
    }

    checkAuth = async () => {
	await axios.post(config.baseUrl + "/checkAuth", {
	    accessToken: this.props.activeUser.accessToken,
	}).then((response) => {
	    if(response.data.error === undefined){
		console.log("You are authorized!");
	    }
	    else{
		window.location.href = "/" ;
	    }
	}).catch((error) => {
	    console.log(error);
	});
    }


    componentDidMount() {
	console.log("---------- HOME.JS DID MOUNT ----------------");
	this.checkAuth();
    }
    
    render(){
	return(
		<div>
		<NavBar
	    leftButtonType="back"
            leftButtonLink="/home"
		/>
		<Top10/>
		<MyRanking
	    activeUser= {this.state.activeUser}
		/>
		</div>
	);
    }
}

export default Leaderboard;
