import React from 'react';

import styled from 'styled-components'

import '../css/components.css'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


class AutoCompleteInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PlacesAutocomplete
        {...this.props}
        class="autocompleteInput"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div class="autocompleteInput">
            <StyledInput
              {...getInputProps({
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#a6a3a0', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };

                  console.log(suggestion  )

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
const StyledDiv = styled.div`

	border-radius: 16px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
	border: 1px solid #31D285;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Muli';
	position: relative;
	height: 24px;
	width: 370px;
	max-width: calc(100% - 10px);
`


const StyledInput = styled.input`
    margin: auto;
    display: flex;

    font-family: 'Helvetica';
    font-size: 14px;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: 24px;
    width: 18em;
`

export default AutoCompleteInput;