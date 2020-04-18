import React, { Component } from 'react';
import styled from 'styled-components'


class ArrowButton extends Component {

    render(){
        return(
            <ArrowButtonWrapper  id="Arrow" type="submit" value="Submit" id="confirm" onClick={this.props.onClickFunc}>
            <img src={""}/> insert image
            </ArrowButtonWrapper>
        );
    }
}

const ArrowButtonWrapper = styled.button`
    background-color: #4CAF50;

    border: none;
    color: white;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 100%;
`

export default ArrowButton
