import React, { Component } from 'react'; 

import NavBar from '../components/NavBar.js'
import SectionTitle from '../components/SectionTitle.js'
import TextInput from '../components/TextInput.js'

class HelpRequest extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <SectionTitle text="HELP REQUEST"/>

                <SectionTitle text="What do you need help with?"/>
                <TextInput height="20em"/>
            </div>
        );
    }
}

export default HelpRequest;