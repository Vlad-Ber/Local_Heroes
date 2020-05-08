import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";

import SectionTitle from "../components/SectionTitle.js";
import TextInput from "../components/TextInput.js";
import TextButton from "../components/TextButton.js";
import LinkWrapper from "../components/LinkWrapper.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      text: "",
    };
  }

  saveInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkLogin = (e) => {
    e.preventDefault();
    axios
      .post("/login-user", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        let login = response.data.login;

        if (login) {
          let user = response.data.user;
          window.localStorage.setItem("loggedInUser", JSON.stringify(user));
          this.props.activeUser.onSetLoggedInUser(user);
          this.props.history.push("/home");
        } else {
          this.setState({
            text: "Wrong Username or Password",
          });
        }
      });
  };

  render() {
    console.log(this.props);
    return (
      <SignUpWrapper>
        <WelcomeMessage>
          <FontAwesomeIcon
            icon={faSeedling}
            style={{
              fontSize: "72px",
              color: "#31D285",
            }}
          />
          <p>Welcome to LocalHero!</p>
        </WelcomeMessage>

        <SectionTitle text="USERNAME" />
        <TextInput
          name="username"
          height="32px"
          width="240px"
          onChange={this.saveInput}
          autocomplete="username"
        />

        <SectionTitle text="PASSWORD" />
        <TextInput
          name="password"
          type="password"
          height="32px"
          width="240px"
          onChange={this.saveInput}
          autocomplete="new-password"
        />

        <TextButton
          onClick={this.checkLogin}
          description="LOGIN"
          marginTop="40px"
          marginBottom="10px"
          height="32px"
          width="240px"
        />

        <LinkWrapper to="profile-creation">
          <TextButton
            description="SIGN UP"
            marginTop="10px"
            marginBottom="10px"
            height="32px"
            width="240px"
          />
        </LinkWrapper>

        <TextWrapper>{this.state.text}</TextWrapper>
      </SignUpWrapper>
    );
  }
}

const TextWrapper = styled.div`
  border: #4caf50;
  color: red;
  font-size: 20px;
  border-radius: 100%;
  margin: auto;
  padding-top: 0.8em;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 10px;
`;

export default Signup;
