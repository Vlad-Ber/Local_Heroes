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
    return (
        <StyledInput 
          type="text" 
          value={this.state.value} 
          onChange={this.saveInput}
          height={this.props.height} 
          width={this.props.width} 
        />
    );
  }
}

const StyledInput = styled.textarea`
    margin: auto;
    display: flex;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '30em'};
    width: ${props => props.width || '18em'};
`

export default TextInput;
