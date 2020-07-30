import React, { Component } from 'react';

import styled from 'styled-components'
import axios from 'axios';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import TextInput from '../components/TextInput.js'
import ArrowButton from '../components/ArrowButton.js';
import BackButton from '../components/BackButton.js';
import AutoCompleteInput from '../components/AutoCompleteInput.js';

import { config } from "../config"

import "../css/util.css";
import "../css/main.css";


class ProfileCreation extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',

            name: '',
            age: '',

            email: '',
            mobile: '',

            address: '',
            area: '',
            city: '',

            text: '',
        }
    }

    saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendProfiletoBackend = (userProfile, response) => {
      let user = this.state;

      axios
        .post(config.baseUrl + "/insertUser", {
          username: user.username,
          password: user.password,
          email: user.email,
          name: user.name,
          age: user.age,
          address: user.address,
          description: user.description,
          virtuePoints: '0',
          areaId: user.area,
          mobile: user.mobile,
          city: user.city,
          image: "",
        })
        .then((response) => {
          console.log(response);
        });

    };

  storeUser = e => {
    let user = this.state;
    let result = delete user['text'];

    this.sendProfiletoBackend();

    e.preventDefault();
    window.sessionStorage.setItem("stateProfileCreation", JSON.stringify(result));
    this.props.history.push("/signup");
  }

  checkForUniqueUser = e => {
      axios.post(config.baseUrl + "/check-user", {
          username: this.state.username,
          email: this.state.email,
          mobile: this.state.mobile,
      })
          .then((response) => {
	      console.log(response.data);
              let uniqueUser =  response.data.uniqueUser;
              let uniqueEmail = response.data.uniqueEmail;
              let validEmail = response.data.validEmail;
              let validNumber = response.data.validPhoneNumber;

              console.log("User: " + uniqueUser);
              console.log("uniqueEmail: " + uniqueEmail);
              console.log("validEmail: " + validEmail);

              let user = this.state;

              if(user.username.length === 0 || user.email.length === 0) {
                this.setState({text: 'Please answer every field!'});

              } else if(!validEmail) {
                this.setState({text: 'Please enter a valid e-mail!'});

              } else if(!validNumber) {
                this.setState({text: 'Please enter valid Phone-number!'});

              } else if(!uniqueUser && !uniqueEmail) {
                this.setState({text: 'Username and Email already taken'});

              } else if(!uniqueUser){
                this.setState({text: 'Username already taken'});

              } else if(!uniqueEmail){
                this.setState({text: 'Email already taken'});

              } else {
                // Function storeUser sends user to next page
                this.storeUser(e);
              }
	  })
	  .catch((error) => {
	      console.log(error);
	  });
   }

   /**** CODE FOR ADDRESS ****/

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

         } else if( part.types.includes("postal_town") ) {
           this.setState({ city: part.long_name })
         }
       })
     })
   };


    render(){
      console.log(this.state.description);
        return (
            <div>
                	<div className="limiter">
                		<div className="container-login100">
                			<div className="wrap-login100">
                				<form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                					<span className="login100-form-title">
                          <BackButton
                              text="Back"
                              link="/signup"
                          />
                					    Profile Creation
                					</span>

                					<div className="wrap-input100 validate-input m-b-16">
                            <TextInput
                            inputType="pf" placeholder="Username"
                            name="username" onChange={this.saveInput}
                            autocomplete="username" height="24px"
                            />
                					</div>

                					<div className="wrap-input100 validate-input m-b-16">
                            <TextInput
                            inputType="pf" placeholder="Password"
                            type="password" height="24px"
                            name="password" value={this.password}
                            onChange={this.saveInput} autocomplete="new-password"
                            />
                					</div>

                					<div className="wrap-input100 validate-input m-b-16">
                            <TextInput
                            inputType="pf" placeholder="Full Name"
                            height="24px" name="name"
                            value={this.name} onChange={this.saveInput}
                            />
                					</div>

                					<div className="wrap-input100 validate-input m-b-16">
                            <TextInput
                            inputType="pf" placeholder="Age"
                            height="24px" name="age"
                            type="number" value={this.age}
                            onChange={this.saveInput}
                            />
                					</div>

                					<div className="wrap-input100 validate-input m-b-16">
                            <TextInput
                            inputType="pf" placeholder="Phone-number"
                            height="24px" name="mobile"
                            type="number" value={this.mobile}
                            onChange={this.saveInput}
                            />
                					</div>

                					<div className="wrap-input100 validate-input m-b-16">
                            <TextInput
                            inputType="pf" placeholder="E-mail"
                            height="24px" name="email"
                            value={this.email} onChange={this.saveInput}
                            />
                					</div>

                					<div className="wrap-input100 validate-input m-b-16">
                            <TextInput
                            inputType="descriptionPf" placeholder="Description"
                            name="description" height="100px"
                            value={this.description} onChange={this.saveInput}
                            />
                					</div>

                					<div className="wrap-input100 validate-input m-b-16">
                            <AutoCompleteInput
                            value={this.state.address}
                            onChange={this.setAdress}
                            height="24px"
                            />
                					</div>

                          <StyledErrorText>{this.state.text}</StyledErrorText>

                          <ArrowButton onClick={this.checkForUniqueUser} />

                				</form>
                			</div>
                		</div>
                	</div>

            </div>
        );
    }
}

const StyledErrorText = styled.div`
    text-align: center;

    padding-top: 10px;
    font-family: Ubuntu-Regular;
`

export default ProfileCreation;
