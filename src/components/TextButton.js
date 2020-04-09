import React, { Component } from 'react'
import styled from 'styled-components'


class TextButton extends Component {
    render(){
        return (
            <TextButtonWrapper>
              <div style={{ fontWeight: '500', fontSize: '16px', padding: '4px', alignItems: 'start' }}>
                 { this.props.description }
              </div>
            </TextButtonWrapper>

        );
    }
}

const TextButtonWrapper = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    height: 40px;
    width: 15em;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #31D285;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`

export default TextButton;
