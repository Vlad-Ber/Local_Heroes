import React, { Component } from 'react'

import styled from 'styled-components'

import LinkWrapper from './LinkWrapper.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faArrowLeft } from '@fortawesome/free-solid-svg-icons'



class NavBar extends Component {

    renderLeftButton = (type, link) => {
        return type === "back" ? 
            <LinkWrapper to={link}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '24px'}}/>
            </LinkWrapper> 
            : null
    }

    // TO DO IF NEEDED: Implement renderRightButton()

    render(){
        return (
            <NavBarWrapper>

                <NavBarSpaceLeft>
                    {this.renderLeftButton(this.props.leftButtonType, this.props.leftButtonLink)}
                </NavBarSpaceLeft>

                <NavBarSpaceCenter>
                    <LinkWrapper to="/home" style={{ color: 'black' }}>
                        <FontAwesomeIcon 
                            icon={faSeedling}
                            style={{ fontSize: '32px' }} 
                            />
                    </LinkWrapper>
                </NavBarSpaceCenter>

                <NavBarSpaceRight>
                </NavBarSpaceRight>

            </NavBarWrapper>
            
        )
    }
}

const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
    height: 60px;
    background: #31D285;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`

const NavBarSpaceCenter = styled.div`
    display: flex; 
    flex: 3;
    justify-content: center;
    padding: 10px;
`;

const NavBarSpaceLeft = styled.div`
    display: flex; 
    flex: 1;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
`;

const NavBarSpaceRight = styled.div`
    display: flex; 
    flex: 1;
    justify-content: flex-end;
    padding: 10px;
`;

export default NavBar;

