import React, { Component } from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import TextButton from '../components/TextButton.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

class Signup extends Component {

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
        <TextInput height="24px" width="240px"/>

        <SectionTitle text="PASSWORD" />
        <TextInput type="password" height="24px" width="240px"/>

        <TextButton description="LOGIN" marginTop="40px" marginBottom="10px" width="240px"/>

        <Link to="profile-creation">
          <TextButton description="SIGN UP" marginTop="10px" marginBottom="10px" width="240px"/>
        </Link>

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
