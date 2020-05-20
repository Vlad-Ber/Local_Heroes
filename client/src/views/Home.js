import React, { Component } from 'react';
import axios from 'axios';
import { config } from "../config"

import NavBar from '../components/NavBar.js';
import EventItemListView from '../components/EventItemListView.js';
import StatusView from '../components/StatusView.js';
import TextButton from '../components/TextButton.js';
import LinkWrapper from '../components/LinkWrapper.js';

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            areaID: this.props.activeUser.areaID,
            users: [],
            errands: [],
            fetchErrandsSuccess: null,
            fetchUsersSuccess: null,
        }

        this.fetchErrands = this.fetchErrands.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);

    }

    fetchErrands = () => {
        console.log("fetchErrands");
        axios.post(config.baseUrl + "/getErrandsArea", {
            areaID: this.state.areaID
        }).then((response) => {
            console.log("Errands fetched successfully!", response)
            //console.log("errands: " + JSON.stringify(response.data))
            this.setState({ fetchErrandsSuccess: true, errands: response.data["errands"] });
        }).catch((error) => {
            console.log("Got error while fetching errands", error);
            this.setState({ fetchErrandsSuccess: false });
        });
        this.fetchErrandsTimeout = setTimeout(this.fetchErrands, 2000);
    }   

    fetchUsers = () => {
        console.log("fetchUsers");
        axios.post("/getUsersArea", {
            areaID: this.state.areaID
        }).then((response) => {
            console.log("Users fetched successfully!", response)
            //console.log("users: " + JSON.stringify(response.data))   
            this.setState({ fetchUsersSuccess: true, users: response.data["users"] });
        }).catch((error) => {
            console.log("Got error while fetching users", error);
            this.setState({ fetchUsersSuccess: false });
        });
        this.fetchUsersTimeout = setTimeout(this.fetchUsers, 2000);
    }

    componentDidMount(){
        console.log("---------- HOME.JS DID MOUNT ----------------")
        this.fetchErrands();
        this.fetchUsers();
    }

    componentWillUnmount(){
        console.log("---------- HOME.JS WILL UNMOUNT ----------------")
        clearTimeout(this.fetchErrandsTimeout);
        clearTimeout(this.fetchUsersTimeout);
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
                    activeErrands={this.state.errands.filter(errand => errand.status !== "done").length}
                    areaID={this.state.areaID}
                />
                <LinkWrapper to="/help-request">
                    <TextButton description="ASK FOR HELP"/>
                </LinkWrapper>
                <EventItemListView 
                    errands={this.state.errands}
                    emptyStateMessage="No errands in this area"
                />
            </div>
        );
    }
}

export default Home;
