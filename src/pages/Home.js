import React, { Component } from 'react';
import axios from 'axios';

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
            areaID: 0,//this.props.activeUser.areaID,
            users: [],
            errands: [],
            fetchErrandsSuccess: null,
            fetchUsersSuccess: null
        }

        this.fetchErrands = this.fetchErrands.bind(this);

    }

    fetchErrands = () => {
        axios.post("/getErrandsArea", {
            areaID: this.state.areaID
        }).then((response) => {
            console.log("Errands fetched successfully!", response)
            console.log("data: " + JSON.stringify(response.data))
            this.setState({ fetchErrandsSuccess: true, errands: response.data["errands"] });
        }).catch((error) => {
            console.log("Got error while fetching errands", error);
            this.setState({ fetchErrandsSuccess: false });
        });
    }

    fetchUsers = () => {
        axios.post("/getUsersArea", {
            areaID: this.state.areaID
        }).then((response) => {
            console.log("Users fetched successfully!", response)
            console.log("data: " + JSON.stringify(response.data))
            this.setState({ fetchUsersSuccess: true, users: response.data["users"] });
        }).catch((error) => {
            console.log("Got error while fetching users", error);
            this.setState({ fetchUsersSuccess: false });
        });
    }

    componentDidMount(){
        this.fetchErrands();
        this.fetchUsers();
    }

    render(){
        return(
            <div>
                <NavBar
                    rightButtonType="profile"
                    rightButtonLink="/profile-page"
                />
                <StatusView
                    activeUsers={this.state.users.length}
                    activeErrands={this.state.errands.length}
                />
                <LinkWrapper to="/help-request">
                    <TextButton description="ASK FOR HELP"/>
                </LinkWrapper>
                <SectionTitle text="RECENT ACTIVITY"/>
                <EventItemListView errands={this.state.errands}/>
            </div>
        );
    }
}

export default Home;
