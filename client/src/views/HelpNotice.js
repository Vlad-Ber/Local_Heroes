import React, { useState } from 'react';
import axios from 'axios';
import config from "../config"

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
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
      <div>
        <NavBar 
          leftButtonType="back"
          leftButtonLink="/home"
        /> 
        <SectionTitle
          text="ERRAND INFORMATION" 
          paddingTop="30px"
          fontSize="16px"
        />
        <EventItem
            fullView={true}
            errand={errand}
            disableAction={true}
         />
        <TextButton
          description="GIVE NOTICE"
          onClick={handleHelpNotice}
        />
        {renderResponse()}
        
      </div>
  );
}

export default HelpNotice;
