import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";
import { config }  from "../config"

import SectionTitle from "../components/SectionTitle.js";
import TextInput from "../components/TextInput.js";
import TextButton from "../components/TextButton.js";
import LinkWrapper from "../components/LinkWrapper.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";


import "./css/util.css";
import "./css/main.css";

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
      .post(config.baseUrl + "/loginUser", {
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
    return (

    	<div class="limiter">
    		<div class="container-login100">
    			<div class="wrap-login100">
    				<form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
    					<span class="login100-form-title">
                  <FontAwesomeIcon
                    icon={faSeedling}
                    style={{
                      fontSize: "72px",
                      color: "#31D285",
                    }}
                  />
    					    LocalHeroes
    					</span>

    					<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
    						<input
                class="input100"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.saveInput}
                />
    						<span class="focus-input100"></span>
    					</div>

    					<div class="wrap-input100 validate-input" data-validate = "Please enter password">
    						<input class="input100"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.saveInput}
                />
    						<span class="focus-input100"></span>
    					</div>

    					<div class="text-right p-t-13 p-b-23">
    						<span class="txt1">
    							Forgot <span> </span>
    						</span>

    						<a href="#" class="txt2">
    							Username / Password?
    						</a>
    					</div>

    					<div class="container-login100-form-btn">
    						<button class="login100-form-btn" onClick={this.checkLogin}>
    							Sign in
    						</button>
    					</div>

    					<div class="flex-col-c p-t-170 p-b-40">
    						<span class="txt1 p-b-9">
    							Don’t have an account?
    						</span>

                <LinkWrapper to="profile-creation">
      						<a class="txt3">
      							Sign up now
      						</a>
                </LinkWrapper>
              </div>
              
    				</form>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default Signup;
