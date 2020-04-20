import React, { Component } from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'

class ZipCode extends Component {

  render(){
    return (
      <div>
        <SectionTitle
          text="Change Location (Zip Code)"
          fontSize="16px"
          height=""
        />
        <TextInput />
      </div>
    );
  }
}

export default ZipCode;
