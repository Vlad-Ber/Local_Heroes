import React, { Component } from 'react'

import styled from 'styled-components'

class MyRanking extends Component {
    constructor(props) {
	super(props)
	this.state = {
	    user: this.props.activeUser,
	}

    }

    render(){
	console.log(this.state.user);
        return (
		<MyRankingWrapper>
	    <TitleWrapper>
		<h1>My Ranking</h1>
		</TitleWrapper>
		<p> {this.state.user.username} </p>
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
