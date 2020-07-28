import React, { useState } from 'react';
import axios from 'axios';
import { config } from "../config"

import BackButton from '../components/BackButton.js';
import EventItem from '../components/EventItem.js';
import TextButton from '../components/TextButton.js';
import ServerResponse from '../components/ServerResponse.js';

const HelpNotice = (props) => {

    const [success, setSuccess] = useState(null);
    const { errand } = props.location.state;

    function handleHelpNotice() {
        console.log("handleHelpNotice");
        console.log("ErrandID: " + errand._id)
        axios.post(config.baseUrl + "/updateErrand", {
            errandID: errand._id,
            newErrandData: {
                status: "inProgress",
                helper: props.activeUser.username
            }
        }).then((response) => {
            console.log("Help notice submitted successfully!", response);
            console.log("response.data: " + JSON.stringify(response.data))
            setSuccess(true);
            props.history.push("/home")
        }).catch((error) => {
            console.log("Got error while handling help notice", error);
            setSuccess(false);
        });
    };

  function renderResponse(){
    return <ServerResponse
              success={success}
              successResponse="Thank you for helping out!"
              failResponse="Something went wrong, try again."
            />
  };

  return (
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span className="login100-form-title">
                <BackButton
                    text="Home"
                    link="/home"
                />
                    Errand Information
                </span>

                <div className="wrap-input100 validate-input m-b-16">
                  <EventItem
                      fullView={true}
                      errand={errand}
                      disableAction={true}
                   />
                </div>

                <TextButton
                  description="GIVE NOTICE"
                  onClick={handleHelpNotice}
                />
                {renderResponse()}

              </form>
            </div>
          </div>
        </div>
  );
}

export default HelpNotice;
