import React, { Component } from 'react';

import styled from 'styled-components'

import TextButton from './TextButton.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faShoppingCart, faInfo } from '@fortawesome/free-solid-svg-icons'


class EventItem extends Component {

    constructor(props){
        super(props); 

        this.state = {
            fullView: false,
            errand: {}
        }

        this.handleHelpNotice = this.handleHelpNotice.bind(this);
    };

    toggleView = () => {
        this.setState({ fullView: !this.state.fullView});
    };

    handleHelpNotice = () => {
        console.log("I want to help");
    };

    renderTypeIcon = (args) => {

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

    renderActionButton = () => {
        return this.state.errand.status === "waiting" ? 
            <TextButton onClick={this.handleHelpNotice} description="I WANT TO HELP"/> 
            : null
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

            {this.renderActionButton()}

        </ExpandedView> 
        
        : null
    }

    componentDidMount(){
        this.setState({ fullView: this.props.fullView, errand: this.props.errand });
    };

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
    flex: 1;
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
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`

const Status = styled.div`
    display: flex; 
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