import React from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import TextButton from '../components/TextButton.js'

class ProfileCreation extends React.Component {

  render(){
    return (
      <div>
        <SectionTitle text = "Profile Creation" />
        <SectionTitle text = "Given Name" />
        <SectionTitle text = "Surname" />
        <SectionTitle text = "Age" />
        <SectionTitle text = "Gender" />
        <SectionTitle text = "Mobile number" />
        <SectionTitle text = "E-mail address" />
      </div>


    );
  }
}

export default ProfileCreation;
