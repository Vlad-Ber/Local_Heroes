import React from 'react';

import styled from 'styled-components'



const Input = styled.input`
    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: 30px;
    width: 14em;
`

class TextInput extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        value: '',
      }
    }

  saveText = (event) => {
   this.setState({value: event.target.value});

 }

  render() {
    console.log(this.state.value)
    return (
        <Input type="text" value={this.state.value} onChange={this.saveText}/>
    );
  }
}




export default TextInput;
