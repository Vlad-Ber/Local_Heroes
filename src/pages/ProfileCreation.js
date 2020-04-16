import React from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import TextButton from '../components/TextButton.js'
import NavBar from '../components/NavBar.js';
import ConfirmButton from '../components/ConfirmButton.js';

class ProfileCreation extends React.Component {
      state = {
        firstname: '',
        lastname: '',
        age: '',

        email: '',
        mobile: '',
    }

  saveInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  storeSession = e => {
    sessionStorage.setItem("stateProfileCreation", JSON.stringify(this.state));
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <NavBar />

        <form>
          <SectionTitle text="Profile Creation" />

          <SectionTitle text="Given Name" />
          <TextInput height="24px" name="firstname" value={this.firstname} saveInput={this.saveInput}/>

          <SectionTitle text="Surname" />
          <TextInput height="24px" name="lastname" value={this.lastname} saveInput={this.saveInput}/>

          <SectionTitle text="Age" />
          <TextInput height="24px" name="age" type="number" value={this.age} saveInput={this.saveInput}/>

          <SectionTitle text="Mobile number" />
          <TextInput height="24px" name="mobile" type="number" value={this.mobile} saveInput={this.saveInput}/>

          <SectionTitle text="E-mail address" />
          <TextInput height="24px" name="email" value={this.email} saveInput={this.saveInput}/>

          <ConfirmButton onClickFunc={this.storeSession}/>
        </form>
      </div>


    );
  }
}

export default ProfileCreation;
