import React, { Component } from 'react'; 

import NavBar from '../components/NavBar.js'
import SectionTitle from '../components/SectionTitle.js'

class HelpRequest extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <SectionTitle text="HELP REQUEST"/>
            </div>
        );
    }
}

export default HelpRequest;