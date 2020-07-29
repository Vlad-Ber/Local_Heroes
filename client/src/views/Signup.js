import React, { Component } from "react";

import axios from "axios";
import styled from 'styled-components'
import { config }  from "../config"

import LinkWrapper from "../components/LinkWrapper.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";


import "../css/util.css";
import "../css/main.css";

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
        credentials: "include",
      }).then((response) => {
	 
        let accessToken = response.data.accesstoken;
        var login = response.data.login;
        console.log(accessToken);
        if (login) {
          let user = response.data.user;
          window.localStorage.setItem("loggedInUser", JSON.stringify(user));
            this.props.activeUser.onSetLoggedInUser(user, accessToken);
          this.props.history.push("/home");
        } else {
            this.renderErrorText();
        }
      })
      .catch((error) => {
        console.log("Got error while posting data", error);
      });
  };

  renderErrorText = () => {
    this.setState({
      text: "Wrong Username or Password",
    });

    let timer = setTimeout(() => {
      this.setState({
        text: "",
      });
    }, 5000);
    return () => clearTimeout(timer);
  };

  render() {
    return (
    	<div className="limiter">
    		<div className="container-login100">
    			<div className="wrap-login100">
    				<form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
    					<span className="login100-form-title-localHeroes">
                  <FontAwesomeIcon
                    icon={faSeedling}
                    style={{
                      fontSize: "72px",
                      color: "#31D285",
                    }}
                  />
    					    LocalHeroes
    					</span>

    					<div className="wrap-input100 validate-input m-b-16">
    						<input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.saveInput}
                />
    						<span className="focus-input100"></span>
    					</div>

    					<div className="wrap-input100 validate-input">
    						<input className="input100"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.saveInput}
                />
    						<span className="focus-input100"></span>
    					</div>

    					<div className="text-right p-t-13 p-b-23">
    						<span className="txt1">
    							Forgot <span> </span>
    						</span>

    						<div className="txt2">
    							Username / Password?
    						</div>
    					</div>

    					<div className="container-login100-form-btn">
    						<button className="login100-form-btn" onClick={this.checkLogin}>
    							Sign in
    						</button>
    					</div>

              <StyledErrorText>{this.state.text}</StyledErrorText>

    					<div className="flex-col-c p-t-170 p-b-40">
    						<span className="txt1 p-b-9">
    							Don’t have an account?
    						</span>

                <LinkWrapper to="profile-creation">
      						<div className="txt3">
      							Sign up now
      						</div>
                </LinkWrapper>
              </div>

    				</form>
    			</div>
    		</div>
    	</div>
    );
  }
}

const StyledErrorText = styled.div`
    position:absolute;
    text-align: center;


    margin-left: 15%;
    margin-top: 5%;
`

export default Signup;
