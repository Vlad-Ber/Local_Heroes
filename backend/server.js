const express = require("express");
var bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
/*var cors = require('cors');
  app.use(cors());
  app.use(cors({origin: true, credentials: true}));
*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader(
	"Access-Control-Allow-Methods",
	"GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
	"Access-Control-Allow-Headers",
	"Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const MongoClient = require("mongodb").MongoClient;
const uri =  "mongodb+srv://Vlad-Ber:arneiskogen1@cluster0-76fsx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
client.connect((err) => {
    //----------------------------MONGODB FUNKTIONER-------------------------------------------------------------
    const db = client.db("LocalHeroes");

    const errands = db.collection("Errands");
    const areas = db.collection("Areas");
    const users = db.collection("Users");

    //FUNC: Check if a document exists
    //ARG: Collection name in string
    //ARG: Query to search or in JSON format
    //RET: True if document_query exists in collection, else false
    async function documentExist(collection, document_query) {
	const coll = db.collection(collection);
	let foundQuery = await coll
	    .findOne(document_query)
	    .catch((error) => console.error(error));
	if (foundQuery) {
	    return true;
	} else {
	    return false;
	}
    }
    //FUNC: Check if user email/username exists
    //ARG: Username in JSON format
    //ARG: Email in JSON-Format
    //RET: True if either usernamee/email is in Users-collection, else false
    async function checkUser(curUserName, curEmail) {
	let checkUser = await documentExist("Users", { username: curUserName });
	let checkEmail = await documentExist("Users", { email: curEmail });
	if (checkUser == true || checkEmail == true) {
	    return true;
	} else {
	    return false;
	}
    }


    //FUNC: Get all errands for an Area
    //ARG: Area to get errands from
    //RET: Array of errands in area
    async function getErrandsArea(areaID) {
	let findResult = await errands.find({ areaID: areaID }).toArray();
	return findResult;
    }

    //FUNC: Get all erands for a user
    //ARG: user.username to get errands from
    //RET: Array of errands created by a user by given Username
    async function getErrandsUsername(username) {
	let findResult = await errands.find({ requester: username }).toArray();
	return findResult;
    }

    async function getUser(username) {
	var user = await users
	    .findOne({ username: username })
	    .catch((error) => console.error(error));
	return user;
    }

    async function fetchUserByID(userID) {
	console.log("userID in fetchUserByID: " + userID)
	try {
	    let _userID = ObjectID(userID)
	    var user = await users
		.findOne({ _id: _userID })
		.catch((error) => console.error(error));
	    console.log("User in fetchUserByID is: " + user);
	    return user;
	} catch (e) {
	    console.log("in fetchUserByID: " + e);
	}
    }

    //FUNC: Get all users for an Area
    //ARG: Area to get users from
    //RET: Array of users in area
    async function getUsersArea(areaID) {
	let findResult = await users.find({ areaID: areaID }).toArray();
	return findResult;
    }


    //FUNC: Create new area if area doesnt exist.
    async function createArea(areaID){
	let areaExist = await documentExist("Areas", {areaID: areaID});

	if(!areaExist) {
	    var areaData = {
		areaID: areaID,
		users: [],
	    }

	    await areas.insertOne(areaData).catch((error) => console.error(error));

	}
    }


    //FUNC: Adds a user to virtuepoints ranking of area.
    //TODO: Initialize area (in insertuser?), push reference of user to areas
    async function insertUserToArea(user){

	await createArea(user.areaID);

  var data = {
    _id: user._id,
    virtuePoints: user.virtuePoints,
  }

	await areas.updateOne({ areaID: user.areaID }, { $push: { users: data }});

    }

    //FUNC: Adds a user to db. Adds user to given area. If area doesnt exist, create new area.
    //ARGS: data required
    async function insertUser(
	username,
	password,
	email,
	name,
	age,
	address,
	description,
	areaID,
	mobile,
	city,
    ) {
	var data = {
	    username: username,
	    password: password,
	    email: email,
	    name: name,
	    age: age,
	    address: address,
	    desription: description,
	    virtuePoints: 0,
	    areaID: areaID,
	    mobile: mobile,
	    city: city,
	};
	var queryToFind = { email: email };
	var userNameToFind = { username: username };

	var findEmail = await documentExist("Users", queryToFind);
	var findUser = await documentExist("Users", userNameToFind);
	if (findUser == false && findEmail == false) {

	    await users.insertOne(data).catch((error) => console.error(error));
	    insertUserToArea(data);

	    console.log("User " + name + " has been added!");

	    //TODO: Maybe dont need
	    if (findUser == true) {
		console.log("A user with this username already exists");
	    }
	    if (findEmail == true) {
		console.log("A user with this email already exists");
	    }
	}
    }

    //FUNC: Checks if password is correct for a given user
    //ARG: username to check password for
    //ARG: password to check
    //RET: True if given password matches the password stored for the given username in db
    async function loginFunction(username, password) {
	let curUser = await users
	    .findOne({ username: username })
	    .catch((error) => console.log(error));
	let curUserPassword = curUser.password;

	if (curUserPassword === password) {
	    return true;
	} else {
	    return false;
	}
    }

    async function updateErrand(errandID, newErrandData) {
	//TODO: check if the errand exists and maybe return true or false
	let currentErrand = await errands.findOne({ _id: new ObjectID(errandID) });
	let updatedErrand = currentErrand;

	// Map over fields in current errand and replace with new data
	Object.keys(newErrandData).map(
	    (key) => (updatedErrand[key] = newErrandData[key])
	);

	await errands.replaceOne({ _id: new ObjectID(errandID) }, updatedErrand);
    }

  async function deleteEmptyArray() {
      await areas.remove(
        { users: { $exists: true, $eq: [] } }
      )
      .catch((error) => {
    	    console.log("Could not delete area", error)
    	});
  }

    async function removeUserFromOldArea(areaID, userID) {
        await areas.updateOne(
          { areaID: areaID},
          { $pull: { users: { _id: new ObjectID(userID) } } },
        );

        await deleteEmptyArray();
      }

   async function updateUser(data) {
    	let oldUser = await users.findOne({ _id: new ObjectID(data.userID) });
    	let updatedUser = oldUser;

      await removeUserFromOldArea(oldUser.areaID, data.userID);

    	Object.keys(data.newUserData).map(
    	    (key) => (updatedUser[key] = data.newUserData[key])
    	);

      console.log(updatedUser);

      await users.replaceOne({ _id: new ObjectID(data.userID) }, updatedUser);
      await insertUserToArea(updatedUser);
      await updateLeaderboardRanking(updatedUser);
    }


    async function updateVPInUsers(user) {
	     await users.replaceOne({ username: user.username }, user);
    }

    async function updateVPInAreas(user) {
        await areas.updateOne(
          { areaID: user.areaID, "users._id": user._id },
          { $set: { "users.$.virtuePoints": user.virtuePoints } },
        );
    }

    //FUNC: Sorts the leaderboard for area with corresponding areaID
    async function updateLeaderboardRanking(user) {

	await areas.updateOne(
            { areaID: user.areaID },
            { $push: { users: { $each: [], $sort: { virtuePoints: -1 } } } }
	);
    }


    /*  FUNC: Updates value of virtuepoints (VP) in
    *   Areas and Users collection for specific user
    *   and updates leaderboard for VP
    */
    async function updateVirtuePoints(user) {
        await updateVPInUsers(user);
        await updateVPInAreas(user);
        await updateLeaderboardRanking(user);

        let a = await areas.findOne( { areaID: user.areaID } );
        console.log(a);
    }

    //FUNC: Returns 10 users with most VP in order in local area
    async function returnTop10(areaID) {

      let localArea = await areas.findOne( { areaID: areaID } );

      let top10 = localArea.users.slice(0, 10);

      return top10;
    }



    async function insertErrand(errandData) {
	var date = new Date();
	var dateString = date.toISOString().slice(0, 10);
	var data = {
	    createdAt: dateString, //Future improvement, show hours ago created
	    closedAt: "",
	    status: "waiting",
	    type: errandData.type,
	    title: errandData.title,
	    description: errandData.description,
	    adress: errandData.adress,
	    mobile: errandData.number,
	    email: errandData.email,
	    helper: "",
	    requester: errandData.requester,
	    areaID: errandData.areaID,
	};
	console.log(errandData.email)
	console.log(errandData.number)

	var insert = await errands
	    .insertOne(data)
	    .catch((error) => console.error(error));
    }



    const ObjectID = require("mongodb").ObjectID;

    //FUNC: Deletes an errand from db
    //ARG: ErrandID to remove
    //TODO: Inte klar
    async function deleteErrand(errandID) {
	console.log("deleteErrand")
	let errandToRemove = ObjectID(errandID);
	console.log("errandToRemove: " + JSON.stringify(errandToRemove))
	await errands.deleteOne({
	    _id: errandToRemove
	}).catch((error) => {
	    console.log("Could not delete errand", error)
	});
    }

    //--------------------------------MESSAGING FUNKTIONER-----------------------------------------------------//

    app.use(bodyParser.json());
    var router = express.Router();

    app.get("/health", (req, res) => {
	res.send("health check good")
    })


    const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
	    cache: true,
	    rateLimit: true,
	    jwksRequestsPerMinute: 5,
	    jwksUri: `https://dev-sibrlb8g.eu.auth0.com/.well-known/jwks.json`
	}),

	// Validate the audience and the issuer.
	audience: 'fSj032oj1PZQ7vEmYyVmqU24Md1524Wp',
	issuer: `https://dev-sibrlb8g.eu.auth0.com/`,
	algorithms: ['RS256']
    });

    
    // GETs username and checks if it unique
    app.post("/check-username", checkJwt, (username, res) => {
	let u = username.body;
	users.find({ username: u }).catch((error) => console.error(error));
    });

    // GETs and sends user data to database
    app.post('/insertUser', async (userData, res) => {
        let user = userData.body;
        try{

            //Hash userpassword, first argument is userpassword
            //second argument number of rounds to use when generating a salt
            let hashedPassword = await bcrypt.hash(user.password, 10);

            insertUser(user.username, hashedPassword, user.email, user.name, user.age, user.address,
                       user.description, user.areaId, user.mobile, user.city);
            res.send({ message: "User Created" });
        } catch(err){

            res.send({ error: '${err.message}'});
        }

    });


    app.post("/check-user", async (data, res) => {
	let user = data.body;
	let curUsername = { username: user.username };
	let curEmail = { email: user.email };

	let userExists = await documentExist("Users", curUsername);
	let emailExists = await documentExist("Users", curEmail);

	let dataToSend = { uniqueUser: userExists, uniqueEmail: emailExists };

	res.send(dataToSend);
    });

    app.post("/loginUser", checkJwt,async (data, res) => {
        console.log("inside login-user")
        let user = data.body;

        try {
            let checkUser = await users.findOne({ "username": user.username });
            if(!checkUser) throw new Error("User does not exist");

            let comparePassword = await bcrypt.compare(user.password, checkUser.password);
            if(!comparePassword) throw new Error("Password not correct");

            res.send({ "login": true, "user": checkUser });

        } catch (err) {
            res.send({ "login": false });
        }

    });


    app.post("/getUser",async(data, res) => {
	console.log("getUser request heard");
	var user = await getUser(data.body.username);
	console.log("res.send: " + JSON.stringify(user))
	res.send(user);
    });

    app.post("/fetchUserByID",checkJwt, async(data, res) => {
	console.log("fetchUserByID request heard");
	var user = await fetchUserByID(data.body.userID);
	console.log("res.send: " + JSON.stringify(user))
	res.send(user);
    });

    app.post("/updateUser", checkJwt, async (data, res) => {
      	console.log("updateUser request heard");
      	let newUserData = data.body;

        await updateUser(newUserData);
        //await updateVirtuePoints(newUserData.user);

        console.log(newUserData.user)
      	res.send(newUserData); //non-sensical line?
    });

    app.post("/getUsersArea",checkJwt,  async function (req, res) {
	var users = await getUsersArea(req.body.areaID);
	res.send({ users });
    });

    app.post("/insertErrand", checkJwt, async (data, res) => {
	//console.log("insertErrand request heard");
	let errandData = data.body;
	//console.log(JSON.stringify(errandData));
	await insertErrand(errandData);
	res.send(errandData);
    });

    app.post("/updateErrand", checkJwt, (data, res) => {
	//console.log("updateErrand app.post");
	let doneErrand = updateErrand(
	    data.body.errandID,
	    data.body.newErrandData
	).catch((error) => console.error(error));
	res.send(doneErrand);
    });

    app.post("/deleteErrand", checkJwt, async function (data, res) {
	console.log("deleteErrand request heard")
	console.log("data.body.errandID: " + data.body.errandID);
	await deleteErrand(data.body.errandID);
    });


    app.post("/updateVirtuePoints", checkJwt, async (data, res) => {
	let userToUpdate = await getUser(data.body.userToUpdate);

	userToUpdate.virtuePoints = userToUpdate.virtuePoints + 2;

	await updateVirtuePoints(userToUpdate);
    });

    app.post("/getErrandsArea",checkJwt,  async function (req, res) {
	var errands = await getErrandsArea(req.body.areaID);
	res.send({ errands });
    });

    app.post("/uploadImage", checkJwt, async (data, res) => {
	let image = data.body;
    });

    app.post("/getUserErrand", checkJwt, async (data, res) => {
	var errands = await getErrandsUsername(data.body.username);
	res.send({ errands });
    });

    /*app.post("/getTop10", async (data, res) => {
      	var areaID = await getErrandsUsername(data.body.areaID);
        var top10 = await returnTop10(areaID);

      	res.send({ top10 });
    });*/

});

client.close();
