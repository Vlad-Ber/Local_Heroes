import React from 'react';

import styled from 'styled-components'

const TextInput = (props) => {
  let type = props.type;
  switch(type){
    case "number":
      return (
      <StyledInput
        type="number"
        autocomplete="on"
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
        autocomplete="on"
        height={props.height}
        width={props.width}
        {...props}
      />
      );

    case "loginPassword":
      return (
        <WrappedSignIn>
          <StyledSignIn
            type="password"
            {...props}
          />
        </WrappedSignIn>
      );

    default:
      return (
      <StyledTextArea
        type="text"
        autocomplete="on"
        height={props.height}
        width={props.width}
        {...props}
      />
      );
  }
}

const StyledTextArea = styled.textarea`
    margin: auto;
    display: flex;

    font-family: 'Helvetica';
    font-size: 14px;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};

    resize: ${props => props.resize || 'none'};

`
const StyledInput = styled.input`
    margin: auto;
    display: flex;

    font-family: 'Helvetica';
    font-size: 14px;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};
`
const WrappedSignIn = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 27px;
  position: relative;
  z-index: 1;
`

//font-family: Ubuntu-Bold;
const StyledSignIn = styled.input`
  font-size: 15px;
  color: #1b3815;
  line-height: 1.2;

  position: relative;
  display: block;
  width: 100%;
  height: 55px;
  background: #ebebeb;
  border-radius: 27px;
  padding: 0 35px 0 35px;
`


export default TextInput;
