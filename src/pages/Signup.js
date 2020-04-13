import React from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import TextButton from '../components/TextButton.js'

class Signup extends React.Component {

  render(){
    return (
      <div>
        <SectionTitle text = "USERNAME" />
        <TextInput />

        <SectionTitle text = "PASSWORD" />
        <TextInput type = "password"/>

        <TextButton description = "LOGIN"/>
        <TextButton description = "SIGN UP"/>
      </div>


    );
  }
}

export default Signup;
