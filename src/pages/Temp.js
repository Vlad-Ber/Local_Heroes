import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import ArrowButton from '../components/ConfirmButton.js';

class Temp extends React.Component{

    constructor(props){
      super(props);

      this.state = {
        name: '',
        age: '',

        email: '',
        mobile: '',

        address: '',
        area: '',
        city: '',
      }
    }

    componentDidMount(){
        let prof = JSON.parse(sessionStorage.getItem("stateProfileCreation"));

        let updatedName = prof.firstname + ' ' + prof.lastname;
        let updatedAge = prof.age;
        let updatedEmail = prof.email;
        let updatedMobile = prof.mobile;


        let stateRes = JSON.parse(sessionStorage.getItem("stateResidenceInfo"));

        let updatedAddress = stateRes.address;
        let updatedArea = stateRes.area;
        let updatedCity = stateRes.city;

      this.setState({
        name: updatedName,
        age: updatedAge,
        email: updatedEmail,
        mobile: updatedMobile,

        address: updatedAddress,
        area: updatedArea,
        city: updatedCity
      })
    }

    sendProfiletoBackend = (req, res) => {
        axios.post("/",{
          email: this.email,
          name: this.name,
          age: this.age,
          address: this.address,
          description: '',
          virtuePoints: 0,
          areaId: this.area,
          mobile: this.mobile,
          city: this.city,
          image: ''
        })
        .then((res) => {
            console.log(res);
        });
    }

    render(){
        return (
          <div>
            <ArrowButton onClickFunc = {this.sendProfiletoBackend}/>
          </div>
        );
    }
}

export default Temp;
