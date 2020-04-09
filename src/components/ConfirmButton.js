import React from 'react';
import {Checkmark} from 'react-checkmark';


import './../confirmButton.css';
class ConfirmButton extends React.Component {

  
    render(){
        return(
                <div>
                
                
                <button id="confirm" >
                <Checkmark size='large'/>
                </button>
                </div>
        )
        
    }
}

export default ConfirmButton;
