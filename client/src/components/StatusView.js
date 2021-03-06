import React, { Component } from 'react';

import styled from 'styled-components';

import LinkWrapper from '../components/LinkWrapper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

class StatusView extends Component {

    render(){
        return (
            <StatusViewWrapper>

                <LinkWrapper to="zipcode">
                    <DisplayAreaId>
                        <FontAwesomeIcon icon={faLocationArrow} style={{ color: "#31D285", fontSize: '12px', padding: '4px'}}/>
                        <div style={{ fontSize: "14px", padding: '4px' }}>
                            {this.props.areaID}
                        </div>
                    </DisplayAreaId>
                </LinkWrapper>

                <StatusBoxWrapper>
                    <StatusBox>
                        <p>ACTIVE ERRANDS IN YOUR LOCAL AREA</p>
                        <p style={{ fontWeight: '700' }}>{this.props.activeErrands}</p>
                    </StatusBox>

                    <StatusBox>
                        <p>ACTIVE USERS IN YOUR LOCAL AREA</p>
                        <p style={{ fontWeight: '700' }}>{this.props.activeUsers}</p>
                    </StatusBox>
                </StatusBoxWrapper>

            </StatusViewWrapper>
        );
    }

}

const StatusViewWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const DisplayAreaId = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
`

const StatusBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const StatusBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    margin: 6px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
`

export default StatusView;
