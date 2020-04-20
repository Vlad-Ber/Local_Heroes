import React, { Component } from 'react'; 

import styled from 'styled-components';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import DropDownInput from '../components/DropDownInput.js';
import TextButton from '../components/TextButton.js';

class HelpRequest extends Component {

    constructor(props){
        super(props);

        this.state = {
            type: "DEFAULT",
            description: "", 
        }

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        
    }

    handleTypeChange = (e) => {
        console.log("handleTypeChange: " + e.target.value)
        this.setState({ type: e.target.value })
    }

    handleDescriptionChange = (e) => {
        console.log("handleDescriptionChange")
        this.setState({ description: e.target.value })
    }

    handlePublish = () => {
        console.log("handlePublish")
        //write http request to server here
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
                <NavBar
                    leftButtonType="back"
                    leftButtonLink="/home"
                />

                <SectionTitle fontSize="14px" text="What do you need help with?"/>
                <InputWrapper>
                    <DropDownInput 
                        options={options}
                        onChange={this.handleTypeChange}
                        value={this.state.type}
                    />
                </InputWrapper>

                <SectionTitle fontSize="14px" text="Describe more in detail please"/>
                <InputWrapper>
                    <TextInput 
                        height="20em" 
                        onChange={this.handleDescriptionChange}
                        value={this.state.description}
                    />
                </InputWrapper>

                <TextButton onClick={this.handlePublish} description="PUBLISH HELP REQUEST"/>

            </div>
        );
    }
}

const InputWrapper = styled.div`
    padding: 30px;
`;

export default HelpRequest;