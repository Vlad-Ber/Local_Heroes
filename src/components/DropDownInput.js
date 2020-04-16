import React, { Component } from 'react'; 

import styled from 'styled-components';

class DropDownInput extends Component {

    constructor(props){
        super(props); 

        this.state = {
            value: ""
        } 
    }

    renderOptions = () => {
        return this.props.options.map((option, i) => 
        <option value={option.value} key={i}>{option.text}</option>);
    }

    render(){
        return(
            <DropDown>
                <option value="" selected disabled hidden>Choose here</option>
                {this.renderOptions()}
            </DropDown>
        )
    }
}

const DropDown = styled.select`
    margin: auto;
    display: flex;

    font-family: 'Inter';

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: 4em;
    width: 18em;
`


export default DropDownInput;