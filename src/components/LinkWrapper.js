import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`

    color: black; 

    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default (props) => <LinkWrapper {...props} />;