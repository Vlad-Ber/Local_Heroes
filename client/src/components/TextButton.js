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
    font-family: Ubuntu-Regular;

    height: ${props => props.height || '42px'};
    width: ${props => props.width || '18em'};
    margin-top: ${props => props.marginTop || '30px'};
    margin-bottom: ${props => props.marginBottom || '30px'};

    background: #57b846;
    box-shadow: 1px;
    border-radius: 20px;


    &:hover {
      cursor: pointer;

      background-color: #C0C0C0;
    }
`

export default TextButton;
