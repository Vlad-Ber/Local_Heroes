import React, { Component } from 'react';

import styled from 'styled-components'
import axios from 'axios';
import { config } from "../config"

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import NavBar from '../components/NavBar.js';
import ArrowButton from '../components/ArrowButton.js';
import StyledForm from '../components/StyledForm.js';

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

            text: '',
        }
    }

    saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

  storeUser = e => {
    e.preventDefault();
    window.sessionStorage.setItem("stateProfileCreation", JSON.stringify(this.state));
    this.props.history.push("/residence-info");
  }

  checkForUniqueUser = e => {
      axios.post(config.baseUrl + "/check-user", {
          username: this.state.username,
          email: this.state.email,
      })
          .then((response) => {
              let uniqueUser =  response.data.uniqueUser;
              let uniqueEmail = response.data.uniqueEmail;

              if(uniqueUser && uniqueEmail) {
                this.setState({text: 'Username and Email already taken'});

              } else if(uniqueUser){
                this.setState({text: 'Username already taken'});

              } else if(uniqueEmail){
                this.setState({text: 'Email already taken'});

              } else {
                this.storeUser(e);
              }
          })
   }

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
