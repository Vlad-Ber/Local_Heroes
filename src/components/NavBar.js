import React, { Component } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'


class NavBar extends Component {
    render(){
        return (
            <NavBarWrapper>
                <FontAwesomeIcon 
                    style={{
                        fontSize: '32px'
                    }} 
                    icon={faSeedling}
                />
            </NavBarWrapper>
            
        )
    }
}

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    height: 60px;
    background: #31D285;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`

export default NavBar;

