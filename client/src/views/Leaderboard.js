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

        		    <div className="wrap-input100 validate-input">
          		    <Top10 activeUser={this.state.activeUser}/>
              		<MyRanking activeUser= {this.state.activeUser}/>
        		    </div>

        	    </form>
        		</div>
        	</div>
        </div>
    	 );
    	}
}

    export default Leaderboard;
