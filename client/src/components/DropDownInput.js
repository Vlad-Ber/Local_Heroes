import React from 'react';

import styled from 'styled-components';

const DropDownInput = (props) => {

    return (
            <DropDown onChange={props.onChange} {...props} value={props.value}>
                <StyledOption value="DEFAULT" disabled>Choose here</StyledOption>
                {props.options.map(option =>
                    <StyledOption value={option.value} key={option.value}>{option.text}</StyledOption>
                )}
            </DropDown>
        )
}


const DropDown = styled.select`
    margin: auto;
    display: flex;

    font-family: Ubuntu-Regular;

    font-size: 14px;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: 4em;
    width: 18em;

`

const StyledOption = styled.option`
    font-family: Ubuntu-Regular;;
`;


export default DropDownInput;
