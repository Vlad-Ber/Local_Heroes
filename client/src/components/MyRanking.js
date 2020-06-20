import React, { Component } from 'react'

import styled from 'styled-components'
import axios from 'axios';

class MyRanking extends Component {
    constructor(props) {
    	super(props)
    	this.state = {
    	    user: this.props.activeUser,
          myRank: null
    	}
    }


    getMyRanking = () => {
    	console.log("getMyRanking");
    	axios.post("/getMyRanking", {
    	    user: this.state.user,

    	}).then((response) => {
          const myRanking = response.data.myRank;
          if(myRanking == -1){
            this.setState({	myRank:  "error while retrieving rank"});

          } else {
            this.setState({	myRank:  myRanking});
          }

    	}).catch((error) => {
    	    console.log("MyRanking, getMyRanking: Got error while receiving Ranking ", error);
    	});
    };

    componentDidMount() {
    	   this.getMyRanking();
    }

    render(){
	     console.log(this.state.user);
        return (
      		<MyRankingWrapper>
      	    <TitleWrapper>
      		<h1>My Ranking</h1>
      		</TitleWrapper>
      		<p> {this.state.user.username} </p>
      		<p> {this.state.myRank} </p>
      		</MyRankingWrapper>
        )
    }
}

const MyRankingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
    margin: 6px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
`


const TitleWrapper = styled.div`
    font-weight: 700;
    font-size: 12px;
    padding: 4px;
`

export default MyRanking;
