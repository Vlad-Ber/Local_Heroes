import React from 'react';

import styled from 'styled-components';

const SectionTitle = (props) => <SectionTitleWrapper>{props.text}</SectionTitleWrapper>

const SectionTitleWrapper = styled.div`
    font-size: 18px;
    text-decoration: underline;
    text-transform: uppercase;
    padding-top: 30px;
    padding-bottom: 10px;
`

export default SectionTitle;