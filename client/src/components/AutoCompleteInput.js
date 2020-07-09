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
          <WrapperDiv>
            <StyledInput
              {...getInputProps({
                className: 'location-search-input',
              })}
              placeholder="Address"
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

                  console.log(suggestion)

                return (
                  <StyledSuggestions
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </StyledSuggestions>
                );
              })}
            </div>
          </WrapperDiv>
        )}
      </PlacesAutocomplete>
    );
  }
}

const WrapperDiv = styled.div`
    margin: auto;
    display: flex;

    padding: 2px 0 0;
    width: 70%;
`

const StyledSuggestions = styled.div`
    margin: auto;
    display: flex;
    background-color: #f8f8f8;
    box-shadow: 0 1px 3px 0px;
    border-radius: 3px;
    border: 1px solid #fafafa;

    overflow: hidden;

    &:focus, &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
`


const StyledInput = styled.input`
  font-family: Ubuntu-Regular;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.2rem;
  color: black;
  padding: 7px 0;

  &:hover {
    cursor: auto;

    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 400;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
`

export default AutoCompleteInput;
