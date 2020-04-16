import React from 'react'; 

import styled from 'styled-components';

const DropDownInput = (props) => {

    return (
            <DropDown onChange={props.onChange} value={props.value}>
                <option value="DEFAULT" disabled>Choose here</option>
                {props.options.map(option => 
                    <option value={option.value} key={option.value}>{option.text}</option>
                )}
            </DropDown> 
        )
}


const DropDown = styled.select`
    margin: auto;
    display: flex;

    font-family: 'Inter';

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: 4em;
    width: 18em;
`


export default DropDownInput;