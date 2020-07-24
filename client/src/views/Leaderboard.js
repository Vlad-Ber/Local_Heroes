import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';
import Top10 from '../components/Top10.js';
import MyRanking from '../components/MyRanking.js';
import LinkWrapper from "../components/LinkWrapper.js";
import BackButton from '../components/BackButton.js';

class Leaderboard extends Component {
    constructor(props){
        super(props);
        this.state = {
	    activeUser: this.props.activeUser,
	};
    };
	render(){
	    return(
		    <div>
		<div className="limiter">
    		<div className="container-login100">
    		<div className="wrap-login100">
    		<form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
    		    <span className="login100-form-title">
		           <BackButton
                              text="Back"
                              link="/home"
                          />
    		Leaderboard
    	    </span>

    		<div className="wrap-input100 validate-input m-b-16">
    	
    		</div>

    		    <div className="wrap-input100 validate-input">
		    <Top10
		activeUser= {this.state.activeUser}
		    />
    		    <MyRanking
		activeUser= {this.state.activeUser}
		    />	
    		<span className="focus-input100"></span>
    		</div>

    		<div className="text-right p-t-13 p-b-23">

    		<div className="txt2">
    		</div>
    		</div>

    		<div className="container-login100-form-btn">
    		</div>

    		<div className="flex-col-c p-t-170 p-b-40">
		</div>
    	    </form>
    		</div>
    		</div>
    		</div>
		    </div>
		    
	    );
	}
    }

    export default Leaderboard;
