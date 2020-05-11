import React, { Component } from 'react';
import axios from "axios"
import styled from 'styled-components'

import { UserConsumer } from "./UserContext.js"
import TextButton from './TextButton.js'
import LinkWrapper from './LinkWrapper.js';
import ServerResponse from '../components/ServerResponse.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faShoppingCart, faInfo } from '@fortawesome/free-solid-svg-icons'


class EventItem extends Component {

    constructor(props){
        super(props); 

        this.state = {
            fullView: false,
            errand: {}, 
            success: null
        }

    };

    toggleView = () => {
        this.setState({ fullView: !this.state.fullView});
    };

    handleMarkAsDone = () => {
        console.log("handleMarkAsDone");
        axios.post("/updateErrand", {
            errandID: this.state.errand._id,
            newErrandData: {
                status: "done",
                helper: "unknown"
            }
        }).then((response) => {
            console.log("Errand marked as done successfully!", response);
        }).catch((error) => {
            console.log("EventItem, handleMarkAsDone: Got error while handling updating errand", error);
        });
    };

    renderResponse = () => (
        <ServerResponse 
            success={this.state.success} 
            successResponse="Thank you for helping out!" 
            failResponse="Something went wrong, try again."
        />
    );

    renderTypeIcon = () => {

        let type = this.state.errand.type;
        let typeIconStyle = {
            display: 'flex', 
            justifyContent: 'center',
            padding: '4px',
            fontSize: '18px',
            color: '#31D285'
        }

        switch(type){
            case "carrying": 
            return <FontAwesomeIcon icon={faPeopleCarry} style={typeIconStyle}/>

            case "shopping": 
            return <FontAwesomeIcon icon={faShoppingCart} style={typeIconStyle}/>

            default: 
            return <FontAwesomeIcon icon={faInfo} style={typeIconStyle}/>
        }

    };

    renderStatusMarker = () => {

        switch(this.state.errand.status){
            case "waiting": 
            return <div style={{ color: 'red' }}>WAITING FOR HELP</div>

            case "inProgress": 
            return <div style={{ color: '#31D285' }}>HELP UNDER WAY!</div>

            case "done": 
            return <div>DONE</div>

            default: 
            return <div>STATUS UNKOWN</div>
        }

    }

    renderActionButton = (username) => {
        if (this.props.disableAction){
            return null
        } else if (this.state.errand.requester === username){
            return (
                <div>
                    <TextButton onClick={this.handleMarkAsDone} description="MARK AS DONE"/>
                    <TextButton description="DELETE ERRAND"/>
                </div>
            );
        } else if (this.state.errand.status === "waiting"){
            return (
                <LinkWrapper to={{
                    pathname: '/help-notice',
                    state: {
                        errand: this.state.errand
                    }
                }}>
                <TextButton description="I WANT TO HELP"/> 
                </LinkWrapper>
            );
        } else {
            return null;
        }
    }

    renderExpandedView = () => {
        return this.state.fullView ? 

        <ExpandedView>

            <InfoWrapper onClick={this.toggleView}>
                
                <InfoTitle>
                    Requested by
                </InfoTitle>
                <Description>
                    {this.state.errand.requester}
                </Description>

                <InfoTitle>
                    Adress
                </InfoTitle>
                <Description>
                    {this.state.errand.adress}
                </Description>

                <InfoTitle>
                    Contact
                </InfoTitle>
                <Description>
                    {this.state.errand.contact}
                </Description>

            </InfoWrapper>

            <UserConsumer>
                {(user) => this.renderActionButton(user.username)}
            </UserConsumer>
            {this.renderResponse()}

        </ExpandedView> 
        
        : null
    }

    componentDidMount(){
        this.setState({ fullView: this.props.fullView, errand: this.props.errand });
    };

    componentWillReceiveProps(nextProps) {
        console.log("--------- EVENT ITEM WILL RECEIVE PROPS ----------- ")
        this.setState({ errand: nextProps.errand });  
    }

    render(){

        return(

            <EventItemWrapper>

                <DefaultView onClick={this.toggleView}>

                    <EventMetaData>
                        {this.renderTypeIcon()}
                        <TimeStamp>{this.state.errand.createdAt}</TimeStamp>
                    </EventMetaData>

                    <TextWrapper>
                        <Title>
                            {this.state.errand.title}
                        </Title>

                        <Description>
                            {this.state.errand.description}
                        </Description>
                    </TextWrapper>
                    
                    <Status>
                        {this.renderStatusMarker()}
                    </Status>

                </DefaultView>

                {this.renderExpandedView()}

            </EventItemWrapper>
        );
    }

}


const EventItemWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
    margin: 6px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
`

const DefaultView = styled.div`
    display: flex; 
    flex-direction: row;
`;

const ExpandedView = styled.div`
   display: flex; 
   flex-direction: column;
   padding: 12px;
   margin: 6px;
`;

const InfoWrapper = styled.div`
    padding: 20px;
    font-size: 10px;
`;

const InfoTitle = styled.div`
    font-weight: 800;
    padding: 4px;
`;

const TextWrapper = styled.div`
    display: flex; 
    flex: 3;
    flex-direction: column; 
    justify-content: start;
    padding-left: 8px; 
`

const Title = styled.div`
    font-weight: 700;
    font-size: 12px;
    padding: 4px;
`

const Description = styled.div`
    font-weight: 500;
    font-size: 10px;
    padding: 4px;
`

const EventMetaData = styled.div`
    display: flex;
    flex: 1; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`

const Status = styled.div`
    display: flex; 
    flex: 1;
    width: 20%;
    text-align: center;
    align-items: center; 
    justify-content: center;
    flex-direction: end;
    font-weight: 700;
    font-size: 10px;
    padding-top: 4px;
`

const TimeStamp = styled.div`
    display: flex; 
    justify-content: center; 
    font-size: 8px;
    padding-top: 4px;
`

export default EventItem;