import React, { Component } from 'react';

import styled from 'styled-components'

class TextInput extends Component {

  constructor(props) {
      super(props);

      this.state = {
        value: '',
      }
  }

  saveText = (event) => {
    console.log(this.state.value)
   this.setState({value: event.target.value});
 }

  render() {
    return (
        <StyledInput type="text" value={this.state.value} onChange={this.saveText}/>
    );
  }

}

const StyledInput = styled.input`
    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: 30px;
    width: 18em;
`

export default TextInput;
