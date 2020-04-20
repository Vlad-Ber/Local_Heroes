import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import TextButton from '../components/TextButton.js'
import NavBar from '../components/NavBar.js';
import ConfirmButton from '../components/ConfirmButton.js';

class ProfileCreation extends React.Component {
      state = {
        username: '',
        password: '',

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
    window.sessionStorage.setItem("stateProfileCreation", JSON.stringify(this.state));
  }

  checkForNewUsername = e => {
    
    axios.post("/check-username",{
      username: this.state.username,
    })
    .then((response) => {
        console.log(response);
    });
  }

  render(){
    return (
      <div>
        <NavBar />

        <form>
          <SectionTitle text="Profile Creation" />

          <SectionTitle text="Username" />
          <TextInput height="24px" name="username" value={this.username} saveInput={this.saveInput}/>

          <SectionTitle text="Password" />
          <TextInput type="password" height="24px" name="password" value={this.password} saveInput={this.saveInput}/>

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

          <Link to="residence-info">
            <ConfirmButton onClickFunc={this.storeSession} />
          </Link>
        </form>
      </div>


    );
  }
}


export default ProfileCreation;
