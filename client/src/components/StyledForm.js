import React from 'react';

import styled from 'styled-components';

const StyledForm = (props) => {
    return <FormWrapper>{props.children}</FormWrapper>
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default StyledForm;
