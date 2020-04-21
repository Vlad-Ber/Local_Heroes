import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import ArrowButton from '../components/ArrowButton.js';
import StyledForm from '../components/StyledForm.js';

class ResidenceInfo extends Component {

      constructor(props){
        super(props);

        this.state = {
          address: '',
          area: '',
          city: ''
        }
      }

      saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
      }

      storeSession = e => {
        window.sessionStorage.setItem("stateResidenceInfo", JSON.stringify(this.state));
        this.props.history.push("/insert-image");
      }

    render(){
      console.log(this.state)
        return (
          <div>
            <NavBar 
              leftButtonType="back"
              leftButtonLink="/profile-creation"
            />

            <SectionTitle text="Residence Info" />

            <StyledForm>
              <SectionTitle text="Address" fontSize="14px" />
              <TextInput
              height="24px"
              name="address"
              value={this.address}
              saveInput={this.saveInput}
              />

              <SectionTitle text="Area Code" fontSize="14px"/>
              <TextInput
              type="number"
              pattern="[0-9]"
              height="24px"
              name="area"
              value={this.area}
              saveInput={this.saveInput}
              />

              <SectionTitle text="City" fontSize="14px"/>
              <TextInput
              height="24px"
              name="city"
              value={this.city}
              saveInput={this.saveInput}
              />

              <ArrowButton onClick={this.storeSession}/>

            </StyledForm>
          </div>
        );
    }
}

export default ResidenceInfo;
