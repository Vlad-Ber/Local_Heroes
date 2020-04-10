import React, { Component } from 'react';

import styled from 'styled-components'

class TextInput extends Component {

  constructor(props) {
      super(props);

      this.state = {
        value: '',
      }
  }

  saveInput = (event) => {
   this.setState({value: event.target.value});
 }

  render() {
    let type = this.props.type;
    let inputType;

    switch(type){
        case "dropdown":
            inputType = <StyledDropdown>
                          <option value = "Male">Male</option>
                          <option value = "Female">Female</option>
                          <option value = "Other" selected>Other</option>
                        </StyledDropdown>
            break;
        case "number":
            inputType = <StyledInput type = "number" value={this.state.value} onChange={this.saveInput}/>
            break;
        case "password":
            inputType = <StyledInput type = "password" value={this.state.value} onChange={this.saveInput}/>
            break;
        default:
            inputType = <StyledInput type = "text" value={this.state.value} onChange={this.saveInput}/>
            break;
    }

    return inputType;
  }
}

const StyledInput = styled.input`
    margin: auto;
    display: flex;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: 30px;
    width: 18em;
`

const StyledDropdown = styled.select`
    margin: auto;
    display: flex;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
    background: #FFFFFF;

    height: 30px;
    width: 18em;

    justify-content: center;
    align-items: center;

`

export default TextInput;
