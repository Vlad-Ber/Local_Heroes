import React from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const ArrowButton = (props) => {
    return (
        <ArrowButtonWrapper type="button" {...props}>
            <FontAwesomeIcon icon={faArrowCircleRight} />
        </ArrowButtonWrapper>
    );
}

const ArrowButtonWrapper = styled.button`
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

export default ArrowButton;
