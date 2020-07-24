import React, { Component } from 'react'

import styled from 'styled-components'
import axios from 'axios';

class Top10 extends Component {
    constructor(props) {
	super(props)
	this.state = {
	    user: this.props.activeUser,
	    top10array: [],

	};
    }

    getTop10Info = async () => {
    	await axios.post("/getTop10", {
    	    areaID: this.state.user.areaID,
    	}).then((response) => {
    	    this.setState({	top10array: response.data.top10 });
    	}).catch((error) => {
    	    console.log("EventItem, uptadeVirtuepoints: Got error while updating Virtue Points ", error);
    	});
	this.getTop10InfoTimeout = setTimeout(this.getTop10Info, 2000);
    };

    componentWillMount() {
	console.log("Top10array in Willmount:");
	console.log(this.top10array);
	if (this.top10array === undefined){
    	    this.getTop10Info();
	}
    }
    compomnentWillUnmount(){
	clearTimeout(this.fetchErrandsTimeout);
    }

    renderTableData() {
    	return this.state.top10array.map((user, index) => {
                const {username, virtuePoints } = user //destructuring
                return (
    		    <tr key={index+1}>
    		    <td>{index+1}</td>
    		    <td>{username}</td>
    		    <td>{virtuePoints}</td>
    		    </tr>
      )
    	})
    }

    render(){
        return (
      		<LeaderboardWrapper>
      	    <TitleWrapper>
      		    <h1>Leaderboard</h1>
      		  </TitleWrapper>
      	  	<table id='users'>
      		    <tbody>
                  {this.renderTableData()}
              </tbody>
      		 </table>
    	    </LeaderboardWrapper>
        );
    }
}

const LeaderboardWrapper = styled.div`
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

export default Top10;
