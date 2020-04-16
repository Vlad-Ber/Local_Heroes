import React, { Component } from 'react';

import styled from 'styled-components'

class TextInput extends Component {

  renderInputType = () => {
    let type = this.props.type;
    switch(type){
      case "number":
        return (
        <StyledInput
          type="number"
          name={this.props.name}

          value={this.props.value}
          onChange={this.props.saveInput}

          height={this.props.height}
          width={this.props.width}
          min="0"
        />
        );

      case "password":
        return (
        <StyledInput
          type="password"
          name={this.props.name}

          value={this.props.value}
          onChange={this.props.saveInput}

          height={this.props.height}
          width={this.props.width}
        />
        );

      default:
        return (
        <StyledInput
          type="text"
          name={this.props.name}

          value={this.props.value}
          onChange={this.props.saveInput}

          height={this.props.height}
          width={this.props.width}
        />
        );
    }
  }

  render(){
    return (
      <React.Fragment>
        {this.renderInputType()}
      </React.Fragment>
    );
  }
}

const StyledInput = styled.textarea`
    margin: auto;
    display: flex;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};
`

export default TextInput;
