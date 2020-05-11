import React from 'react'

import styled from 'styled-components'

const TextButton = (props) => {
    return (
        <Button {...props}>
            {props.description}
        </Button>
    );
}

const Button = styled.button`
    margin: auto;
    display: flex;

    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Arial', Helvetica, sans-serif;

    height: ${props => props.height || '42px'};
    width: ${props => props.width || '18em'};
    margin-top: ${props => props.marginTop || '30px'};
    margin-bottom: ${props => props.marginBottom || '30px'};

    background: #31D285;
    box-shadow: 1px;
    border-radius: 4px;


    &:hover {
      cursor: pointer;

      text-shadow: 0 0 2em rgba(250,250,250,1);
      color:#FFFFFF;
      border-color:#FFFFFF;
    }
`

export default TextButton;
