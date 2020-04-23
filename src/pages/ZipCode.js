import React from 'react';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';

const ZipCode = () => {
  return (
      <div>
        <NavBar 
          leftButtonType="back"
          leftButtonLink="/home"
        /> 
        <SectionTitle
          text="Change Location (Zip Code)"
          paddingTop="30px"
          fontSize="16px"
        />
        <TextInput
          height="32px"
        />
      </div>
  );
}

export default ZipCode;
