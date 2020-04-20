import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import TextButton from '../components/TextButton.js'

class Signup extends Component {

  render(){
    return (
      <div>
        <SectionTitle text="USERNAME" />
        <TextInput height="24px"/>

        <SectionTitle text="PASSWORD" />
        <TextInput height="24px" type="password"/>

        <TextButton description="LOGIN"/>

        <Link to="profile-creation">
          <TextButton description="SIGN UP"/>
        </Link>
      </div>
    );
  }
}

export default Signup;
