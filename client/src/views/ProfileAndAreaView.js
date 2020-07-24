import React, { Component } from 'react';

import styled from 'styled-components';

import LinkWrapper from '../components/LinkWrapper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faUserCircle } from '@fortawesome/free-solid-svg-icons'

class StatusView extends Component {

    render(){
        return (
              <StatusViewWrapper>

                <UserAndAreaWrapper>
                  <LinkWrapper to="zipcode">
                      <DisplayAreaId>
                          <FontAwesomeIcon icon={faLocationArrow} style={{ color: "#31D285", fontSize: '20px', padding: '4px'}}/>
                          <StyledAreaId>
                              {this.props.areaID}
                          </StyledAreaId>
                      </DisplayAreaId>
                  </LinkWrapper>

                  <LinkWrapper to="profile-page">
                    <RenderProfileLink>
                      <FontAwesomeIcon
                      icon={faUserCircle}
                      style={{ fontSize: '40px', padding: '4px' }}
                      />
                    </RenderProfileLink>
                  </LinkWrapper>

                </UserAndAreaWrapper>



            </StatusViewWrapper>
        );
    }

}

const StatusViewWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const UserAndAreaWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const RenderProfileLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
`


const DisplayAreaId = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
`


const StyledAreaId = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-family: Ubuntu-Regular;
    fontSize: 20px;
    padding: 4px;
`



export default StatusView;
