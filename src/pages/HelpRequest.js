import React, { Component } from 'react'; 
import axios from 'axios';
import styled from 'styled-components';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import DropDownInput from '../components/DropDownInput.js';
import TextButton from '../components/TextButton.js';
import ServerResponse from '../components/ServerResponse.js';

class HelpRequest extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: "",
            description: "",
            requester: this.props.activeUser.username,
            type: "DEFAULT",
            adress: "",
            contact: "",
            areaID: this.props.activeUser.areaID,
            success: null
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleAdressChange = this.handleAdressChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
    }


    /*   EVENT HANDLERS   */


    handleTitleChange = (e) => {
        console.log("handleTitleChange")
        this.setState({ title: e.target.value })
    }

    handleTypeChange = (e) => {
        console.log("handleTypeChange: " + e.target.value)
        this.setState({ type: e.target.value })
    }
    
    handleDescriptionChange = (e) => {
        console.log("handleDescriptionChange")
        this.setState({ description: e.target.value })
    }

    handleAdressChange = (e) => {
        console.log("handleAdressChange")
        this.setState({ adress: e.target.value })
    }

    handleContactChange = (e) => {
        console.log("handleContactChange")
        this.setState({ contact: e.target.value })
    }
    
    // server side signature:  async function insertErrand(errandData)
    handlePublish = () => {
        console.log("handlePublish");
        axios.post("/insertErrand", {
            title: this.state.title,
            description: this.state.description,
            requester: this.state.requester, 
            type: this.state.type,
            adress: this.state.adress, 
            contact: this.state.adress,
            areaID: this.state.areaID
        }).then((response) => {
            console.log("Data submitted successfully!", response)
            this.setState({ success: true });
            this.props.history.push("/home")
        }).catch((error) => {
            console.log("Got error while posting data", error);
            this.setState({ success: false });
        });
    }

    renderResponse = () => (
        <ServerResponse 
            success={this.state.success} 
            successResponse="Your help request was published." 
            failResponse="Something went wrong, try again."
        />
    );

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
                <SectionTitle fontSize="14px" text="Name your help request"/>
                <InputWrapper>
                    <TextInput 
                        type="text"
                        height="3em" 
                        onChange={this.handleTitleChange}
                        value={this.state.title}
                    />
                </InputWrapper>

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
                        type="text"
                        height="8em" 
                        onChange={this.handleDescriptionChange}
                        value={this.state.description}
                    />
                </InputWrapper>

                <SectionTitle fontSize="14px" text="What is the adress of the errand?"/>
                <InputWrapper>
                    <TextInput 
                        type="text"
                        height="3em" 
                        onChange={this.handleAdressChange}
                        value={this.state.adress}
                    />
                </InputWrapper>

                <SectionTitle fontSize="14px" text="Contact details"/>
                <InputWrapper>
                    <TextInput 
                        type="text"
                        height="3em" 
                        onChange={this.handleContactChange}
                        value={this.state.contact}
                    />
                </InputWrapper>

                <TextButton onClick={this.handlePublish} description="PUBLISH HELP REQUEST"/>
                {this.renderResponse()}

            </div>
        );
    }
}

const InputWrapper = styled.div`
    padding: 5px;
`;

export default HelpRequest;