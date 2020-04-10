import React, { Component } from 'react';

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faShoppingCart, faInfo } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight, faUserCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


class EventItem extends Component {

    constructor(props){
        super(props); 

        this.state = {
            fullView: false,
            errand: {}
        }
    }

    componentDidMount(){
        this.setState({ fullView: this.props.fullView, errand: this.props.errand });
    }

    render(){

        // Return icon for event type 
        let type = this.state.errand.type;
        let typeIcon = null; 
        let typeIconStyle = {
            display: 'flex',
            justifyContent: 'center',
            padding: '4x',
            fontSize: '18px',
            color: '#31D285'
        }

        switch(type){
            case "carrying": 
                typeIcon = <FontAwesomeIcon icon={faPeopleCarry} style={typeIconStyle}/>
                break;
            case "shopping": 
                typeIcon = <FontAwesomeIcon icon={faShoppingCart} style={typeIconStyle}/>
                break;
            default: 
                typeIcon = <FontAwesomeIcon icon={faInfo} style={typeIconStyle}/>
                break;
        }

        //Return status marker 
        let statusIcon = null;
        let statusText = ""
        let statusIconStyle = {
            fontSize: '32px',
            color: '#31D285'
        } 
        switch(this.state.errand.status){
            case "waiting": 
                statusIcon = <FontAwesomeIcon icon={faArrowCircleRight} style={statusIconStyle}/>
                statusText = "Waiting"
                break;
            case "inProgress": 
                statusIcon = <FontAwesomeIcon icon={faUserCircle} style={statusIconStyle}/>
                statusText = "In progress"
                break;
            case "done": 
                statusIcon = <FontAwesomeIcon icon={faCheckCircle} style={statusIconStyle}/>
                statusText = "Done!"
                break;
            default: 
                statusIcon = <Status>UNKNOWN</Status>
        }

        // Return component 
        return( this.state.fullView ? 
        
            <ExpandedView onClick={() => this.setState({ fullView: false })}>

                    <ExpandedViewEventItem>

                        <EventMetaData>
                            {typeIcon}
                            <TimeStamp>Today 12.24</TimeStamp>
                        </EventMetaData>

                        <TextWrapper>
                            <Title>
                                {this.state.errand.title}
                            </Title>

                            <Description>
                                {this.state.errand.description}
                            </Description>

                        </TextWrapper>

                        {statusIcon}

                    </ExpandedViewEventItem> 
                
                    <InfoWrapper>
                        
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

                        <InfoTitle>
                            Status
                        </InfoTitle>
                        <Description>
                            {statusText}
                        </Description>

                    </InfoWrapper>

            </ExpandedView>
            
            :

            <EventItemWrapper onClick={() => this.setState({ fullView: true })}>

                <EventMetaData>
                    {typeIcon}
                    <TimeStamp>Today 12.24</TimeStamp>
                </EventMetaData>

                <TextWrapper>
                    <Title>
                        {this.state.errand.title}
                    </Title>

                    <Description>
                        {this.state.errand.description}
                    </Description>
                </TextWrapper>

                {statusIcon}

            </EventItemWrapper>
        );
    }

}

const ExpandedView = styled.div`
   display: flex; 
   flex-direction: column;
   border-radius: 3px;
   padding: 12px;
   margin: 6px;
   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3); 
`

const ExpandedViewEventItem = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
`

const InfoWrapper = styled.div`
    padding: 20px;
    font-size: 10px;
`

const InfoTitle = styled.div`
    font-weight: 800;
    padding: 4px;
`

const EventItemWrapper = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    margin: 6px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
`

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
    align-items: center; 
    flex-direction: end;
    font-weight: 500;
    font-size: 8px;
    padding-top: 4px;
`

const TimeStamp = styled.div`
    display: flex; 
    justify-content: center; 
    font-size: 8px;
    padding-top: 4px;
`

export default EventItem;