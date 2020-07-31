import React, { Component } from "react";

import axios from "axios";
import { config } from "../config"

import BackButton from '../components/BackButton.js';
import TextButton from "../components/TextButton.js";
import LinkWrapper from "../components/LinkWrapper.js";


class Settings extends Component {

    constructor(props) {
    	super(props);

    	this.state = {
    	    user: this.props.activeUser,
    	};
    }

    deleteProfile = () => {
      axios
      .post(config.baseUrl + "/deleteUser", {
          username: this.state.user.username,
          areaID: this.state.user.areaID
        })
      .catch((error) => {
        console.log("You have no errands!", error);
      });
    };

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span className="login100-form-title">
                Settings
                <BackButton
                    text="Home"
                    link="/home"
                />
              </span>
            </form>

            <LinkWrapper to="/">
              <TextButton onClick={this.deleteProfile()} description="DELETE PROFILE" />
            </LinkWrapper>

            </div>
          </div>
        </div>
    );
  }
}

export default Settings;
