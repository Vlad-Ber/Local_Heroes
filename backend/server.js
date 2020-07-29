require("dotenv/config");

const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("./tokens.js");

const bcrypt = require("bcrypt"); // Ta bort sen!
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const { fakeDB } = require("./fakeDB.js");
const { isAuth } = require("./isAuth.js");

// Setting up the Server
const app = express();
// use express middleware for easier cookie handling
app.use(cookieParser());

// app.use(
//   cors({
//     origin: "http://localhost:5000",
//     credentials: true,
//   })
// );

// Needed to be able to read body data
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // support URL-encoded bodies

// Needed to fix safety -bug
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

// Connecting to the database (MongoDB)
const uri = "mongodb+srv://Vlad-Ber:arneiskogen1@cluster0-76fsx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  console.log("MongoDB database conneciton establised successfully!");


    // Logout the user
    app.post("/logout", (_req, res) => {
	res.clearCookie("refreshtoken", {path: "/refresh_token"});
	console.log(_req);
	return res.send({
	    message: "Logged out",

	});
    });


  // Get a new access token with a refresh token
  app.post("/refresh_token", (req, res) => {
    const token = req.cookies.refreshtoken;
    // If we don't have a token in our request
    if (!token) return res.send({ accesstoken: "" });
    // We have a token, verify!
    let payload = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      return res.send({ accesstoken: "" });
    }
    //token is valid , check if user exist
    const user = fakeDB.find((user) => user.id === payload.userID);
    if (!user) return res.send({ accesstoken: "" });
    // User exist, check if refreshtoken exist on user
    if (user.refreshtoken !== token) {
      return res.send({ accesstoken: "" });
    }
    // Token exist, create new refresh- and accesstoken
    const accesstoken = createAccessToken(user.id);
    const refreshtoken = createRefreshToken(user.id);
    user.refreshtoken = refreshtoken;
    // Send new refresh- and accesstoken
    sendRefreshToken(res, refreshtoken);
    return res.send({ accesstoken });
  });

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


    //FUNC: Get all errands for an Area
    //ARG: Area to get errands from
    //RET: Array of errands in area
    async function getErrandsArea(areaID) {
	let findResult = await errands.find({ areaID: areaID }).toArray();
	return findResult;
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
    try {
      let _userID = ObjectID(userID);
      var user = await users
        .findOne({ _id: _userID })
        .catch((error) => console.error(error));
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
  async function createArea(areaID) {
    let areaExist = await documentExist("Areas", { areaID: areaID });
    if (!areaExist) {
      var areaData = {
        areaID: areaID,
        users: [],
      };
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
	    username: user.username,
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
    city
  ) {
    var data = {
      refreshtoken: "",
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
    await areas.remove({ users: { $exists: true, $eq: [] } }).catch((error) => {
      console.log("Could not delete area", error);
    });
  }

  async function removeUserFromOldArea(areaID, userID) {
    await areas.updateOne(
      { areaID: areaID },
      { $pull: { users: { _id: new ObjectID(userID) } } }
    );
    await deleteEmptyArray();
  }

  async function updateVPInUsers(user) {
    await users.replaceOne({ username: user.username }, user);
  }

  async function updateVPInAreas(user) {
    await areas.updateOne(
      { areaID: user.areaID, "users._id": user._id },
      { $set: { "users.$.virtuePoints": user.virtuePoints } }
    );
  }

  // FUNC: used to update the refreshtoken for a user
  async function updateRefreshTokenUser(user, refreshtoken) {
    await users.updateOne(
      { username: user.username },
      { $set: { refreshtoken: refreshtoken } }
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
    let a = await areas.findOne({ areaID: user.areaID });
    console.log(a);
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

   /*  FUNC: Updates value of virtuepoints (VP) in
    *  Areas and Users collection for specific user
    *  and updates leaderboard for VP
    */
    async function updateVirtuePoints(user) {
        await updateVPInUsers(user);
        await updateVPInAreas(user);
        await updateLeaderboardRanking(user);
    }

    //FUNC: Returns 10 users with most VP in order in local area
    async function returnTop10(areaID) {
    	let localArea = await areas.findOne( { areaID: areaID } )
    	    .catch((error) => {
        		console.log("Could not find area in returnTop10", error)
        	    });
    	if(localArea.users != null){
	    console.log(localArea);
    	let top10 = await localArea.users.slice(0, 10);

    	return top10;
    	}
    }

    async function myRanking(currentUser){
      let localArea = await areas.findOne( { areaID: currentUser.areaID } )
          .catch((error) => {
            console.log("Could not find my ranking in myRanking()", error)
          });

      console.log("---------FUNCTION MYRANKING----------");
      console.log(localArea);

      var index = await localArea.users.findIndex(user => user.username === currentUser.username);
      return index + 1;
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



    //FUNC: Checks if e-mail address if valid
    function validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  {
        return true;
      } else {
        return false;
      }
    }

    function validatePhonenumber(number) {
      if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)) {
          return true;
      } else {
          return false;
      }
    }




  //FUNC: Deletes an errand from db
  //ARG: ErrandID to remove
  //TODO: Inte klar
  async function deleteErrand(errandID) {
    console.log("deleteErrand");
    let errandToRemove = ObjectID(errandID);
    console.log("errandToRemove: " + JSON.stringify(errandToRemove));
    await errands
      .deleteOne({
        _id: errandToRemove,
      })
      .catch((error) => {
        console.log("Could not delete errand", error);
      });
  }

  //--------------------------------MESSAGING FUNKTIONER-----------------------------------------------------//
  app.use(bodyParser.json());
  var router = express.Router();
  app.get("/health", (req, res) => {
    res.send("health check good");
  });

  // GETs username and checks if it unique
  app.post("/check-username", (username, res) => {
    let u = username.body;
    users.find({ username: u }).catch((error) => console.error(error));
  });

  // GETs and sends user data to database
  app.post("/insertUser", async (userData, res) => {
    let user = userData.body;
    try {
      //Hash userpassword, first argument is userpassword
      //second argument number of rounds to use when generating a salt
      let hashedPassword = await bcrypt.hash(user.password, 10);
      insertUser(
        user.username,
        hashedPassword,
        user.email,
        user.name,
        user.age,
        user.address,
        user.description,
        user.areaId,
        user.mobile,
        user.city
      );
      res.send({ message: "User Created" });
    } catch (err) {
	res.send({ error: "${err.message}" });
    }
  });

    // login a user
    app.post("/loginUser", async (data, res) => {
	let user = data.body;
	try {
	    let checkUser = await users.findOne({ username: user.username });
	    if (!checkUser) throw new Error("User does not exist");
	    let comparePassword = await bcrypt.compare(
		user.password,
		checkUser.password
	    );
	    if (!comparePassword) throw new Error("Password not correct");
	    const accesstoken = createAccessToken(checkUser._id);
	    const refreshtoken = createRefreshToken(checkUser._id);
	    // Update database
	    await updateRefreshTokenUser(checkUser, refreshtoken);
	    checkUser = await users.findOne({ username: user.username });
	    sendRefreshToken(res, refreshtoken);
	    checkUser.accessToken = accesstoken;
	    console.log(checkUser);
	    res.send({ login: true,
		       user: checkUser,
		       accesstoken,
		       email: data.body.email,
		     });
	} catch (err) {
	    res.send({
		error: `${err.message}`,
	    });
	}
    });


    app.post("/fetchUserByID", async (data, res) => {
	var user = await fetchUserByID(data.body.userID);
	res.send(user);
    });

    app.post("/getUsersArea", async function (req, res) {
    	var users = await getUsersArea(req.body.areaID);
    	res.send({ users });
    });

    app.post("/insertErrand", async (data, res) => {
    	let errandData = data.body;
    	await insertErrand(errandData);
    	res.send(errandData);
    });

    app.post("/updateErrand", (data, res) => {
    	let doneErrand = updateErrand(
    	    data.body.errandID,
    	    data.body.newErrandData
    	).catch((error) => console.error(error));
    	res.send(doneErrand);
    });

    app.post("/deleteErrand", async function (data, res) {
    	await deleteErrand(data.body.errandID);
    });
    app.post("/updateVirtuePoints", async (data, res) => {
	let userToUpdate = await getUser(data.body.userToUpdate);
	userToUpdate.virtuePoints = userToUpdate.virtuePoints + 2;
	await updateVirtuePoints(userToUpdate);
    });

    app.post('/checkAuth', async (req, res) => {
	try {
	    const userId = isAuth(req);
	    if (userId !== null) {
		res.send({
		    data: 'This is protected data.',
		});
	    }
	} catch (err) {
	    res.send({
		error: `${err.message}`,
	    });
	}
    });


    app.post("/uploadImage", async (data, res) => {
	let image = data.body;
    });
    app.post("/getUserErrand", async (data, res) => {
	var errands = await getErrandsUsername(data.body.username);
	res.send({ errands });
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
      let validEmail = await validateEmail(user.email);
      let validNumber = await validatePhonenumber(user.mobile);

    	let dataToSend = {
        uniqueUser: !userExists,
        uniqueEmail: !emailExists ,
        validEmail: validEmail,
        validPhoneNumber: validNumber,
      };

    	res.send(dataToSend);
    });

    app.post("/getUser", async(data, res) => {
	console.log("getUser request heard");
	var user = await getUser(data.body.username);
	console.log("res.send: " + JSON.stringify(user))
	res.send(user);
    });


    app.post("/updateUser", async (data, res) => {
      	console.log("updateUser request heard");
      	let newUserData = data.body;

        await updateUser(newUserData);

        console.log(newUserData.user)
      	res.send(newUserData); //non-sensical line?
    });

    app.post("/getErrandsArea", async function (req, res) {
	var errands = await getErrandsArea(req.body.areaID);
	res.send({ errands });
    });

    app.post("/getTop10", async (data, res) => {
        var top10 = await returnTop10(data.body.areaID)
	      .catch((error) => {
    	 	   console.log("post getTOP10 Error: ", error)
  	      });
      	res.send({ top10 });
    });

    app.post("/getMyRanking", async (data, res) => {
        var myRank = await myRanking(data.body.user)
	      .catch((error) => {
    		    console.log("post getTOP10 Error: ", error)
    	   });

         console.log("-----------MYRANKING USER------------");
         console.log(data.body.user);
        console.log("My ranking is: " + myRank);
      	res.send({ myRank });
    });


app.listen(process.env.PORT, () =>
  console.log(`Server listening to ${process.env.PORT}`)
	  );
});
// // // using the models and routes established
// // //const errandsRouter = require("./routes/errands");
// // const userRouter = require("./routes/users");

// // //server.use("/errands", errandsRouter);
// // server.use("/users", userRouter);
client.close();
