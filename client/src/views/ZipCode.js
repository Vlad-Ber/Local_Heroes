import React, { useState } from 'react';
import axios from 'axios';
import { config } from "../config"

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import TextButton from '../components/TextButton.js';
import ServerResponse from '../components/ServerResponse.js';

const ZipCode = (props) => {

  const [zipCode, setZipCode] = useState("");
  const [success, setSuccess] = useState(null);

  async function updateZipCode() {
    let zip = zipCode;
    if(zipCode.length == 5){
      zip = zip.slice(0, 3) + ' ' + zip.slice(3, 5);
    }

    await axios.post(config.baseUrl + "/updateUser", {
      user:   props.activeUser,
      userID: props.activeUser._id,
      newUserData: {
          areaID: zip,
      }
    }).then(async (response) => {
      console.log("Zip code updated successfully!", response)
      setSuccess(true);
      await updateUserContext();
      console.log("switching route from zipcode to home")
      props.history.push("/home");
    }).catch((error) => {
      console.log("Got error while updating zip code", error);
      setSuccess(false);
    });
  }


  function updateUserContext(){
    console.log("updateLoggedInUser");
    axios.post(config.baseUrl + "/getUser", {
        username: props.activeUser.username
    }).then((response) => {
        console.log("User updated successfully!", response)
        console.log("updateUserContext with: " + JSON.stringify(response.data));
        props.activeUser.onSetLoggedInUser(response.data);
    }).catch((error) => {
        console.log("Got error while updating logged in user", error);
    });
    console.log("finished updatingUserContext in ZipCode")
  }

  function renderResponse(){
    return <ServerResponse
              success={success}
              successResponse="Sucessfully updated zip code."
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
          text="Change Location (Zip Code)"
          paddingTop="30px"
          fontSize="16px"
        />
        <TextInput
          height="32px"
          value={zipCode}
          type="number"
          onChange={(e) => setZipCode(e.target.value)}
        />
        <TextButton
          description="Update zip code"
          onClick={updateZipCode}
        />
        {renderResponse()}

      </div>
  );
}

export default ZipCode;
