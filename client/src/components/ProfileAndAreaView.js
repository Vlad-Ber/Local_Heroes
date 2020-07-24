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
                          <FontAwesomeIcon icon={faLocationArrow} style={{ color: "#31D285", fontSize: '20px' }}/>
                          <StyledAreaId>
                              {this.props.areaID}
                          </StyledAreaId>
                      </DisplayAreaId>
                  </LinkWrapper>

                  <LinkWrapper to="profile-page">
                    <RenderProfileLink>
                      <FontAwesomeIcon
                      icon={faUserCircle}
                      style={{ fontSize: '40px' }}
                      />
                    </RenderProfileLink>
                  </LinkWrapper>
            </div>
        );
    }

}


const RenderProfileLink = styled.div`
  position: absolute;
  top: 20px;
  right: 16px;
`


const DisplayAreaId = styled.div`
  position: absolute;
  top: 20px;
  margin-left: 45%;
  margin-top: 2px;
`


const StyledAreaId = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-family: Ubuntu-Regular;
    fontSize: 20px;
`

export default ProfileAndAreaView;
