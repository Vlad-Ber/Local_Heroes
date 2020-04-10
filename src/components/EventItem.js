import React, { Component } from 'react';

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faShoppingCart, faInfo } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight, faUserCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


class EventItem extends Component {

    constructor(props){
        super(props); 

        this.state = {
            errand: {}
        }
    }

    componentDidMount(){
        this.setState({ errand: this.props.errand });
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
        let statusIconStyle = {
            fontSize: '32px',
            color: '#31D285'
        } 
        switch(this.state.errand.status){
            case "waiting": 
                statusIcon = <FontAwesomeIcon icon={faArrowCircleRight} style={statusIconStyle}/>
                break;
            case "inProgress": 
                statusIcon = <FontAwesomeIcon icon={faUserCircle} style={statusIconStyle}/>
                break;
            case "done": 
                statusIcon = <FontAwesomeIcon icon={faCheckCircle} style={statusIconStyle}/>
                break;
            default: 
                statusIcon = <Status>UNKNOWN</Status>
        }

        // Return component 
        return(
            <EventItemWrapper>

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