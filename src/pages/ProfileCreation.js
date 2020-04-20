import React, { Component } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import NavBar from '../components/NavBar.js';
import ConfirmButton from '../components/ConfirmButton.js';

class ProfileCreation extends Component {

    constructor(props){
        super(props); 
        
        this.state = {
            username: '',
            password: '',
        
            firstname: '',
            lastname: '',
            age: '',
        
            email: '',
            mobile: '',
        }
    }

    saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    storeSession = e => {
        this.checkForNewUsername();
        window.sessionStorage.setItem("stateProfileCreation", JSON.stringify(this.state));
    }

    checkForNewUsername = e => {
        console.log("inside checkForNewUsername");
        axios.post("check-user",{
            username: this.state.username,
            email: this.state.email,
        })
            .then((response) => {
                
                console.log("Inside response");
                console.log(response);
                
            })
            .catch((error) => {
                console.log(error.response);
                while(true){
                    
                }
            });
    }

    render(){
        return (
            <div>
                <NavBar />
    
                <StyledForm>
                    <SectionTitle text="Profile Creation" />

                    <SectionTitle fontSize="14px" text="Username" />
                    <TextInput height="24px" name="username" value={this.username} saveInput={this.saveInput} autocomplete="username"/>

                    <SectionTitle fontSize="14px" text="Password" />
                    <TextInput type="password" height="24px" name="password" value={this.password} saveInput={this.saveInput} autocomplete="new-password"/>

                    <SectionTitle fontSize="14px" text="Given Name" />
                    <TextInput height="24px" name="firstname" value={this.firstname} saveInput={this.saveInput}/>

                    <SectionTitle fontSize="14px" text="Surname" />
                    <TextInput height="24px" name="lastname" value={this.lastname} saveInput={this.saveInput}/>

                    <SectionTitle fontSize="14px" text="Age" />
                    <TextInput height="24px" name="age" type="number" value={this.age} saveInput={this.saveInput}/>

                    <SectionTitle fontSize="14px" text="Mobile number" />
                    <TextInput height="24px" name="mobile" type="number" value={this.mobile} saveInput={this.saveInput}/>

                    <SectionTitle fontSize="14px" text="E-mail address" />
                    <TextInput height="24px" name="email" value={this.email} saveInput={this.saveInput}/>

                    <ButtonWrapper>
                        <ConfirmButton onClick={this.storeSession} />
                    </ButtonWrapper>

                </StyledForm>
            </div>
        );
    }
}

const StyledForm = styled.form`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
`;

const ButtonWrapper = styled.div`
    padding: 40px;
`; 


export default ProfileCreation;
