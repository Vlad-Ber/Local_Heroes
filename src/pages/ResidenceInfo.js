import React from 'react';

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import NavBar from '../components/NavBar.js';
import ArrowButton from '../components/ConfirmButton.js'; //TODO Fix Arrow button

class ResidenceInfo extends React.Component{

   
    
    render(){
             
        return (
            
                <div>
                <form>
                <NavBar />
                
                <SectionTitle text="Residence Info" />

                <SectionTitle text="Address" titleType="Variant" />
                <TextInput height="24px"/>
                
                <SectionTitle text="Area Code" titleType="Variant"/> 
                <TextInput pattern="[0-9] "height="24px"/>

                <SectionTitle text="City" titletype="Variant"/>
                <TextInput height="24px"/>
                </form>
                <ArrowButton />
                
            </div>

               
                
        );
    }
}

export default ResidenceInfo;
