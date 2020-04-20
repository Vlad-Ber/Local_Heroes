import React from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'

const ZipCode = () => {
  return (
      <div>
        <SectionTitle
          text="Change Location (Zip Code)"
          fontSize="16px"
          height=""
        />
        <TextInput />
      </div>
  );
}

export default ZipCode;
