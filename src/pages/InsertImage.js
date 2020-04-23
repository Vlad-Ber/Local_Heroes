import React, { Component } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import ConfirmButton from '../components/ConfirmButton.js';
import TextInput from '../components/TextInput.js';

class InsertImage extends Component {

    constructor(props){
	     super(props);

	      this.state = {
           username: '',
           password: '',

           name: '',
	         age: '',

	         email: '',
	         mobile: '',

           description: '',

	         address: '',
	         area: '',
	         city: '',
	      }
    }

    componentDidMount(){

	       let prof = JSON.parse(sessionStorage.getItem("stateProfileCreation"));

         let updatedUsername = prof.username;
         let updatedPassword = prof.password;
	       let updatedName = prof.firstname + ' ' + prof.lastname;
	       let updatedAge = prof.age;
	       let updatedEmail = prof.email;
	       let updatedMobile = prof.mobile;

	       let stateRes = JSON.parse(sessionStorage.getItem("stateResidenceInfo"));

	       let updatedAddress = stateRes.address;
	       let updatedArea = stateRes.area;
	       let updatedCity = stateRes.city;

	       this.setState({
            username: updatedUsername,
            password: updatedPassword,

            name: updatedName,
	          age: updatedAge,
	          email: updatedEmail,
	          mobile: updatedMobile,

	          address: updatedAddress,
	          area: updatedArea,
	          city: updatedCity,

	       })
    }

    saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendProfiletoBackend = (userProfile, response) => {
        let user = this.state;

        axios.post("/insertUser", {
          username: user.username,
          password: user.password,
          email: user.email,
          name: user.name,
          age: user.age,
          address: user.address,
          description: user.description,
          virtuePoints: 0,
          areaId: user.area,
          mobile: user.mobile,
          city: user.city,
          image: ''
        })
        .then((response) => {
            console.log(response);
        });

        this.props.history.push("/signup");
    }


    render(){
      console.log(this.state)
        return(
		        <InsertImageWrapper>
              <NavBar
                leftButtonType="back"
                leftButtonLink="/residence-info"
              />
		          <SectionTitle text="Please insert a profile picture"/>

              <SectionTitle text="Short Description"/>
              <TextInput height="48px" name="description" value={this.description} onChange={this.saveInput}/>

              <ConfirmButton onClick={this.sendProfiletoBackend}/>
		        </InsertImageWrapper>
        );
    }
}

const InsertImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default InsertImage;
