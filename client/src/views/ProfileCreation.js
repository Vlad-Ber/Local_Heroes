import React, { Component } from 'react';

import styled from 'styled-components'
import axios from 'axios';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import NavBar from '../components/NavBar.js';
import ArrowButton from '../components/ArrowButton.js';
import StyledForm from '../components/StyledForm.js';
import AutoCompleteInput from '../components/AutoCompleteInput.js';

import { config } from "../config"

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
          virtuePoints: 0,
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
          email: this.state.email,
      })
          .then((response) => {
              let uniqueUser =  response.data.uniqueUser;
              let uniqueEmail = response.data.uniqueEmail;
              let validEmail = response.data.validEmail;
              let validNumber = response.data.validPhoneNumber;

              console.log("User: " + uniqueUser);
              console.log("uniqueEmail: " + uniqueEmail);
              console.log("validEmail: " + validEmail);

              let user = this.state;

              if(user.username.length == 0 || user.email.length == 0) {
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
   }

   /**** CODE FOR ADDRESS ****/

   setAdress = address => {
     this.setState({ address: address })

    // TODO: Fix class
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
        return (
            <div>
                <NavBar
                    leftButtonType="back"
                    leftButtonLink="/signup"
                />

                <StyledForm>
                    <SectionTitle text="Profile Creation" />

                    <SectionTitle id="username" fontSize="14px" text="Username" />
                    <TextInput height="24px" name="username"  onChange={this.saveInput} autocomplete="username"/>

                    <SectionTitle fontSize="14px" text="Password" />
                    <TextInput type="password" height="24px" name="password" value={this.password} onChange={this.saveInput} autocomplete="new-password"/>

                    <SectionTitle fontSize="14px" text="Full Name" />
                    <TextInput height="24px" name="name" value={this.name} onChange={this.saveInput}/>

                    <SectionTitle fontSize="14px" text="Age" />
                    <TextInput height="24px" name="age" type="number" value={this.age} onChange={this.saveInput}/>

                    <SectionTitle fontSize="14px" text="Mobile number" />
                    <TextInput height="24px" name="mobile" type="number" value={this.mobile} onChange={this.saveInput}/>

                    <SectionTitle fontSize="14px" text="E-mail address" />
                    <TextInput height="24px" name="email" value={this.email} onChange={this.saveInput}/>

                    <SectionTitle text="Address" fontSize="14px" />
                    <AutoCompleteInput
                    value={this.state.address}
                    onChange={this.setAdress}
                    height="24px"
                    />

                    <TextWrapper>{this.state.text}</TextWrapper>

                    <ArrowButton onClick={this.checkForUniqueUser} />

                </StyledForm>
            </div>
        );
    }
}


const TextWrapper = styled.div`
    border: #4CAF50;
    color: red;
    margin-top: 1em;
    font-size: 20px;
    border-radius: 100%;
`;


export default ProfileCreation;
