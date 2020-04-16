import React, { Component } from 'react'; 

import styled from 'styled-components';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import DropDownInput from '../components/DropDownInput.js';
import TextButton from '../components/TextButton.js';

class HelpRequest extends Component {

    handleHelpRequest = () => {
        console.log("handleHelpRequest")
    }

    render(){

        let options = [
            {
                text: "Carrying",
                value: "carrying", 
            }, 
            {
                text: "Shopping",
                value: "shopping"
            }, 
        ]

        return(
            <div>
                <NavBar/>

                <SectionTitle fontSize="14px" text="What do you need help with?"/>
                <InputWrapper>
                    <DropDownInput options={options}/>
                </InputWrapper>

                <SectionTitle fontSize="14px" text="Describe more in detail please"/>
                <InputWrapper>
                    <TextInput height="20em"/>
                </InputWrapper>

                <TextButton function={this.handleHelpRequest()} description="PUBLISH HELP REQUEST"/>

            </div>
        );
    }
}

const InputWrapper = styled.div`
    padding: 30px;
`;

export default HelpRequest;