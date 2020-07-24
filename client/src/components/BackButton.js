import React, { Component } from 'react'

import styled from 'styled-components'

import LinkWrapper from './LinkWrapper.js';

import '../fonts/JosefinSans/JosefinSans-Bold.ttf'


class BackButton extends Component {

    renderBackButton = (link) => {
        return <LinkWrapper to={link}>
                  <ButtonWrapper>{this.props.text}</ButtonWrapper>
              </LinkWrapper>
    };


    render(){
        return (
            <div>
              {this.renderBackButton(this.props.link)}
            </div>

        )
    }
}


const ButtonWrapper = styled.button`
    position: absolute;
    top: 20px;
    left: 16px;

    font-family: JosefinSans-Bold;

    &:hover {
        color: white;
    }
`;

export default BackButton;
