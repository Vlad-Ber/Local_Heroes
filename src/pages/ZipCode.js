import React, { Component } from 'react';

import styled from 'styled-components';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'

class ZipCode extends Component {

  render(){
    return (
      <div>
        <TitleWrapper>
          Welcome to LocalHero!
        </TitleWrapper>

        <SectionTitle
          text="Please enter your zip code"
          fontSize="16px"
        />
        <TextInput />
      </div>
    );
  }
}

const TitleWrapper = styled.div`
    font-size: 24px;
    text-align: center;
    padding-top: 70px;
    padding-bottom: 40px;
    font-weight: bold;
`

export default ZipCode;
