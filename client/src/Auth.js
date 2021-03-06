import auth0 from 'auth0-js';

class Auth {
    constructor() {
	this.auth0 = new auth0.WebAuth({
	    // the following three lines MUST be updated
	    domain: 'dev-sibrlb8g.eu.auth0.com',
	    audience: 'https://dev-sibrlb8g.eu.auth0.com/userinfo',
	    clientID: 'fSjO32oj1PZQ7vEmYyVmqU24Md1524Wp',
	    redirectUri: 'http://localhost:3000/callback',
	    responseType: 'id_token',
	    scope: 'openid profile'
	});

	this.getProfile = this.getProfile.bind(this);
	this.handleAuthentication = this.handleAuthentication.bind(this);
	this.isAuthenticated = this.isAuthenticated.bind(this);
	this.signIn = this.signIn.bind(this);
	this.signOut = this.signOut.bind(this);
    }

    

    getProfile() {
	return this.profile;
    }

    getIdToken() {
	return this.idToken;
    }

    isAuthenticated() {
	return new Date().getTime() < this.expiresAt;
    }

    async signUp(email, password, username) {
	await this.auth0.signup({
	    connection: 'Username-Password-Authentication',
	    email: email,
	    password: password,
	    username: username,
	}, function (err) {
            if (err) return alert('Something went wrong: ' + err.message);
            return console.log('success signup without login!');
	});
    }
    
    async signIn() {
	await this.auth0.authorize();
    }
    
    async login(username, password){
	await this.auth0.login({
	    realm: 'Username-Password-Authentication',
	    username: username,
	    password: password,
	}, function (err) {
            if (err) return alert('Something went wrong with login: ' + err.message);
            return console.log('Succesfull login');
	});
    }

    handleAuthentication() {
	return new Promise((resolve, reject) => {
	    this.auth0.parseHash((err, authResult) => {
		if (err) return reject(err);
		if (!authResult || !authResult.idToken) {
		    return reject(err);
		}
		this.idToken = authResult.idToken;
		this.profile = authResult.idTokenPayload;
		// set the time that the id token will expire at
		this.expiresAt = authResult.idTokenPayload.exp * 1000;
		resolve();
	    });
	})
    }

    signOut() {
	// clear id token, profile, and expiration
	this.idToken = null;
	this.profile = null;
	this.expiresAt = null;
    }
}

const auth0Client = new Auth();

export default auth0Client;
