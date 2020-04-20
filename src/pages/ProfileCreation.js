import React from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import NavBar from '../components/NavBar.js';
import ConfirmButton from '../components/ConfirmButton.js';

class ProfileCreation extends React.Component {

  render(){
    return (
      <div>
        <NavBar />

        <SectionTitle text="Profile Creation" />

        <SectionTitle text="Given Name" titleType="variant"/>
        <TextInput />

        <SectionTitle text="Surname" titleType="variant"/>
        <TextInput />

        <SectionTitle text="Age" titleType="variant"/>
        <TextInput type="number" />

        <SectionTitle text="Gender" titleType="variant"/>
        <TextInput type="dropdown"/>

        <SectionTitle text="Mobile number" titleType="variant"/>
        <TextInput type="number" />

        <SectionTitle text= "E-mail address" titleType="variant"/>
        <TextInput />

        <ConfirmButton />
      </div>


    );
  }
}

export default ProfileCreation;
