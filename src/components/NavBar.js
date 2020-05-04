import React from 'react'
import { useAuth0 } from "../react-auth0-spa";
import styled from 'styled-components'

import LinkWrapper from './LinkWrapper.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faArrowLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons'



const NavBar = (props) => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    function renderLeftButton(type, link){
        return type === "back" ? 
            <LinkWrapper to={link}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '24px'}}/>
            </LinkWrapper> 
            : null
    };

    function renderRightButton(type, link){
        return type === "profile" ?
            <LinkWrapper to={link}>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '24px' }}/>
            </LinkWrapper>
            : null
    };

    return (
            <NavBarWrapper>

                <NavBarSpaceLeft>
                    {renderLeftButton(props.leftButtonType, props.leftButtonLink)}
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
                    {/*this.renderRightButton(this.props.rightButtonType, this.props.rightButtonLink)*/}
                    <div>
                        {!isAuthenticated && (<button onClick={() => loginWithRedirect({})}>Log in</button>)}
                        {isAuthenticated && (
                            <span>
                                <LinkWrapper to="/">Home</LinkWrapper>&nbsp;
                                <LinkWrapper to="/profile">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        style={{ fontSize: '32px' }} 
                                    />
                                </LinkWrapper>
                            </span>
                        )}
                    </div>
                </NavBarSpaceRight>

            </NavBarWrapper>
        );
    
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
`;

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

