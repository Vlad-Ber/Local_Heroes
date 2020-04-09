import React, { Component } from 'react';

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faShoppingCart, faInfo } from '@fortawesome/free-solid-svg-icons'


class EventItem extends Component {

    constructor(props){
        super(props); 

        this.state = {
            status: this.props.status
        }
    }

    render(){

        // Return icon for event type 
        let type = this.props.type;
        let icon = null; 
        let iconStyle = {
            display: 'flex',
            justifyContent: 'center',
            padding: '4x',
            fontSize: '24px',
            color: '#31D285'
        }

        switch(type){
            case "carrying": 
                icon = <FontAwesomeIcon icon={faPeopleCarry} style={iconStyle}/>
                break;
            case "shopping": 
                icon = <FontAwesomeIcon icon={faShoppingCart} style={iconStyle}/>
                break;
            default: 
                icon = <FontAwesomeIcon icon={faInfo} style={iconStyle}/>
                break;
        }

        //Return status marker 
        let status = null;
        switch(this.state.status){
            case "waiting": 
                status = <Status>WAITING</Status>
                break;
            case "inProgress": 
                status = <Status>IN PROGRESS</Status>
                break;
            case "done": 
                status = <Status>DONE</Status>
                break;
            default: 
                status = <Status>UNKNOWN</Status>
        }

        // Return component 
        return(
            <EventItemWrapper>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>

                    <Title>
                        { this.props.title }
                    </Title>

                    <Description>
                        { this.props.description }
                    </Description>

                </div>

                <IconWrapper>
                    {icon}
                    {status}
                </IconWrapper>


            </EventItemWrapper>
        );
    }

}

const EventItemWrapper = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 6px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
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

const IconWrapper = styled.div`
    display: flex; 
    flex: 0.4;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
`

const Status = styled.div`
    display: flex; 
    align-items: center; 
    font-weight: 500;
    font-size: 8px;
    padding-top: 4px;
`

export default EventItem;