import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';
import Top10 from '../components/Top10.js';
import MyRanking from '../components/MyRanking.js';

class Leaderboard extends Component {
    constructor(props){
        super(props);
        this.state = {
	    activeUser: this.props.activeUser,
	}
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
