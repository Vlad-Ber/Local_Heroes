import React from 'react';

import styled from 'styled-components';

const SectionTitle = (props) => <SectionTitleWrapper fontSize={props.fontSize}>{props.text}</SectionTitleWrapper>

const SectionTitleWrapper = styled.div`
    font-size: ${props => props.fontSize || '18px'};
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
    padding-top: 20px;
`

export default SectionTitle;