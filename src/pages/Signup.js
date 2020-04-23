import React, { Component } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import TextButton from '../components/TextButton.js';
import LinkWrapper from '../components/LinkWrapper.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

class Signup extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    checkForUniqueUser = e => {
        axios.post("/login-user", {
            username: this.state.username,
            email: this.state.email,
        })
            .then((response) => {
                let uniqueUser =  response.data.uniqueUser;

                if(!uniqueUser) {
                  e.preventDefault();
                  this.props.history.push("/home");
                } else {
                  console.log("Wrong user")
                //  document.getElementById("error") = "Username or Email already taken"
                }
            })
     }

  render(){
    return (
      <SignUpWrapper>

        <WelcomeMessage>
          <FontAwesomeIcon
            icon={faSeedling}
            style={{
              fontSize: "72px",
              color: "#31D285"
            }}
          />
          <p>
            Welcome to LocalHero!
          </p>
        </WelcomeMessage>


        <SectionTitle text="USERNAME" />
        <TextInput name="username" height="32px" width="240px"/>

        <SectionTitle text="PASSWORD" />
        <TextInput name="password" type="password" height="32px" width="240px"/>

        <TextButton onClick={this.checkForUniqueUser} description="LOGIN" marginTop="40px" marginBottom="10px" height="32px" width="240px"/>

        <LinkWrapper to="profile-creation">
          <TextButton description="SIGN UP" marginTop="10px" marginBottom="10px" height="32px" width="240px"/>
        </LinkWrapper>

      </SignUpWrapper>
    );
  }
}

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 10px;
`;

export default Signup;
