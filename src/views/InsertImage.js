import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import NavBar from "../components/NavBar.js";
import SectionTitle from "../components/SectionTitle.js";
import ConfirmButton from "../components/ConfirmButton.js";
import uploadImage from "../components/uploadImage.js"

class InsertImage extends Component {
            
       
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",

      name: "",
      age: "",

      email: "",
      mobile: "",

      description: "",

      address: "",
      area: "",
      city: "",

      image: "",
    };
  }

  componentDidMount() {
    let prof = JSON.parse(sessionStorage.getItem("stateProfileCreation"));

    let updatedUsername = prof.username;
    let updatedPassword = prof.password;
    let updatedName = prof.firstname + " " + prof.lastname;
    let updatedAge = prof.age;
    let updatedEmail = prof.email;
    let updatedMobile = prof.mobile;

    let stateRes = JSON.parse(sessionStorage.getItem("stateResidenceInfo"));

    let updatedAddress = stateRes.address;
    let updatedArea = stateRes.area;
    let updatedCity = stateRes.city;

    this.setState({
      username: updatedUsername,
      password: updatedPassword,

      name: updatedName,
      age: updatedAge,
      email: updatedEmail,
      mobile: updatedMobile,

      address: updatedAddress,
      area: updatedArea,
      city: updatedCity,
    });
  }

  saveInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendProfiletoBackend = (userProfile, response) => {
    let user = this.state;

    axios
      .post("/insertUser", {
        username: user.username,
        password: user.password,
        email: user.email,
        name: user.name,
        age: user.age,
        address: user.address,
        description: user.description,
        virtuePoints: 0,
        areaId: user.area,
        mobile: user.mobile,
        city: user.city,
        image: "",
      })
      .then((response) => {
        console.log(response);
      });

    this.props.history.push("/signup");
  };

 
  /*onChange(e)
    {
        let files = e.target.files;
        console.log("data file", files)
        }
  <input type="file" name="file" onChange={(e)=>this.onChange(e)} />*/


  fileSelectHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post("/uploadImage", fd, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "Upload Progress" +
              (progressEvent.loaded / progressEvent.total) * 100 +
              "%"
          );
        },
      })
      .then((response) => {
        console.log("Inside response");
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

    uploadWidget() {
   /*     cloudinary.openUploadWidget({ cloud_name: 'group-fess', upload_preset: 'preset', tags:['xmas']},
                                    function(error, result) {
                                        console.log(result);
                                    });
   */ }

    render() {
        console.log(this.state);
       /* return (
                <InsertImageWrapper>
                <NavBar leftButtonType="back" leftButtonLink="/residence-info" />
                <SectionTitle text="Please insert a profile picture" />

                <ImageSelect >//cloudName="group-fess">
                <StyledInput type="file" onChange={this.fileSelectHandler} />
                </ImageSelect>

                            <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                    Add Image
                </button>



                <ConfirmButton onClick={this.sendProfiletoBackend} />
                </InsertImageWrapper>
  
            
                );*/

         const { loading, uploading, images } = this.state
    
    const content = () => {
      switch(true) {
        case loading:
          //return <WakeUp />
        case uploading:
         // return <Spinner />
        case images.length > 0:
          return <uploadImage 
                  uploadImage={uploadImage} 
                  removeImage={this.removeImage} 
                  onError={this.onError}
                 />
        default:
          return < StyledInput type="file" onChange={this.onChange} />
      }
    }

    return (
      < StyledInput type="file" onChange={this.onChange} />
    )
  }
    }



const InsertImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageSelect = styled.div`
    display: flex; 
    flex: 1;
    justify-content: center; 
    align-items: center;
`;

const StyledInput = styled.input`
    font-size: 14px; 
    border-style: solid;
    border-width: 3px;
    border-color: #31D285;
`; 

export default InsertImage;
