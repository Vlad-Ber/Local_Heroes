import React, { Component } from "react";
import NavBar from "../components/NavBar.js";
import TextButton from "../components/TextButton.js";
import LinkWrapper from "../components/LinkWrapper.js";
import styled from "styled-components";
import data from "../data/data.json";
import EventItemListView from "../components/EventItemListView.js";
import { render } from "@testing-library/react";
import axios from "axios";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.activeUser.username,
      address: this.props.activeUser.adress,
      email: this.props.activeUser.email,
      fetchErrandsSuccess: null,

      errands: [],
      profilePic: "https://image.flaticon.com/icons/png/512/37/37943.png",
    };

    this.getUserErrands = this.getUserErrands.bind(this);
  }

  getUserErrands = () => {
    axios
      .post("/getUserErrand", {
        username: this.props.activeUser.username,
      })
      .then((response) => {
        this.setState({
          fetchErrandsSuccess: true,
          errands: response.data["errands"],
        });
      })
      .catch((error) => {
        console.log("You have no errands!", error);
        this.setState({ fetchErrandsSuccess: false });
      });
  };
  componentDidMount() {
    this.getUserErrands();
  }

  render() {
    return (
      <div>
        <NavBar leftButtonType="back" leftButtonLink="/home" />
        <StyledImage src={this.state.profilePic} />
        <StyledText> Name: {this.state.user} </StyledText>
        <StyledText>Area: {this.state.address} </StyledText>
        <StyledText>E-mail: {this.state.email} </StyledText>
        <StyledTextHeadLine>My Requests:</StyledTextHeadLine>
        {this.state.errands.length === 0 && (
          <StyledText>You have no errands Currently!</StyledText>
        )}
        <EventItemListView errands={this.state.errands} />
        <LinkWrapper to="/">
          <TextButton onClick={window.localStorage.clear()} description="LOG OUT" />
        </LinkWrapper>
      </div>
    );
  }
}
const StyledText = styled.h3`
  margin: 0.5em;
`;
const StyledTextHeadLine = styled.h2`
  margin: 0.5em;
`;
const StyledImage = styled.img`
  margin: 2em;
  width: 7em;
  height: 7em;
`;

export default ProfilePage;
