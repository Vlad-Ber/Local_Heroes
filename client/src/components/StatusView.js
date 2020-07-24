import React, { Component } from 'react';

import styled from 'styled-components';

import LinkWrapper from '../components/LinkWrapper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faUserCircle } from '@fortawesome/free-solid-svg-icons'

class StatusView extends Component {

    render(){
        return (
              <StatusViewWrapper>

                <StatusBoxWrapper>
                    <StatusBox>
                        <p style={{ color: '#252525' }}>ACTIVE ERRANDS IN YOUR LOCAL AREA</p>
                        <p style={{ fontWeight: '700', color: '#252525' }}>{this.props.activeErrands}</p>
                    </StatusBox>

                    <StatusBox>
                        <p style={{ color: '#252525' }}>ACTIVE USERS IN YOUR LOCAL AREA</p>
                        <p style={{ fontWeight: '700', color: '#252525' }}>{this.props.activeUsers}</p>
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

const StatusBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const StatusBox = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    margin-right: 6px;
    margin-left: 6px;
    margin-top: 1px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: #fff;
`

export default StatusView;
