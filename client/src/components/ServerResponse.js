import React from 'react'; 
import styled from 'styled-components';

const ServerResponse = (props) => {
    switch (props.success) {
        case true: 
            return <Success>{props.successResponse}</Success>
        case false: 
            return <Fail>{props.failResponse}</Fail>
        default: 
            return null;
    }
}

const Success = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size: 14px;
    color: #31D285;
`;

const Fail = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size: 14px;
    color: red;
`;

export default ServerResponse;