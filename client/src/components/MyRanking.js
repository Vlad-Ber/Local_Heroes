import React, { Component } from 'react'

import styled from 'styled-components'
import axios from 'axios';

import SectionTitle from './SectionTitle.js';

class MyRanking extends Component {
    constructor(props) {
    	super(props)
    	this.state = {
    	    user: this.props.activeUser,
            myRank: null,
    	}
    }


    getMyRanking = () => {

    	axios.post("/getMyRanking", {
    	    user: this.state.user,

    	}).then((response) => {
          const myRanking = response.data.myRank;
          if(myRanking === -1){
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


    renderTableData() {
        const {username, virtuePoints } = this.state.user //destructuring
        return (
  		    <tr>
    		    <td>{this.state.myRank + "."}</td>
    		    <td>{username}</td>
    		    <td>{virtuePoints}</td>
  		    </tr>
        )
    }

    render(){
        return (
      		<MyRankingWrapper>
      	    <TitleWrapper>
      		    <h1 id="myRankingTitle"></h1>
      		  </TitleWrapper>
            <SectionTitle text="My Ranking"/>
        		<table id='myranking'>
          		<thead>
            		<tr>
              		<td>#</td>
              		<td>Username</td>
              		<td>VirtuePoints</td>
            		</tr>
          		</thead>
          		<tbody>
                {this.renderTableData()}
              </tbody>
            </table>
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

    text-align: center;
`


const TitleWrapper = styled.div`
    font-weight: 700;
    font-size: 12px;
    padding: 4px;
`

export default MyRanking;
