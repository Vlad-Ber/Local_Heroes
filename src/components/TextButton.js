import React from 'react'

import styled from 'styled-components'

const TextButton = (props) => {
    return <Button onClick={props.onClick}>{props.description}</Button>
}

const Button = styled.button`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    height: 40px;
    width: 18em;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #31D285;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

`

export default TextButton;
