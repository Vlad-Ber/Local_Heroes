import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';
import Top10 from '../components/Top10.js';
import MyRanking from '../components/MyRanking.js';
import LinkWrapper from "../components/LinkWrapper.js";

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
		    <NavBar
		leftButtonType="back"
		leftButtonLink="/home"
		    />
		    <Top10
		activeUser= {this.state.activeUser}
		    />
		    <MyRanking
		activeUser= {this.state.activeUser}
		    />		<div className="limiter">
    		<div className="container-login100">
    		<div className="wrap-login100">
    		<form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
    		<span className="login100-form-title-localHeroes">
    		LocalHeroes
    	    </span>

    		<div className="wrap-input100 validate-input m-b-16">
    		<input
            className="input100"
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.saveInput}
                />
    		<span className="focus-input100"></span>
    		</div>

    		<div className="wrap-input100 validate-input">
    		<input className="input100"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.saveInput}
                />
    		<span className="focus-input100"></span>
    		</div>

    		<div className="text-right p-t-13 p-b-23">
    		<span className="txt1">
    		Forgot <span> </span>
    		</span>

    		<div className="txt2">
    		Username / Password?
    		</div>
    		</div>

    		<div className="container-login100-form-btn">
    		<button className="login100-form-btn" onClick={this.checkLogin}>
    		Sign in
    	    </button>
    		</div>

    		<div className="flex-col-c p-t-170 p-b-40">
    		<span className="txt1 p-b-9">
    		Don’t have an account?
    		</span>

                <LinkWrapper to="profile-creation">
      		<div className="txt3">
      		Sign up now
      	    </div>
                </LinkWrapper>
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
