import React, { Component } from 'react';

import styled from 'styled-components';

import LinkWrapper from '../components/LinkWrapper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faUserCircle } from '@fortawesome/free-solid-svg-icons'

class ProfileAndAreaView extends Component {

    render(){
        return (
          <div>
              <LinkWrapper to="zipcode">
                  <DisplayAreaId>
                      <FontAwesomeIcon icon={faLocationArrow} style={{ color: "black", fontSize: '15px' }}/>
                      <StyledAreaId>
                          {this.props.areaID}
                      </StyledAreaId>
                  </DisplayAreaId>
              </LinkWrapper>

              <LinkWrapper to="profile-page">
                <RenderProfileLink>
                  <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ fontSize: '30px' }}
                  />
                </RenderProfileLink>
              </LinkWrapper>
            </div>
        );
    }

}


const RenderProfileLink = styled.div`
  position: absolute;
  top: 10px;
  right: 70px;
`


const DisplayAreaId = styled.div`
  position: absolute;
  top: 13px;
  right: 16px;
  justify-content: center;
  text-align: center;
  color: #fff;
`


const StyledAreaId = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-family: Ubuntu-Regular;
    font-weight: 600;
`

export default ProfileAndAreaView;
