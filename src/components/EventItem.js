import React, { Component } from 'react';
import styled from 'styled-components'


class EventItem extends Component {

    render(){
        return(
            <EventItemWrapper>

                <div style={{ fontWeight: '700', fontSize: '14px', padding: '4px' }}>
                    { this.props.title }
                </div>

                <div style={{ fontWeight: '500', fontSize: '10px', padding: '4px' }}>
                    { this.props.description }
                </div>

            </EventItemWrapper>
        );
    }

}

const EventItemWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    padding: 20px;
    margin: 6px;
    align-items: start;
    box-shadow: 0px 1.5px 1.5px rgba(0, 0, 0, 0.4);
    border-radius: 3px;

`



export default EventItem;