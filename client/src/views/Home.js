import React, { Component } from 'react';
import axios from 'axios';
import { config } from "../config"

import NavBar from '../components/NavBar.js';
import EventItemListView from '../components/EventItemListView.js';
import TextButton from '../components/TextButton.js';
import LinkWrapper from '../components/LinkWrapper.js';
import StatusView from '../components/StatusView.js';
import ProfileAndAreaView from '../components/ProfileAndAreaView.js'

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
        axios.post(config.baseUrl + "/getUsersArea", {
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
                <div className="limiter">
                  <div className="container-login100">
                    <div className="wrap-login100">
                      <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                        <span className="login100-form-title-home">
                          <ProfileAndAreaView areaID={this.state.areaID}/>
                          Home
                        </span>
                      </form>

                      <div>
                        <StatusView
                            activeUsers={this.state.users.length}
                            activeErrands={this.state.errands.filter(errand => errand.status !== "done").length}
                            areaID={this.state.areaID}
                        />
                      </div>

                      <div className="container-login100-form-btn">
                        <LinkWrapper to="/help-request">
                            <TextButton description="ASK FOR HELP"/>
                        </LinkWrapper>
                      </div>

                      <div className="wrap-input100 validate-input m-b-16">
                        <LinkWrapper to="/leader-board">
                            <TextButton marginTop="15px" description="LEADERBOARD"/>
                        </LinkWrapper>
                      </div>

                      <div className="wrap-input100 validate-input m-b-16">
                      <EventItemListView
                          errands={this.state.errands}
                          emptyStateMessage="No errands in this area"
                      />
                      </div>

                    </div>
                  </div>
                </div>

            </div>
        );
    }
}

export default Home;
