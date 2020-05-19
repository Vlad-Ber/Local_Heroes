import React from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ConfirmButton = (props) => {
    return (
        <ConfirmButtonWrapper {...props}>
            <FontAwesomeIcon icon={faCheckCircle} />
        </ConfirmButtonWrapper>
    );
}

const ConfirmButtonWrapper = styled.button`
    background-color: white;
    border: #4CAF50;
    color: #4CAF50;
    padding: 40px;
    font-size: 48px;
    border-radius: 100%;

    &:hover {
      cursor: pointer;
    }
`;

export default ConfirmButton;
