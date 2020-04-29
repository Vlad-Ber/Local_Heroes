import React, { Component } from 'react';

import data from '../data/data.json';

import NavBar from '../components/NavBar.js';
import EventItemListView from '../components/EventItemListView.js';
import SectionTitle from '../components/SectionTitle.js';
import StatusView from '../components/StatusView.js';
import TextButton from '../components/TextButton.js';
import LinkWrapper from '../components/LinkWrapper.js';

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            areaID: 75232,
            activeUsers: 0,
            activeErrands: 0,
        }
    }

    componentDidMount(){

        let updatedActiveUsers = data["users"].filter(user =>
            user.areaID === this.state.areaID).length;

        let updatedActiveErrands = data["errands"].filter(errand =>
            errand.areaID === this.state.areaID && errand.status !== "done").length;

        this.setState({ activeErrands: updatedActiveErrands, activeUsers: updatedActiveUsers })
    }

    render(){
        return(
            <div>
                <NavBar
                    rightButtonType="profile"
                    rightButtonLink="/profile-page"
                />
                <StatusView
                    areaID={this.state.areaID}
                    activeUsers={this.state.activeUsers}
                    activeErrands={this.state.activeErrands}
                />
                <LinkWrapper to="/help-request">
                    <TextButton description="ASK FOR HELP"/>
                </LinkWrapper>
                <SectionTitle text="RECENT ACTIVITY"/>
                <EventItemListView errands={data["errands"]}/>
            </div>
        );
    }
}
export default Home;
