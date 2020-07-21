import React from 'react';

import styled from 'styled-components';

const SectionTitle = (props) => <SectionTitleWrapper paddingTop={props.paddingTop} fontSize={props.fontSize}>{props.text}</SectionTitleWrapper>

const SectionTitleWrapper = styled.div`
    font-family: Ubuntu-Regular;  
    font-size: ${props => props.fontSize || '18px'};
    text-align: center;
    text-transform: uppercase;
    padding-top: ${props => props.paddingTop || '20px'};
    padding-bottom: 10px;
`

export default SectionTitle;
