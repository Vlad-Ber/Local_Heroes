import React, { Component } from 'react'

import styled from 'styled-components'

class Top10 extends Component {
    constructor(props) {
	super(props)
	this.state = {
            heroes: [
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
            ]
	}
    }
    
    renderTableData() {
      return this.state.heroes.map((user, index) => {
         const { id, name, VP } = user //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{VP}</td>
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
