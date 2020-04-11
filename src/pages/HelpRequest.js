import React, { Component } from 'react'; 

import styled from 'styled-components';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import DropDownInput from '../components/DropDownInput.js';

class HelpRequest extends Component {

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
                <SectionTitle text="HELP REQUEST"/>

                <InputWrapper>
                    <DropDownInput options={options}/>
                </InputWrapper>

                <DescriptionInput>
                    <SectionTitle fontSize="14px" text="What do you need help with?"/>
                    <InputWrapper>
                        <TextInput height="20em"/>
                    </InputWrapper>
                </DescriptionInput>

            </div>
        );
    }
}

const DescriptionInput = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-around;
    padding: 20px;
`;

const InputWrapper = styled.div`
    padding: 30px;
`;

export default HelpRequest;