import React, { Component } from 'react';
import axios from 'axios';
import { config } from "../config"

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import AutoCompleteInput from '../components/AutoCompleteInput.js';
import BackButton from '../components/BackButton.js';
import TextButton from '../components/TextButton.js';
import ServerResponse from '../components/ServerResponse.js';

class ZipCode extends Component {

  constructor(props){
      super(props);

      this.state = {
        area: "",
        success: null,
      }
  }

  setAdress = address => {
    this.setState({ address: address })

   // TODO: Fix className
    this.getAreaCode(address);
  }

  getAreaCode = async address => {
    let result = await geocodeByAddress(address);
    let latLng = await getLatLng(result[0]);

    this.getCityByCoordinates(latLng.lat, latLng.lng);
    console.log("--AREA CODE--");
    console.log(result[0]);
    console.log(this.state.area)
    console.log(this.state.city)

  };

  getCityByCoordinates = async (lat, lng) => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBQ0fbpDjxjDFLmagN0-pgyinM8rKTSPwg`
    await fetch(url)
    .then( response => response.json())
    .then( data => {

      let parts = data.results[0].address_components;

      parts.forEach( part => {
        if( part.types.includes("postal_code") ){
          this.setState({ area: part.long_name })

        }
      })
    })
  };


  updateZipCode = async () => {

    await axios.post(config.baseUrl + "/updateUser", {
      user:   this.props.activeUser,
      userID: this.props.activeUser._id,
      newUserData: {
          areaID: this.state.area,
      }
    }).then(async (response) => {
      console.log("Zip code updated successfully!", response)
      this.setState({ success: true })
      await this.updateUserContext();
      console.log("switching route from zipcode to home")
      this.props.history.push("/home");
    }).catch((error) => {
      console.log("Got error while updating zip code", error);
      this.setState({ success: false })
    });
  }


  updateUserContext = () => {
    console.log("updateLoggedInUser");
    axios.post(config.baseUrl + "/getUser", {
        username: this.props.activeUser.username
    }).then((response) => {
        console.log("User updated successfully!", response)
        console.log("updateUserContext with: " + JSON.stringify(response.data));
        this.props.activeUser.onSetLoggedInUser(response.data);
    }).catch((error) => {
        console.log("Got error while updating logged in user", error);
    });
    console.log("finished updatingUserContext in ZipCode")
  }

  renderResponse = () => {
    return <ServerResponse
              success={this.state.success}
              successResponse="Sucessfully updated zip code."
              failResponse="Something went wrong, try again."
            />
  };
render(){
  return (
        <div className="limiter">
      		<div className="container-login100">

            <div className="wrap-login100">

            	<form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span className="login100-form-title">
                  <BackButton
                      text="Back"
                      link="/home"
                  />
                  Change Area
      					</span>
      				</form>

              <div className="wrap-input100 validate-input m-b-16">
                <AutoCompleteInput
                value={this.state.address}
                onChange={this.setAdress}
                height="24px"
                />
              </div>

              <div className="wrap-input100 validate-input">
                <TextButton
                  description="Update zip code"
                  onClick={this.updateZipCode}
                />
              </div>
              {this.renderResponse()}

      			</div>
      		</div>
      </div>
  );
}
}

export default ZipCode;
