import React from 'react'

import styled from 'styled-components'

const TextButton = (props) => {
    return <Button marginTop={props.marginTop} marginBottom={props.marginBottom} width={props.width} height={props.height}>{props.description}</Button>
}

const Button = styled.button`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    height: ${props => props.height || '42px'};
    width: ${props => props.width || '18em'};
    margin-top: ${props => props.marginTop || '30px'};
    margin-bottom: ${props => props.marginBottom || '30px'};
    background: #31D285;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    font-family: 'Helvetica';
`

export default TextButton;
