import React, { Component } from 'react';

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons'


class EventItem extends Component {

    render(){
        return(
            <EventItemWrapper>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                    <div style={{ fontWeight: '700', fontSize: '16px', padding: '4px' }}>
                        { this.props.title }
                    </div>

                    <div style={{ fontWeight: '500', fontSize: '12px', padding: '4px', alignItems: 'start' }}>
                        { this.props.description }
                    </div>

                </div>

                <FontAwesomeIcon 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '4x',
                        fontSize: '24px',
                        color: '#31D285'
                    }}
                    icon={faPeopleCarry}
                />


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

export default EventItem;