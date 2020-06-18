import React, { Component } from 'react'

import styled from 'styled-components'
import axios from 'axios';
import { config } from "../config"

class Top10 extends Component {
    _isMounted = false;
    constructor(props) {
	super(props)
	this.state = {
	    user: this.props.activeUser,
            /*heroes: [
		{ id: 1, name: 'Stefan', VP: 98},
		{ id: 2, name: 'Ali', VP: 20},
		{ id: 3, name: 'Olle', VP: 15},
		{ id: 4, name: 'Stina', VP: 15},
		{ id: 5, name: 'Mikaela', VP: 14},
		{ id: 6, name: 'Göran', VP: 5},
		{ id: 7, name: 'Åke', VP: 5},
		{ id: 8, name: 'Sven', VP: 3},
		{ id: 9, name: 'Rigmor', VP: 2},
		{ id: 10, name: 'Åsa', VP: 2},
            ],*/
	    top10array: [],
	  
	};
    }

    getTop10Info = () => {
	console.log("getTop10Request");
	axios.post(config.baseUrl + "/getTop10", {
	    areaID: this.state.user.areaID,
	}).then((response) => {
	    this.setState({
		top10array: response.data.top10,
	    });
	}).catch((error) => {
	    console.log("EventItem, uptadeVirtuepoints: Got error while updating Virtue Points ", error);
	});
    };

    componentDidMount() {
	this._isMounted = true;
	if(this._isMounted) {
	    
	    console.log("getTop10Request");
	    axios.post(config.baseUrl + "/getTop10", {
		areaID: this.state.user.areaID,
	    }).then((response) => {
		this.setState({
		    top10array: response.data.top10,
		});
	    }).catch((error) => {
		console.log("EventItem, uptadeVirtuepoints: Got error while updating Virtue Points ", error);
	    });
	}
    }
    componentWillUnmount () {
	this._isMounted = false;
    }

    renderTableData() {
	console.log("----Printing top10array:-----");
	console.log(this.state.top10array);
	return this.state.top10array.map((user, index) => {
            const {username, virtuePoints } = user //destructuring
            return (
		    <tr key={index}>
		    <td>{index}</td>
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
