import React from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ConfirmButton = (props) => {
    return (
        <ConfirmButtonWrapper type="submit" value="Submit" id="confirm">
            <FontAwesomeIcon icon={faCheckCircle} />
        </ConfirmButtonWrapper>
    );
}

const ConfirmButtonWrapper = styled.button`
    background-color: white;
    border: #4CAF50;
    color: #4CAF50;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 48px;
    border-radius: 100%;
`;

export default ConfirmButton;
