import React from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import TextButton from '../components/TextButton.js'
import NavBar from '../components/NavBar.js';

class ResidenceInfo extends React.Component{

    render(){
        return (
                <div>
                <NavBar />
                
                <SectionTitle text = "Residence Info" />

                <SectionTitle text = "Address" titleType="Variant" />
                <TextInput height="24px"/>
                
                <SectionTitle text = "Area Code" titleType="Variant"/> 
                <TextInput height="24px"/>

                <SectionTitle text="City" titletype="Variant"/>
                <TextInput height="24px"/>
                </div>
                
        );
    }
}

export default ResidenceInfo;
