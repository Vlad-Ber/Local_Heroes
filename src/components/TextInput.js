import React from 'react';

import styled from 'styled-components'

<<<<<<< HEAD
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
        <StyledTextArea
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
=======
const TextInput = (props) => {
  let type = props.type; 
  switch(type){
    case "number": 
      return (
      <StyledInput 
        type="number" 
        height={props.height} 
        width={props.width} 
        {...props}
        min="0"
      />
      );

    case "password": 
      return (
      <StyledInput 
        type="password" 
        height={props.height} 
        width={props.width} 
        {...props}
      />
      );

    default: 
      return (
      <StyledInput 
        type="text" 
        height={props.height} 
        width={props.width} 
        {...props}
      />
      );
>>>>>>> master
  }
}

const StyledTextArea = styled.textarea`
    margin: auto;
    display: flex;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};
`
const StyledInput = styled.input`
    margin: auto;
    display: flex;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};
`
export default TextInput;
