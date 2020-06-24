import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import AutoCompleteInput from '../components/AutoCompleteInput.js';
import ArrowButton from '../components/ArrowButton.js';
import StyledForm from '../components/StyledForm.js';

class ResidenceInfo extends React.Component {
      constructor(props){
        super(props);

        this.state = {
          address: '',
          area: '',
          city: ''
        }
      }

      saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
      }

      setAdress = address => {
        this.setState({ address: address })

        this.getAreaCode(address);
      }

      getAreaCode = async address => {
        let result = await geocodeByAddress(address);
        let latLng = await getLatLng(result[0]);

        this.getCityByCoordinates(latLng.lat, latLng.lng);
        console.log("--AREA CODE--");
        console.log(result[0]);
        console.log(this.state.area)
        console.log(this.state.city)

      };

      getCityByCoordinates = async (lat, lng) => {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBQ0fbpDjxjDFLmagN0-pgyinM8rKTSPwg`
        fetch(url)
        .then(response => response.json())
        .then(data => {

          let parts = data.results[0].address_components;

          parts.forEach(part => {
            if( part.types.includes("postal_code") ){
              this.setState({ area: part.long_name })

            } else if( part.types.includes("postal_town") ) {
              this.setState({ city: part.long_name })
            }
          })
        })
    };


    storeSession = e => {
      window.sessionStorage.setItem("stateResidenceInfo", JSON.stringify(this.state));
      this.props.history.push("/insert-image");
    }

    render(){
        return (
          <div>
            <NavBar
              leftButtonType="back"
              leftButtonLink="/profile-creation"
            />

            <SectionTitle text="Residence Info" />

            <StyledForm>
              <SectionTitle text="Address" fontSize="14px" />
              <AutoCompleteInput
              value={this.state.address}
              onChange={this.setAdress}
              />

              <SectionTitle text="Area Code" fontSize="14px"/>
              <TextInput
              type="number"
              pattern="[0-9]"
              height="24px"
              name="area"
              value={this.area}
              onChange={this.saveInput}
              />

              <SectionTitle text="City" fontSize="14px"/>
              <TextInput
              height="24px"
              name="city"
              value={this.city}
              onChange={this.saveInput}
              />

              <ArrowButton onClick={this.storeSession}/>

            </StyledForm>
          </div>
        );
    }
}

export default ResidenceInfo;
