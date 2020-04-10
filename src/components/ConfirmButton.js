import React from 'react';
import {Checkmark} from 'react-checkmark';


import './../confirmButton.css';
class ConfirmButton extends React.Component {
    
    print(){
        
        console.log('hej');
    }
    render(){
        return(
                <div>
                
            
                <button id="confirm" onClick={this.print}>
                <Checkmark size='large'/>
                </button>
                </div>
        )
        
    }
}

export default ConfirmButton;
